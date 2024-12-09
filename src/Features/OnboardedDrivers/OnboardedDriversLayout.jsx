import OnboardedHeader from './Components/OnboardedHeader';
import OnboardedBody from './Components/OnboardedBody';
import Pagination from '../../UI/Pagination';
import GridMaker from '../../UI/GridMaker';
import PrePostOnboarding from './Components/PrePostOnboarding';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useOnboardedDriversQueryManager } from './GraphQL/queryManager';

export default function OnboardedDriversLayout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { fetchOnboardedDriversData, loading, error, driverData } =
    useOnboardedDriversQueryManager('getOnboardedData');

  useEffect(
    function () {
      const updatedVariables = {
        credit: queryParams.get('credit') || 'medium',
        risk: queryParams.get('risk') || '',
        karma: queryParams.get('karma') || '',
        offset: +queryParams.get('offset') || 0,
      };

      fetchOnboardedDriversData({
        variables: {
          input: updatedVariables,
        },
      });
    },
    [location.search, fetchOnboardedDriversData]
  );

  return (
    <GridMaker column="1fr" row="1rem 5rem 1fr 3rem" gap="2rem" height={'82vh'}>
      <PrePostOnboarding></PrePostOnboarding>
      <OnboardedHeader length={driverData?.onboarded.length} />
      <OnboardedBody driverData={driverData && driverData} />
      <Pagination count={driverData?.onboarded.length} />
    </GridMaker>
  );
}
