import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  Form,
  FormRow,
  Label,
  Input,
  Error,
  Option,
  Select,
  Astrick,
  LabelInputErrorContainer,
  InputErrorContainer,
} from './Form-UI';

const StyledMLForm = styled.div`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 2rem 8rem;
  border-radius: 1rem;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
  background: var(--color-gray-10);
  margin-bottom: auto;
  margin-top: auto;
`;
const Heading = styled.div`
  font-size: 2.6rem;
  font-weight: 600;
  color: var(--color-gray-800);
`;
const Button = styled.button`
  margin-left: auto;
  border: none;
  background: linear-gradient(45deg, #000428, #004e92);
  color: var(--color-gray-0);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.7rem 3rem;
  border-radius: 0.6rem;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(45deg, #000740, #005eaf);
  }
  &:active {
    scale: 0.94;
  }
`;
const PlaceHolder = styled.div`
  height: 1.65rem;
  font-size: 1.1rem;
  font-weight: 400;
  margin-left: auto;
`;
const data1 = {
  heading: "Predicting Driver's Payment Behaviour",
  data: [
    {
      label: 'Tenure',
      type: 'text',
      message: 'Provide your name.',
      formValueType: 'input',
      placeholder: 'Total no. of months',
    },
    {
      label: 'Down Payment',
      type: 'text',
      message: 'Provide your name.',
      formValueType: 'input',
      placeholder: 'Ex: ₹8000',
    },
    {
      label: 'Monthly Emi Amount',
      type: 'text',
      message: 'Provide your name.',
      formValueType: 'input',
      placeholder: 'Ex: ₹3000',
    },
    {
      label: 'Loan Amount',
      type: 'text',
      message: 'Provide your name.',
      formValueType: 'input',
      placeholder: 'Ex: ₹20,000',
    },
    {
      label: 'Amount Repaid',
      type: 'text',
      message: 'Provide your address.',
      formValueType: 'input',
      placeholder: 'Ex: ₹2000',
    },
    {
      label: 'Remaining Amount',
      type: 'number',
      message: 'Provide your number.',
      formValueType: 'input',
      placeholder: 'Ex: ₹3000',
    },
    {
      label: 'Avg distance in 7 days in km',
      type: 'number',
      message: 'Provide your number.',
      formValueType: 'input',
      placeholder: 'Ex: 300KM',
    },
    {
      label: 'Digital Footprint',
      type: 'number',
      message: 'Provide your number.',
      formValueType: 'input',
      placeholder: 'Yes',
    },
    {
      label: 'Identity Confidence',
      type: 'option',
      values: ['Male', 'Female', 'Other'],
      message: 'Provide your gender.',
      formValueType: 'select',
    },
    {
      label: 'Social Footprint Score',
      type: 'option',
      values: ['Male', 'Female', 'Other'],
      message: 'Provide your gender.',
      formValueType: 'select',
    },
    // {
    //   label: 'Own Residence',
    //   type: 'option',
    //   values: ['Male', 'Female', 'Other'],
    //   message: 'Provide your gender.',
    //   formValueType: 'select',
    // },
    // {
    //   label: 'VehicleStatus',
    //   type: 'option',
    //   values: ['Male', 'Female', 'Other'],
    //   message: 'Provide your gender.',
    //   formValueType: 'select',
    // },
  ],
};

const { heading, data } = data1;

export default function MLForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  console.log(errors);

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <StyledMLForm>
      <Heading>{heading}</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelInputErrorContainer>
          {data.map((val) => {
            return (
              <FormRow key={val.label}>
                <Label htmlFor={val.label}>
                  {val.label}
                  <Astrick>*</Astrick>
                </Label>
                <InputErrorContainer>
                  {val.formValueType === 'input' && (
                    <Input
                      type={val.type}
                      id={val.label}
                      autoComplete="off"
                      step={`${val.type === 'number' && 0.01}`}
                      placeholder={val.placeholder}
                      // disabled={isLoading}
                      {...register(`${val.label.split(' ').join('')}`, {
                        required: val.message,
                        maxLength: {
                          value: 10,
                          message: 'Password needs a minimum of 8 chracters',
                        },
                      })}
                    />
                  )}
                  {val.formValueType === 'select' && (
                    <Select {...register('gender')}>
                      <Option disabled key={0} value="">
                        Select
                      </Option>
                      {val.values.map((option) => {
                        return (
                          <Option key={option} value={option}>
                            {option}
                          </Option>
                        );
                      })}
                    </Select>
                  )}

                  <Error>
                    {errors?.[val.label.split(' ').join('')]?.message ? (
                      errors?.[val.label.split(' ').join('')]?.message
                    ) : (
                      <PlaceHolder></PlaceHolder>
                    )}
                  </Error>
                </InputErrorContainer>
              </FormRow>
            );
          })}
        </LabelInputErrorContainer>
        <Button type="submit">Let's Predict</Button>
      </Form>
    </StyledMLForm>
  );
}
