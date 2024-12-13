import styled from 'styled-components';
import BarRenderContent from '../../../UI/BarRenderContent';
import breakCamelCase from '../../../Utils/breakCamelCase';
import { dateSubtractor } from '../../VerificationResults/UI/fun';

const typeData = [
  'personalInformation',
  'vehicleInformation',
  'contactInformation',
  'footprintsAndRisk',
  'businessInformation',
  'financialInformation',
  'socialMediaInformation',
];

const StyledDriverOtherDetails = styled.div`
  grid-row: 4;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
  padding: 4rem 2rem;
  box-shadow: 10px 10px 20px rgba(67, 67, 202, 0.445);
  border-radius: 0.6rem;
`;
const DetailHeading = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-gray-100);
  text-transform: uppercase;
`;
const DetailsCategory = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;

export default function DriverOtherDetails({ userData }) {
  const labelColor = 'var(--color-gray-100)';
  const valueColor = 'var(--color-gray-300)';
  const border = '1px solid var(--color-gray-600)';

  if (userData === null) return;

  function calculateVehicleAge(dateInput) {
    const inputDate =
      typeof dateInput === 'string' && /^\d{2}-\d{2}-\d{4}$/.test(dateInput)
        ? new Date(dateInput.split('-').reverse().join('-'))
        : new Date(dateInput);

    if (isNaN(inputDate)) return null; // Invalid date

    const today = new Date();
    const yearDiff = today.getFullYear() - inputDate.getFullYear();
    const monthDiff = today.getMonth() - inputDate.getMonth();
    const totalMonths = yearDiff * 12 + monthDiff;

    return today.getDate() >= inputDate.getDate()
      ? totalMonths
      : totalMonths - 1;
  }

  // const categorizedData = {
  //   personalInformation: {
  //     firstName: userData.OwnerFirstName,
  //     lastName: userData.LastName,
  //     dob: new Date(userData.Owners_DOB).toISOString().split('T')[0],
  //     age:
  //       new Date().getFullYear() - new Date(userData.Owners_DOB).getFullYear(),
  //     gender: userData.Owner_Gender,
  //     maritalStatus: userData.MaritalStatus,
  //     numberOfChildren: userData.NoofChildren,
  //     address: userData.Owner_Permanent_Address,
  //     city: userData.Es_City,
  //     state: userData.State,
  //     houseOwnershipType: userData.Residence,
  //   },
  //   contactInformation: {
  //     mobileNo: userData.Contact_Number_of_Owner,
  //     adhaarNo: userData.Owner_Aadhaar_Number, // Adjusted for readability
  //     panNo: userData.Owner_PAN_Number,
  //     upiId: userData.vpa, // From Phone to Name.vpa
  //   },
  //   vehicleInformation: {
  //     vehicleType: userData.VehicleType,
  //     VehicleRegistrationNumber: userData.VehicleRegistrationNumber,
  //     VehicleModel: userData.VehicleModel,
  //     registrationDate: userData.PurchaseDate,
  //     vehicleAgeInMonths: calculateVehicleAge(userData.PurchaseDate),
  //     vehicleOwnership: userData.VehicleStatus,
  //     vehicleInsured: userData.InsurancerName,
  //   },
  //   businessInformation: {
  //     businessSegment: userData.BusinessSegment,
  //   },
  //   financialInformation: {
  //     bank: userData.BankName,
  //     accountNo: userData.Bank_Account_Number, // Adjusted for readability
  //     cibilScore: userData.creditScore, // Not provided
  //     riskScore: userData.riskScore,
  //     downPayment: userData.DownPayment,
  //     tenure: userData.Tenure,
  //   },
  //   socialAndDigitalInformation: {
  //     socialScore: userData.socialScore,
  //     digitalAge: userData.digitalage, // Assuming this is in months or a derived score
  //     telecomRisk: userData.telecomRisk,
  //     digitalFootprint: userData.digitalFootprint,
  //     identityConfidence: userData.identityConfidence,
  //   },
  // };
  const {
    personalInformation,
    vehicleInformation,
    contactInformation,
    footprintsAndRisk,
    businessInformation,
    financialInformation,
    socialMediaInformation,
  } = userData;
  const categorizedData = {
    personalInformation,
    vehicleInformation,
    contactInformation,
    footprintsAndRisk,
    businessInformation,
    financialInformation,
    socialMediaInformation,
  };

  console.log(categorizedData);
  console.log(userData);

  return (
    <StyledDriverOtherDetails>
      {typeData.map((data, i) => {
        const userInfo = categorizedData[data];
        return (
          <DetailContainer key={i}>
            <DetailHeading>{breakCamelCase(data)}</DetailHeading>
            <DetailsCategory>
              {BarRenderContent(userInfo, labelColor, valueColor, border)}
            </DetailsCategory>
          </DetailContainer>
        );
      })}
    </StyledDriverOtherDetails>
  );
}
