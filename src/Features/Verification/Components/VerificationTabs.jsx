import { useState } from 'react';
import {
  StyledVerificationTab,
  VerificationName,
  VerificationNameSpan,
} from '../UI';
import VerificationForm from './VerificationForm';

const data = [
  {
    name: 'risk score',
    imageSubmission: false,
    bgimage: 'RiskVerify.png',
    specificFetchKey: 'getRiskData',
    routeName: 'riskVerification',
    type: 'risk',
    parameters: [
      {
        label: 'name',
        formValue: 'name',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide the name',
        placeholder: 'Ex: Amit shankar',
      },
      {
        label: 'phone number',
        formValue: 'phone number',
        type: 'input',
        valueType: 'number',
        required: true,
        message: 'Provide the Mobile no.',
        placeholder: 'Ex: 984****321',
        max: '10',
      },
    ],
  },
  {
    name: 'vehicle details',
    imageSubmission: false,
    bgimage: 'VehicleVerify.png',
    specificFetchKey: 'getVehicleData',
    routeName: 'vehicleVerification',
    type: 'vehicle',
    parameters: [
      {
        label: 'RC number',
        formValue: 'rc number',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide the RC No.',
        placeholder: 'Ex: DL4****40',
      },
    ],
  },
  // {
  //   name: 'credit score',
  //   imageSubmission: false,
  //   bgimage: 'CreditVerify.png',
  //   routeName: 'creditVerification',
  //   specificFetchKey: 'getCreditData',
  //   type: 'risk',
  //   parameters: [
  //     {
  //       label: 'first name',
  //       formValue: 'first name',
  //       type: 'input',
  //       valueType: 'text',
  //       required: true,
  //       message: 'Provide first name',
  //       placeholder: 'Ex: aman',
  //     },
  //     {
  //       label: 'last name',
  //       formValue: 'last name',
  //       type: 'input',
  //       valueType: 'text',
  //       required: true,
  //       message: 'Provide last name',
  //       placeholder: 'Ex: sharma',
  //     },
  //     {
  //       label: 'PAN',
  //       formValue: 'pan',
  //       type: 'input',
  //       valueType: 'text',
  //       required: true,
  //       message: 'Provide PAN number',
  //       max: '10',
  //       placeholder: 'Ex: BO******9K',
  //     },
  //     {
  //       label: 'gender',
  //       formValue: 'gender code',
  //       type: 'select',
  //       required: true,
  //       options: ['male', 'female'],
  //       values: ['1', '2'],
  //     },
  //     {
  //       label: 'mobile',
  //       formValue: 'mobile',
  //       type: 'input',
  //       valueType: 'number',
  //       required: true,
  //       max: '12',
  //       message: 'Provide mobile no.',
  //       placeholder: 'Ex: 91098****321',
  //     },
  //     {
  //       label: 'address 1',
  //       formValue: 'address line 1',
  //       type: 'address1',
  //       valueType: 'text',
  //       required: true,
  //       message: 'Provide address 1',
  //       placeholder: 'No special characters',
  //     },
  //     {
  //       label: 'address 2',
  //       formValue: 'address line 2',
  //       type: 'address2',
  //       valueType: 'text',
  //       required: true,
  //       message: 'Provide address 2',
  //       placeholder: 'No special characters',
  //     },
  //     {
  //       label: 'DOB',
  //       formValue: 'date Of birth',
  //       type: 'dob',
  //       valueType: 'text',
  //       required: true,
  //       message: 'Provide last name',
  //       placeholder: 'DD/MM/YYYY',
  //     },
  //     {
  //       label: 'city',
  //       formValue: 'city',
  //       type: 'input',
  //       valueType: 'text',
  //       required: true,
  //       message: 'Provide city',
  //       placeholder: 'Ex: almora',
  //     },
  //     {
  //       label: 'state',
  //       formValue: 'state',
  //       type: 'select',
  //       required: true,
  //       options: [
  //         'JAMMU AND KASHMIR',
  //         'HIMACHAL PRADESH',
  //         'PUNJAB',
  //         'CHANDIGARH',
  //         'UTTARANCHAL',
  //         'HARYANA',
  //         'DELHI',
  //         'RAJASTHAN',
  //         'UTTAR PRADESH',
  //         'BIHAR',
  //         'ASSAM',
  //         'WEST BENGAL',
  //         'MADHYA PRADESH',
  //         'MAHARASHTRA',
  //       ],
  //       values: [
  //         '01',
  //         '02',
  //         '03',
  //         '04',
  //         '05',
  //         '06',
  //         '07',
  //         '08',
  //         '09',
  //         '10',
  //         '18',
  //         '19',
  //         '23',
  //         '27',
  //       ],
  //     },
  //     {
  //       label: 'pin code',
  //       formValue: 'pin code',
  //       type: 'input',
  //       valueType: 'number',
  //       required: true,
  //       max: '6',
  //       message: 'Provide pin code',
  //       placeholder: 'Ex: 11***6',
  //     },
  //   ],
  // },
  // {
  //   name: 'pan verification',
  //   imageSubmission: true,
  //   bgimage: 'PANVerify.png',
  //   routeName: 'panVerification',
  //   specificFetchKey: 'getPanData',
  //   parameters: [
  //     {
  //       label: 'PAN',
  //       formValue: 'pan',
  //       type: 'input',
  //       valueType: 'text',
  //       required: true,
  //       max: 10,
  //       message: 'Provide PAN no.',
  //       placeholder: 'Ex: BOT*****9K',
  //     },
  //   ],
  // },
  // {
  //   name: 'aadhar verification',
  //   imageSubmission: true,
  //   routeName: 'aadharVerification',
  //   bgimage: 'AadharVerify.png',
  //   specificFetchKey: 'getAadharData',
  //   parameters: [
  //     {
  //       label: 'aadhar number',
  //       formValue: 'aadhar number',
  //       type: 'aadhar',
  //       valueType: 'number',
  //       max: 12,
  //       required: true,
  //       message: 'Provide aadhar no.',
  //       placeholder: 'Ex: 43** **** **42',
  //     },
  //   ],
  // },
];

export default function VerificationTabs() {
  const [state, setState] = useState(false);
  const [formParams, setFormParams] = useState({});

  function handleClick(value) {
    setState((state) => !state);
    setFormParams(value);
  }

  return (
    <>
      {data.map((val) => {
        return (
          <StyledVerificationTab
            onClick={() => handleClick(val)}
            bgimage={val.bgimage}
            shade1={'rgba(240, 238, 253, 0.35)'}
            shade2={'rgba(167, 159, 242, 0.35)'}
            key={val.name}
          >
            <VerificationName>
              <VerificationNameSpan>
                {val.name.split(' ')[0]}
              </VerificationNameSpan>
              &nbsp;
              {val.name.split(' ')[1]}
            </VerificationName>
          </StyledVerificationTab>
        );
      })}
      {state && (
        <VerificationForm
          formParams={formParams}
          setState={setState}
          specificFetchKey={formParams.specificFetchKey}
          routeName={formParams.routeName}
        />
      )}
    </>
  );
}
