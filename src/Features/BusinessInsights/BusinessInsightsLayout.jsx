import Row1Layout from './Row1/Row1Layout';
import Row2Layout from './Row2/Row2Layout';
import Row3Layout from './Row3/Row3Layout';
import Row4Layout from './Row4/Row4Layout';
import Row5Layout from './Row5/Row5Layout';
import GridMaker from '../../UI/GridMaker';
import { useEffect, useState } from 'react';
import { useBusinessInsightsQueryManager } from './GraphQL/queryManager';
import Spinner from '../../UI/Spinner';
import { useLocation } from 'react-router-dom';

export default function BusinessInsightsLayout() {
  const location = useLocation(); // Get the current location object
  const queryParams = new URLSearchParams(location.search); // Parse the query string
  // const [variables, setVariables] = useState({
  //   credit: '',
  //   risk: '',
  //   zone: null,
  // });
  const { fetchBusinessInsightsData, loading, error, data } =
    useBusinessInsightsQueryManager('getBusinessInsightsData');

  useEffect(() => {
    const updatedVariables = {
      credit: queryParams.get('credit') || '',
      risk: queryParams.get('risk') || '',
      zone: queryParams.get('zone')?.split(',') || null,
    };

    // setVariables(updatedVariables);

    fetchBusinessInsightsData({
      variables: {
        input: updatedVariables,
      },
    });
  }, [location.search, fetchBusinessInsightsData]);

  console.log(data);

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <GridMaker row="6rem repeat(4, 1fr)" gap="1rem">
          <Row1Layout
            length={data?.businessInsights.length}
            zone={data?.businessInsights.uniqueCities}
          />
          <Row2Layout
            avgCredit={data?.businessInsights.avgCredit}
            resultRange={data?.businessInsights.resultRange}
            vehicleFinanced={data?.businessInsights.vehicleFinanced}
            length={data?.businessInsights.length}
          />
          <Row3Layout
            identityConfidence={data?.businessInsights.identityConfidence}
            phoneNameMatchScore={data?.businessInsights.phoneNameMatchScore}
            driversUsingUpi={data?.businessInsights.driversUsingUpi}
          />
          <Row4Layout
            digitalFootprint={data?.businessInsights.digitalFootprint}
            socialFootprint={data?.businessInsights.socialFootprint}
            socialMediaPlatform={data?.businessInsights.socialMediaPlatform}
          />
          <Row5Layout
            phoneFootprint={data?.businessInsights.phoneFootprint}
            digitalAge={data?.businessInsights.digitalAge}
            phoneNetwork={data?.businessInsights.phoneNetwork}
          />
        </GridMaker>
      )}
    </>
  );
}
