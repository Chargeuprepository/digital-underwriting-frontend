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
// export const GET_RISK_DATA = gql``;
