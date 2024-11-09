import { gql } from '@apollo/client';

const GET_DATA = gql`
  query GetVehicle($registrationNumber: String!) {
    vehicle(registrationNumber: $registrationNumber) {
      statusCode
      owner {
        name
        serialNumber
        fatherName
        permanentAddress
        presentAddress
        mobileNumber
      }
      vehicleInformation {
        chassisNumber
        makerDescription
        manufacturedMonthYear
        makerModel
        engineNumber
        financierDetails
      }
      registration {
        registrationNumber
        registrationDate
        registeredAtRTO
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
export default function vehicleAPI(vehicleInput) {}
