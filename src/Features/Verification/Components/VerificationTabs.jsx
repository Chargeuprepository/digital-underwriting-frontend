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
        label: 'mobile number',
        type: 'input',
        valueType: 'number',
        required: true,
        message: 'Provide the Mobile no.',
        placeholder: 'Ex: 91098****321',
        max: '12',
      },
      {
        label: 'email',
        type: 'input',
        valueType: 'text',
        required: false,
        placeholder: 'Ex: qwerty@example.com',
      },
      {
        label: 'country code',
        type: 'input',
        valueType: 'text',
        required: true,
        disabled: true,
        value: 'IND',
      },
      {
        label: 'derived signals',
        type: 'input',
        valueType: 'text',
        required: true,
        disabled: true,
        value: 'true',
      },
      {
        label: 'enhanced coverage',
        type: 'input',
        valueType: 'text',
        disabled: true,
        required: true,
        value: 'true',
      },
    ],
  },
  {
    name: 'vehicle details',
    imageSubmission: false,
    bgimage: 'VehicleVerify.png',
    parameters: [
      {
        label: 'RC number',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide the RC No.',
        placeholder: 'Ex: DL4****40',
      },
    ],
  },
  {
    name: 'credit score',
    imageSubmission: false,
    bgimage: 'CreditVerify.png',
    parameters: [
      {
        label: 'first name',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide first name',
        placeholder: 'Ex: aman',
      },
      {
        label: 'last name',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide last name',
        placeholder: 'Ex: sharma',
      },
      {
        label: 'PAN number',
        type: 'input',
        valueType: 'text',
        required: true,
        message: 'Provide PAN number',
        max: '10',
        placeholder: 'Ex: BO******9K',
      },
      {
        label: 'gender',
        type: 'select',
        required: true,
        options: ['male', 'female', 'others'],
      },
      {
        label: 'mobile number',
        type: 'input',
        valueType: 'number',
        required: true,
        max: '12',
        message: 'Provide mobile no.',
        placeholder: 'Ex: 91098****321',
      },
      {
        label: 'address 1',
        type: 'address1',
        valueType: 'text',
        required: true,
        message: 'Provide address 1',
        placeholder: 'No special characters',
      },
      {
        label: 'address 2',
        type: 'address2',
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
        placeholder: 'DD/MM/YYYY',
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
        label: 'pin code',
        type: 'input',
        valueType: 'number',
        required: true,
        max: '6',
        message: 'Provide pin code',
        placeholder: 'Ex: 11***6',
      },
    ],
  },
  {
    name: 'pan verification',
    imageSubmission: true,
    bgimage: 'PANVerify.png',
    parameters: [
      {
        label: 'PAN number',
        type: 'input',
        valueType: 'text',
        required: true,
        max: 10,
        message: 'Provide PAN no.',
        placeholder: 'Ex: BOT*****9K',
      },
    ],
  },
  {
    name: 'aadhar verification',
    imageSubmission: true,
    bgimage: 'AadharVerify.png',
    parameters: [
      {
        label: 'aadhar number',
        type: 'aadhar',
        valueType: 'number',
        max: 12,
        required: true,
        message: 'Provide aadhar no.',
        placeholder: 'Ex: 43** **** **42',
      },
    ],
  },
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
      {state && (
        <VerificationForm formParams={formParams} setState={setState} />
      )}
    </>
  );
}
