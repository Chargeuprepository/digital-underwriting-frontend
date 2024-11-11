import { gql } from '@apollo/client';

export const GET_VEHICLE_DATA = gql`
  query GetVehicle($registrationNumber: String!) {
    vehicle(registrationNumber: $registrationNumber) {
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
        registeredAtRTO
        fitnessUpto
        rcStatus
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

// export const GET_CREDIT_DATA = gql``;
// export const GET_RISK_DATA = gql``;
