import{g as e,u as i}from"./useLazyQuery-B69fhfCn.js";const d=e`
  query GetOnboarded($input: OnboardedInput) {
    onboarded(input: $input) {
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
        length
        onboardedManipulatedData {
          id
          name
          karma
          credit
          risk
          avgDpd
          service
          runKm
          nps
        }
      }
    }
  }
`,c=e`
  query GetDriver($input: String!) {
    driver(input: $input) {
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
        id
        status
        onboardedDate
        cardData {
          service
          runKm
          lossDays
          karmaScore
          nps
          avgDpd
          aon
        }
        personalInformation {
          firstName
          lastName
          dob
          gender
          maritalStatus
          noOfChildren
          permanentAddress
          city
          state
        }
        contactInformation {
          mobile
          aadhaar
          pan
          vpa
          source
        }
        vehicleInformation {
          vehicleFinanced
          vehicleType
          vehicleRegistrationNumber
          vehicleModel
          serviceType
          registrationDate
          vehicleAgeInMonths
        }
        financialInformation {
          bankAccountNumber
          IFSCCode
          downPayment
          tenure
          creditScore
          avgDpd
          emiDpd
        }
        footprintsAndRisk {
          riskScore
          socialFootPrint
          digitalFootPrint
          phoneFootPrint
          telecomRisk
          socialScore
          identityConfidence
        }
        businessInformation {
          businessSegment
          serviceType
        }
        socialMediaInformation {
          amazon
          flipkart
          instagram
          waBusiness
          paytm
          whatsapp
        }
        runKmInformation {
          thirdLastRunKm
          secondLastRunKm
          lastRunKm
        }
        earningVsExpense {
          earningInformation {
            thirdLastEarning
            secondLastEarning
            lastEarning
          }
          expenseInformation {
            thirdLastExpense
            secondLastExpense
            lastExpense
          }
        }
        emi
      }
    }
  }
`,g=e`
  query OnboardedRisk($input: OnboardedRiskInput) {
    onboardedRisk(input: $input) {
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
        riskScore
        digital {
          digitalFootprint
          affluenceScore
          digitalPaymentScore
          vpa
        }
        identity {
          identityConfidence
          phoneFootprint
          digitalAge
          nameMatchScore
        }
        social {
          socialFootprint
          socialMediaScore
          socialMediaCount
          ecommerceScore
        }
        telecom {
          telecomRisk
          isPhoneReachable
          billing
          portHistory
        }
        whereIStand {
          score
          percent
          color
        }
      }
    }
  }
`,m={getOnboardedData:d,getDriverData:c,getOnboardedRiskData:g},l=t=>{const a=m[t],[n,{loading:o,error:r,data:s}]=i(a);return{fetchOnboardedDriversData:n,loading:o,error:r,driverData:s}};export{l as u};
