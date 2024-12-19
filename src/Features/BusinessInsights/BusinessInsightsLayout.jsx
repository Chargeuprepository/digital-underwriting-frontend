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
import TryAgain from '../../UI/TryAgain';
import toast from 'react-hot-toast';

export default function BusinessInsightsLayout() {
  const location = useLocation(); // Get the current location object
  const queryParams = new URLSearchParams(location.search); // Parse the query string

  const { fetchBusinessInsightsData, loading, error, data } =
    useBusinessInsightsQueryManager('getBusinessInsightsData');

  useEffect(() => {
    const updatedVariables = {
      credit: queryParams.get('credit') || '',
      risk: queryParams.get('risk') || '',
      zone: queryParams.get('zone')?.split(',') || null,
    };

    fetchBusinessInsightsData({
      variables: {
        input: updatedVariables,
      },
    });
  }, [location.search, fetchBusinessInsightsData]);

  useEffect(
    function () {
      if (data?.businessInsights?.error?.message) {
        toast.error(
          `${data?.businessInsights?.error?.status}: ${data?.businessInsights?.error?.message}`
        );
      }
    },
    [data?.businessInsights?.error?.message]
  );

  console.log(data);

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <GridMaker row="6rem repeat(4, 1fr)" gap="1rem" minHeight={'100vh'}>
          {data?.businessInsights?.error ? (
            <TryAgain />
          ) : (
            <>
              <Row1Layout
                length={data?.businessInsights.data.length}
                zone={data?.businessInsights.data.uniqueCities}
              />
              <Row2Layout
                avgCredit={data?.businessInsights.data.avgCredit}
                resultRange={data?.businessInsights.data.resultRange}
                vehicleFinanced={data?.businessInsights.data.vehicleFinanced}
                length={data?.businessInsights.data.length}
              />
              <Row3Layout
                identityConfidence={
                  data?.businessInsights.data.identityConfidence
                }
                phoneNameMatchScore={
                  data?.businessInsights.data.phoneNameMatchScore
                }
                driversUsingUpi={data?.businessInsights.data.driversUsingUpi}
              />
              <Row4Layout
                digitalFootprint={data?.businessInsights.data.digitalFootprint}
                socialFootprint={data?.businessInsights.data.socialFootprint}
                socialMediaPlatform={
                  data?.businessInsights.data.socialMediaPlatform
                }
              />
              <Row5Layout
                phoneFootprint={data?.businessInsights.data.phoneFootprint}
                digitalAge={data?.businessInsights.data.digitalAge}
                phoneNetwork={data?.businessInsights.data.phoneNetwork}
              />
            </>
          )}
        </GridMaker>
      )}
    </>
  );
}
