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

export default function DashboardLayout() {
  const { fetchDashboardData, loading, error, data } =
    useDashboardQueryManager('getDashboardData');

  useEffect(function () {
    fetchDashboardData();
  }, []);

  console.log(data);
  // const {
  //   churnedDriversData,
  //   emiTrendsData,
  //   lastSixMonthDrivers,
  //   runKmData,
  // } = data?.dashboard;
  const dashboardData = data?.dashboard;

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
        </GridMaker>
      )}
    </>
  );
}
