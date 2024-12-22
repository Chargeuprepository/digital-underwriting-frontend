import { gql } from '@apollo/client';

export const GET_DASHBOARD_DATA = gql`
  query {
    dashboard {
      error {
        status
        message
      }
      settingGoogleSheetDataInfo {
        dataSet
        error {
          status
          message
        }
      }
      gettingGoogleSheetDataInfo {
        status
        message
      }
      data {
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
  }
`;
