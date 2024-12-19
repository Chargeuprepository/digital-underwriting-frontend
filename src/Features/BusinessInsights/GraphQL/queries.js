import { gql } from '@apollo/client';

export const GET_BUSINESS_INSIGHTS_DATA = gql`
  query GetBusinessInsights($input: BusinessInsightsInput) {
    businessInsights(input: $input) {
      error {
        status
        message
      }
      data {
        length
        avgCredit
        resultRange {
          lowCreditPercentage
          mediumCreditPercentage
          highCreditPercentage
        }
        vehicleFinanced {
          yes
          no
        }
        identityConfidence {
          high
          medium
          low
        }
        phoneNameMatchScore {
          high
          medium
          low
        }
        driversUsingUpi {
          yes
          no
        }
        digitalFootprint {
          high
          medium
          low
        }
        socialFootprint {
          high
          medium
          low
        }
        socialMediaPlatform {
          amazon
          whatsapp
          waBusiness
          instagram
          flipkart
          paytm
        }
        phoneFootprint {
          high
          medium
          low
        }
        digitalAge {
          high
          medium
          low
        }
        phoneNetwork {
          prepaid
          postpaid
        }
        uniqueCities
      }
    }
  }
`;
