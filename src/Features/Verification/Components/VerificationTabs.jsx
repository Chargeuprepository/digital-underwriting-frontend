import { useState } from 'react';
import {
  StyledVerificationTab,
  VerificationName,
  VerificationNameSpan,
} from '../UI';
import VerificationForm from './Form/VerificationForm';

const data = [
  {
    name: 'risk score',
    imageSubmission: false,
    bgimage: 'RiskVerify.png',
    parameters: [
      {
        label: 'name',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide the name',
        placeholder: 'Ex: Amit shankar',
      },
      {
        label: 'mobile-no.',
        type: 'input',
        valueType: 'number',
        required: true,
        message: 'Provide the Mobile no.',
        placeholder: 'Ex: 0987654321',
        max: 10,
      },
      {
        label: 'email',
        type: 'input',
        valueType: 'text',
        required: false,
        placeholder: 'Ex: qwerty@example.com',
      },
    ],
  },
  {
    name: 'vehicle details',
    imageSubmission: false,
    bgimage: 'VehicleVerify.png',
    parameters: [
      {
        label: 'RC-number',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide the RC No.',
        placeholder: 'Ex: DL4cv3040',
      },
    ],
  },
  {
    name: 'credit score',
    imageSubmission: false,
    bgimage: 'CreditVerify.png',
    parameters: [
      {
        label: 'first-name',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide first name',
        placeholder: 'Ex: aman',
      },
      {
        label: 'last-name',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide last name',
        placeholder: 'Ex: sharma',
      },
      {
        label: 'PAN-number',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide PAN number',
        max: 10,
        placeholder: 'Ex: BOTJL4999K',
      },
      {
        label: 'gender',
        type: 'select',
        options: ['male', 'female', 'others'],
      },
      {
        label: 'mobile-no.',
        type: 'input',
        valueType: 'number',
        required: true,
        message: 'Provide mobile no.',
        placeholder: 'Ex: 0987654321',
      },
      {
        label: 'address-1',
        type: 'address',
        valueType: 'text',
        required: true,
        message: 'Provide address 1',
        placeholder: 'No special characters',
      },
      {
        label: 'address-2',
        type: 'address',
        valueType: 'text',
        required: true,
        message: 'Provide address 2',
        placeholder: 'No special characters',
      },
      {
        label: 'DOB',
        type: 'dob',
        valueType: 'text',
        required: true,
        message: 'Provide last name',
        placeholder: 'sharma',
      },
      {
        label: 'city',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide city',
        placeholder: 'Ex: almora',
      },
      {
        label: 'state',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide state',
        placeholder: 'Ex: haryana',
      },
      {
        label: 'pincode',
        type: 'input',
        valueType: 'number',
        required: true,
        message: 'Provide pin code',
        placeholder: 'Ex: 110056',
      },
    ],
  },
  {
    name: 'pan verification',
    imageSubmission: true,
    bgimage: 'PANVerify.png',
    parameters: [
      {
        label: 'PAN-no.',
        type: 'input',
        valueType: 'text',
        required: true,
        max: 10,
        message: 'Provide PAN no.',
        placeholder: 'Ex: BOTJL4999K',
      },
    ],
  },
  {
    name: 'aadhar verification',
    imageSubmission: true,
    bgimage: 'AadharVerify.png',
    parameters: [
      {
        label: 'aadhar-no.',
        type: 'aadhar',
        valueType: 'number',
        max: 14,
        required: true,
        message: 'Provide aadhar no.',
        placeholder: 'Ex: 4321 5678 3542',
      },
    ],
  },
];

export default function VerificationTabs() {
  const [state, setState] = useState(false);
  const [formParams, setFormParams] = useState([]);

  function handleClick(parameters) {
    setState((state) => !state);
    setFormParams(parameters);
    console.log(parameters);
  }

  return (
    <>
      {data.map((val) => {
        return (
          <StyledVerificationTab
            onClick={() => handleClick(val.parameters)}
            bgimage={val.bgimage}
            shade1={'rgba(240, 238, 253, 0.6)'}
            shade2={'rgba(167, 159, 242, 0.6)'}
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
      {state && <VerificationForm formParams={formParams} />}
    </>
  );
}
