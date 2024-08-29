import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Astrick } from '../../UI';
import useAddress from '../../../../Hooks/useAddress';
import useAadhar from '../../../../Hooks/useAadhar';
import { IoCloseCircleOutline } from 'react-icons/io5';
import UseDate from '../../../../Hooks/useDate';
import { Controller, useForm } from 'react-hook-form';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.3s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-10);
  border-radius: 0.6rem;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  background: linear-gradient(to top, #41295a, #2f0743);
`;
const Heading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-gray-50);
  text-transform: uppercase;
  margin-bottom: 3rem;
`;
const Button = styled.button`
  border: none;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 600;
  margin-left: auto;
  padding: 0.5rem 3.6rem;
  border-radius: 0.6rem;
  color: var(--color-gray-800);
  background-color: #dbc4f4;
  transition: all 0.1s;

  &:hover {
    background-color: #b295d0;
  }
  &:active {
    transform: scale(0.98);
  }
`;
const FormContainer = styled.form`
  color: aliceblue;
  display: flex;
  flex-direction: column;
`;
const GridTypeOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0rem 6rem;
  padding: 0rem 8rem;
`;
const GridTypeTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const FormRowGridOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const FormRowGridTwo = styled.div`
  display: flex;
  gap: 3rem;
  /* align-items: center; */
  margin-bottom: 2rem;
`;
const Label = styled.label`
  text-transform: capitalize;
`;
const Input = styled.input`
  width: 26rem;
  height: 3.6rem;
  color: var(--color-gray-700);
  border-radius: 0.6rem;
  border: 1px solid #fff200;
  font-size: 1.45rem;
  font-weight: 500;
  padding-left: 1rem;
  text-transform: uppercase;

  &:active {
    background-color: #fffa9f;
  }
  &:focus {
    background-color: #fffa9f;
  }
  &::placeholder {
    color: var(--color-gray-200);
  }
`;
const Select = styled.select`
  width: 26rem;
  height: 3.6rem;
  color: var(--color-gray-700);
  border-radius: 0.6rem;
  border: 1px solid #fff200;
  font-size: 1.45rem;
  font-weight: 500;
  padding-left: 1rem;
  text-transform: uppercase;

  &:active {
    background-color: #fffa9f;
  }
  &:focus {
    background-color: #fffa9f;
  }
`;
const Option = styled.option`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;
const GridInputError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const Error = styled.div`
  font-size: 1rem;
  margin-left: auto;
  color: #ff5959;
`;
const Placeholder = styled.div`
  font-size: 1rem;
  margin-left: auto;
  color: #ff5959;
  height: 1.5rem;
`;
const Icon = styled.div`
  position: absolute;
  right: 3rem;
  top: 2rem;
  cursor: pointer;

  &:active {
    transform: scale(0.96);
  }

  svg {
    color: var(--color-gray-100);
    height: 3.5rem;
    width: 3.5rem;
    transition: all 0.14s;
  }
  svg:hover {
    color: #ff2e2e;
  }
`;

export default function VerificationForm({ formParams, setState }) {
  const { address1, address2, handleAddress1Change, handleAddress2Change } =
    useAddress();
  const { StyledDatePicker } = UseDate();
  const { register, formState, handleSubmit, reset, control } = useForm();
  const { errors } = formState;
  console.log(errors);

  if (Object.keys(formParams).length === 0) return;

  function onSubmit(result) {
    console.log(result);
    reset();
    console.log('Gaurav');
  }

  return createPortal(
    <Overlay onClick={() => setState(false)}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <Icon onClick={() => setState(false)}>
          <IoCloseCircleOutline />
        </Icon>
        <Heading>{formParams.name}</Heading>
        {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          {formParams.parameters.length >= 4 ? (
            <GridTypeOne>
              {formParams.parameters.map((param) => {
                return (
                  <FormRowGridOne key={param.label}>
                    <Label htmlFor={param.label}>
                      {param.label}
                      {param.required && <Astrick>*</Astrick>}
                    </Label>
                    <GridInputError>
                      {param.type === 'input' && (
                        <Input
                          value={param.value && param.value}
                          defaultValue={param.defaultValue}
                          disabled={param.disabled && true}
                          placeholder={param.placeholder}
                          type={param.valueType}
                          id={param.label}
                          autoComplete="off"
                          maxLength={
                            param.valueType === 'text' ? param.max : undefined
                          }
                          onInput={(e) => {
                            if (param.valueType === 'number') {
                              e.target.value = e.target.value.slice(
                                0,
                                param.max
                              );
                            }
                          }}
                          {...register(
                            `${param.label
                              .split(' ')
                              .map(
                                (value) =>
                                  value[0].toUpperCase() + value.slice(1)
                              )
                              .join('')}`,
                            {
                              required: param.message,
                            }
                          )}
                        />
                      )}
                      {param.disabled && (
                        <Input
                          type="hidden"
                          value={param.value}
                          {...register(
                            `${param.label
                              .split(' ')
                              .map(
                                (value) =>
                                  value[0].toUpperCase() + value.slice(1)
                              )
                              .join('')}`,
                            { value: param.value } // Ensure value is set
                          )}
                        />
                      )}
                      {param.type === 'select' && (
                        <Select
                          {...register(
                            `${param.label
                              .split(' ')
                              .map(
                                (value) =>
                                  value[0].toUpperCase() + value.slice(1)
                              )
                              .join('')}`
                          )}
                        >
                          <Option disabled key={'0'} value="">
                            Select
                          </Option>

                          {param.options.map((option, i) => {
                            return (
                              <Option key={i + 1} value={option}>
                                {option}
                              </Option>
                            );
                          })}
                        </Select>
                      )}
                      {param.type === 'address1' && (
                        <Controller
                          name={`${param.label
                            .split(' ')
                            .map(
                              (value) => value[0].toUpperCase() + value.slice(1)
                            )
                            .join('')}`}
                          control={control}
                          defaultValue={address1}
                          rules={{ required: param.message }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              value={address1} // Use the controlled state value here
                              onChange={(e) => {
                                field.onChange(e); // Update RHF value
                                handleAddress1Change(e); // Update local state
                              }}
                              placeholder={param.placeholder}
                              autoComplete="off"
                              id={param.label}
                            />
                          )}
                        />
                      )}
                      {param.type === 'address2' && (
                        <Controller
                          name={`${param.label
                            .split(' ')
                            .map(
                              (value) => value[0].toUpperCase() + value.slice(1)
                            )
                            .join('')}`}
                          control={control}
                          defaultValue={address2}
                          rules={{ required: param.message }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              value={address2} // Use the controlled state value here
                              onChange={(e) => {
                                field.onChange(e); // Update RHF value
                                handleAddress2Change(e); // Update local state
                              }}
                              placeholder={param.placeholder}
                              autoComplete="off"
                              id={param.label}
                            />
                          )}
                        />
                      )}
                      {param.type === 'dob' && (
                        <Controller
                          name={`${param.label
                            .split(' ')
                            .map(
                              (value) => value[0].toUpperCase() + value.slice(1)
                            )
                            .join('')}`}
                          control={control} // Ensure the control prop is passed here
                          rules={{ required: param.message }}
                          render={({ field }) => (
                            <StyledDatePicker
                              {...field}
                              format="DD/MM/YYYY"
                              placeholder={param.placeholder}
                              onChange={(date) => field.onChange(date)} // Correctly pass the onChange function
                              value={field.value} // Ensure the value is managed properly
                            />
                          )}
                        />
                      )}
                      {errors?.[
                        param.label
                          .split(' ')
                          .map(
                            (value) => value[0].toUpperCase() + value.slice(1)
                          )
                          .join('')
                      ]?.message ? (
                        <Error>
                          {
                            errors?.[
                              param.label
                                .split(' ')
                                .map(
                                  (value) =>
                                    value[0].toUpperCase() + value.slice(1)
                                )
                                .join('')
                            ]?.message
                          }
                        </Error>
                      ) : (
                        <Placeholder />
                      )}
                    </GridInputError>
                  </FormRowGridOne>
                );
              })}
            </GridTypeOne>
          ) : (
            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            <GridTypeTwo>
              {formParams.parameters.map((param) => {
                return (
                  <FormRowGridTwo type={'row'} key={param.label}>
                    <Label
                      style={{ paddingTop: '0.4rem' }}
                      htmlFor={param.label}
                    >
                      {param.label}
                      {param.required && <Astrick>*</Astrick>}
                    </Label>
                    <GridInputError>
                      {
                        <Input
                          value={param.value && param.value}
                          disabled={param.value && true}
                          id={param.label}
                          autoComplete="off"
                          maxLength={param.max}
                          {...register(
                            `${param.label
                              .split(' ')
                              .map(
                                (value) =>
                                  value[0].toUpperCase() + value.slice(1)
                              )
                              .join('')}`,
                            {
                              required: param.message,
                            }
                          )}
                        />
                        // )
                      }
                      {errors?.[
                        param.label
                          .split(' ')
                          .map(
                            (value) => value[0].toUpperCase() + value.slice(1)
                          )
                          .join('')
                      ]?.message ? (
                        <Error>
                          {
                            errors?.[
                              param.label
                                .split(' ')
                                .map(
                                  (value) =>
                                    value[0].toUpperCase() + value.slice(1)
                                )
                                .join('')
                            ]?.message
                          }
                        </Error>
                      ) : (
                        <Placeholder />
                      )}
                    </GridInputError>
                  </FormRowGridTwo>
                );
              })}
            </GridTypeTwo>
          )}
          <Button type="submit">verify</Button>
        </FormContainer>
        {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
      </StyledModal>
    </Overlay>,
    document.body
  );
}
