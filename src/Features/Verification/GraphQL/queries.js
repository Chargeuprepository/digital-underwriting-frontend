import { gql } from '@apollo/client';

export const GET_VEHICLE_DATA = gql`
  query GetVehicle($input: RegistrationNumber!) {
    vehicle(input: $input) {
      statusCode
      headerData {
        maker
        financer
        registrationNumber
      }
      owner {
        name
        serialNumber
        fatherName
        permanentAddress
        presentAddress
        rcMobileNo
      }
      vehicleInformation {
        chassisNumber
        makerDescription
        manufacturedMonthYear
        makerModel
        engineNumber
      }
      registration {
        registrationNumber
        registrationDate
        registeredAt
        fitnessUpto
      }
      insurance {
        insuranceCompany
        insurancePolicyNumber
        insuranceValidity
      }
      additionalInformation {
        bodyTypeDescription
        color
        fuelType
        cubicCapacity
        grossVehicleWeight
        numberOfCylinders
        unladenWeight
        seatingCapacity
        vehicleCategory
        vehicleClassDescription
        normsDescription
      }
    }
  }
`;
export const GET_CREDIT_DATA = gql`
  query Credit($input: ApplicantInput!) {
    credit(input: $input) {
      requestId
      statusCode
      timestamp
      INProfileResponse {
        header {
          name
          mobile
        }
        hero {
          creditScore
          outstandingBalance
          accountsActive
          accountsDefault
        }
        accountSummary {
          creditScore
          cadSuitFiledCurrentBalance
          creditAccountActive
          creditAccountClosed
          creditAccountDefault
          creditAccountTotal
          outstandingBalanceAll
          outstandingBalanceSecured
          outstandingBalanceUnsecured
        }
        personalDetails {
          dateOfBirth
          firstName
          genderCode
          PANNumber
          lastName
          mobile
        }
        applicationDetails {
          amountFinanced
          buildingSociety
          city
          countryCode
          flatPlotHouseNumber
          landmark
          pinCode
          roadAreaLocality
          state
        }
        capsSummary {
          capsLast180Days
          capsLast90Days
          capsLast30Days
          capsLast7Days
          nonCreditCapsLast180Days
          nonCreditCapsLast90Days
          nonCreditCapsLast30Days
          nonCreditCapsLast7Days
          totalCapsLast180Days
          totalCapsLast90Days
          totalCapsLast30Days
          totalCapsLast7Days
        }
        otherDetails {
          employmentStatus
          income
          maritalStatus
          numberOfMajorCreditCardHeld
          policy
          timeWithEmployer
        }
      }
    }
  }
`;
export const GET_RISK_DATA = gql`
  query Risk($input: RiskInput!) {
    risk(input: $input) {
      statusCode
      error
      status
      timestamp
      transactionId
      merchantId
      workflowId
      workflowName
      riskScore
      header {
        name
        mobile
      }
      insights {
        positives
        negatives
      }
      allFourRisk {
        identity {
          identityConfidence
        }
        telecom {
          telecomRisk
          isPhoneReachable
          currentNetworkName
          phoneFootprintStrengthOverall
        }
        digital {
          digitalFootprint
          name
          nameMatchScore
          phoneDigitalAge
        }
        social {
          socialFootprintScore
          phoneSocialMediaCount
          socialMediaScore
          eCommerceScore
          workUtilityScore
        }
      }
      telecomAttributes {
        currentNetworkName
        currentNetworkRegion
        isPhoneReachable
        numberHasPortingHistory
        numberBillingType
        mobileFraud
        phoneFootprintStrengthOverall
      }
      digitalAttributes {
        name
        source
        vpa
        upiPhoneNameMatch
        upiPhoneNameMatchScore
        nameMatchScore
        phoneDigitalAge
      }
      socialAttributes {
        a23games
        ajio
        amazon
        byjus
        flipkart
        housing
        indiamart
        instagram
        isWABusiness
        jeevansaathi
        jiomart
        my11
        paytm
        rummycircle
        shaadi
        swiggy
        whatsapp
        yatra
      }
    }
  }
`;
