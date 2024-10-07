import { useForm } from 'react-hook-form';
import Astrick from './Astrick';
import handleNumberLength from '../Utils/handleNumberLength';
import styled from 'styled-components';

const data = [
  {
    label: 'name',
    type: 'text',
    inputType: 'input',
    placeholder: 'satish mittal',
  },
  {
    label: 'email',
    type: 'text',
    inputType: 'input',
    placeholder: 'email@example.com',
  },
  {
    label: 'phone',
    type: 'number',
    inputType: 'input',
    placeholder: '948$$$6663',
    maxLength: 10,
    minLength: 10,
  },
  {
    label: 'id',
    type: 'text',
    inputType: 'input',
    placeholder: 'enter your id',
  },
  { label: 'role', options: ['manager', 'employee'], inputType: 'select' },
  {
    label: 'password',
    type: 'text',
    inputType: 'input',
    placeholder: '**********',
  },
];

const FormParent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
const CreateForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 3rem;
  width: 55rem;
`;
const OneValueContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;
const Input = styled.input`
  height: 3.8rem;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.5rem;
  padding-left: 1rem;
  color: var(--color-gray-600);
  border: 1px solid #d4d4d4;

  &:focus {
    background-color: ${(props) => props.inputbackground};
  }
  &::placeholder {
    color: var(--color-gray-200);
  }
`;
const Select = styled.select`
  height: 3.8rem;
  border: none;
  border-radius: 0.6rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  padding-left: 1rem;
  color: var(--color-gray-600);
  border: 1px solid #d4d4d4;

  &:focus {
    background-color: ${(props) => props.inputbackground};
  }
`;
const Option = styled.option`
  text-transform: capitalize;
`;
const Error = styled.div`
  color: #c70404;
  margin-left: auto;
  font-size: 1.2rem;
  text-transform: capitalize;
`;
const SubmitButton = styled.button`
  grid-column: 1 / -1;
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem 2rem;
  background-color: ${(props) => props.backgroundColor};
  color: var(--color-gray-25);
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.2s;
  text-transform: capitalize;
  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: var(--color-gray-100);
  }
  &:active {
    transform: scale(0.99);
  }
`;
const PlaceHolder = styled.div`
  height: 1.8rem;
  font-size: 1.1rem;
  font-weight: 400;
  margin-left: auto;
`;

export default function UserCreateDeleteForm({
  formButtonName,
  buttonColor,
  buttonHoverColor,
  inputbackground,
}) {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(result) {
    console.log(result);
    reset();
  }
  return (
    <FormParent>
      <CreateForm onSubmit={handleSubmit(onSubmit)}>
        {data.map((val) => {
          return val.inputType === 'input' ? (
            <OneValueContainer key={val.label}>
              <Label htmlFor={val.label}>
                {val.label}
                <Astrick>*</Astrick>
              </Label>
              <Input
                type={val.type}
                id={val.label}
                autoComplete="off"
                placeholder={val.placeholder}
                onInput={(e) => {
                  val.type === 'number'
                    ? (e.target.value = handleNumberLength(e, val.maxLength))
                    : undefined;
                }}
                {...register(
                  `${val.label
                    .split(' ')
                    .map((value) => value[0].toUpperCase() + value.slice(1))
                    .join('')}`,
                  {
                    required: 'this is required',
                  }
                )}
                inputbackground={inputbackground}
              />
              <Error>
                {errors?.[
                  val.label
                    .split(' ')
                    .map((value) => value[0].toUpperCase() + value.slice(1))
                    .join('')
                ]?.message ? (
                  errors?.[
                    val.label
                      .split(' ')
                      .map((value) => value[0].toUpperCase() + value.slice(1))
                      .join('')
                  ]?.message
                ) : (
                  <PlaceHolder> </PlaceHolder>
                )}
              </Error>
            </OneValueContainer>
          ) : (
            <OneValueContainer key={val.label}>
              <Label>
                {val.label}
                <Astrick>*</Astrick>
              </Label>
              <Select
                {...register(
                  `${val.label
                    .split(' ')
                    .map((value) => value[0].toUpperCase() + value.slice(1))
                    .join('')}`,
                  {
                    required: 'this is required',
                  }
                )}
                inputbackground={inputbackground}
              >
                <Option key={'0'} value={''} disabled>
                  select
                </Option>
                {val.options.map((option) => {
                  return <Option key={option}>{option}</Option>;
                })}
              </Select>
            </OneValueContainer>
          );
        })}
        <SubmitButton
          type="submit"
          backgroundColor={buttonColor}
          hoverColor={buttonHoverColor}
        >
          {formButtonName}
        </SubmitButton>
      </CreateForm>
    </FormParent>
  );
}
