import { gql } from '@apollo/client';

export const GET_ONBOARDED_DATA = gql`
  query GetOnboarded($input: OnboardedInput) {
    onboarded(input: $input) {
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
`;

export const GET_DRIVER = gql`
  query GetDriver($input: String!) {
    driver(input: $input) {
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
      riskAndCreditInformation {
        riskScore
        socialFootPrintScore
        telecomRisk
        socialScore
        digitalFootPrint
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
      earningInformation {
        thirdLastEarning
        secondLastEarning
        lastEarning
      }
      emi
    }
  }
`;

export const GET_ONBOARDED_RISK = gql`
  query OnboardedRisk($input: OnboardedRiskInput) {
    onboardedRisk(input: $input) {
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
    }
  }
`;
