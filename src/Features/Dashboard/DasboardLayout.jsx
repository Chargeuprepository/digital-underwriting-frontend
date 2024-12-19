import BusinessStats from './Components/BusinessStats';
import DistanceTenureMonths from './Components/DistanceTenureMonths';
import Churned from './Components/Churned';
import EMITrends from './Components/EMITrends';
import CreditVsRisk from './Components/CreditVsRisk';
import CreditVsKarma from './Components/CreditVsKarma';
import GridMaker from '../../UI/GridMaker';
import { useDashboardQueryManager } from './GraphQL/queryManager';
import { useEffect } from 'react';
import Spinner from '../../UI/Spinner';
import TryAgain from '../../UI/TryAgain';
import toast from 'react-hot-toast';

export default function DashboardLayout() {
  const { fetchDashboardData, loading, error, data } =
    useDashboardQueryManager('getDashboardData');

  useEffect(function () {
    fetchDashboardData();
  }, []);

  useEffect(
    function () {
      if (data?.dashboard?.error?.message) {
        toast.error(
          `${data?.dashboard?.error?.status}: ${data?.dashboard?.error?.message}`
        );
      }
    },
    [data?.dashboard?.error?.message]
  );

  console.log(data);
  const dashboardData = data?.dashboard?.data;

  return (
    <>
      {!data ? (
        <Spinner />
      ) : (
        <GridMaker
          column="1fr 0.7fr 0.7fr 0.9fr 0.6fr 0.6fr 1fr"
          row="0.92fr 1fr"
          gap="2rem"
        >
          {data?.dashboard?.error ? (
            <TryAgain />
          ) : (
            <>
              <BusinessStats
                drivers={dashboardData?.totalDrivers}
                emiOnTime={dashboardData?.emiTrendsData.emiOnTime}
              />
              <CreditVsRisk
                creditVsRisk={dashboardData?.riskCreditkarmaData.creditVsRisk}
              />
              <CreditVsKarma
                creditVsKarma={dashboardData?.riskCreditkarmaData.creditVsKarma}
              />
              <DistanceTenureMonths runKmData={dashboardData?.runKmData} />
              <EMITrends emiTrends={dashboardData?.emiTrendsData.emiTrends} />
              <Churned
                churnedDriversData={dashboardData?.churnedDriversData}
                lastSixMonthDrivers={dashboardData?.lastSixMonthDrivers}
              />
            </>
          )}
        </GridMaker>
      )}
    </>
  );
}
