import { gql } from '@apollo/client';

export const GET_DASHBOARD_DATA = gql`
  query {
    dashboard {
      totalDrivers
      runKmData {
        name
        data
      }
      riskCreditkarmaData {
        creditVsRisk {
          CreditHighRiskHigh
          CreditHighRiskMedium
          CreditHighRiskLow
          CreditMediumRiskHigh
          CreditMediumRiskMedium
          CreditMediumRiskLow
          CreditLowRiskHigh
          CreditLowRiskMedium
          CreditLowRiskLow
        }
        creditVsKarma {
          CreditHighKarmaHigh
          CreditHighKarmaMedium
          CreditHighKarmaLow
          CreditMediumKarmaHigh
          CreditMediumKarmaMedium
          CreditMediumKarmaLow
          CreditLowKarmaHigh
          CreditLowKarmaMedium
          CreditLowKarmaLow
        }
      }
      lastSixMonthDrivers {
        month
        count
      }
      emiTrendsData {
        emiOnTime
        emiTrends {
          value
          name
        }
      }
      churnedDriversData {
        month
        count
      }
    }
  }
`;
