import { createPortal } from 'react-dom';
import {
  Button,
  Error,
  GridInputError,
  GridTypeOne,
  GridTypeTwo,
  Heading,
  Icon,
  Input,
  Option,
  Placeholder,
  Select,
  StyledModal,
} from '../UI';
import useAddress from '../../../Hooks/useAddress';
import { IoCloseCircleOutline } from 'react-icons/io5';
import UseDate from '../../../Hooks/useDate';
import { Controller, useForm } from 'react-hook-form';
import Astrick from '../../../UI/Astrick';
import FormLabel from '../../../UI/FormLabel';
import Form from '../../../UI/Form';
import FormRow from '../../../UI/FormRow';
import Overlay from '../../../UI/Overlay';
import createCamelCase from '../../../Utils/createCamelCase';
import { useVerificationQueryManager } from '../GraphQL/queryManager';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../UI/Loader';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';

export default function VerificationForm({
  formParams,
  setState,
  specificFetchKey,
  routeName,
}) {
  const navigate = useNavigate();
  const [fetchKey, setFetchKey] = useState(specificFetchKey);
  const { fetchVehicleCreditRiskData, loading, error, data } =
    useVerificationQueryManager(fetchKey);
  const {
    address1,
    address2,
    handleAddress1Change,
    handleAddress2Change,
    setAddress1,
    setAddress2,
  } = useAddress();
  const { StyledDatePicker } = UseDate();
  const { register, formState, handleSubmit, reset, control } = useForm();
  const { errors } = formState;

  function onSubmit(result) {
    if (result.dateOfBirth) {
      const formattedDate = dayjs(result.dateOfBirth).format('DD/MM/YYYY');
      result = { ...result, dateOfBirth: formattedDate }; // Update the dateOfBirth in a new object
    }

    const uppercaseData = Object.fromEntries(
      Object.entries(result).map(([key, value]) =>
        typeof value === 'string' ? [key, value.toUpperCase()] : [key, value]
      )
    );

    console.log(uppercaseData);
    // reset();
    setAddress1('');
    setAddress2('');
    fetchVehicleCreditRiskData({
      variables: { input: uppercaseData },
    });
  }

  useEffect(
    function () {
      if (data !== undefined) {
        setState(false);
        if (data[formParams.type].statusCode === 200) {
          const timeoutId = setTimeout(() => {
            navigate(`/${routeName}`, { state: { data } });
          }, 0);

          // Cleanup function to clear the timeout
          return () => clearTimeout(timeoutId);
        } else {
          toast.error(data[formParams.type].error.message);
        }
      }
    },
    [data]
  );

  console.log(data);

  return createPortal(
    <>
      <Loader loading={loading} />
      <Overlay onClick={() => setState(false)}>
        <StyledModal onClick={(e) => e.stopPropagation()}>
          <Icon onClick={() => setState(false)}>
            <IoCloseCircleOutline />
          </Icon>
          <Heading>{formParams.name}</Heading>
          <Form color="aliceblue" onSubmit={handleSubmit(onSubmit)}>
            {formParams.parameters.length >= 2 ? (
              <GridTypeOne>
                {formParams.parameters.map((param) => {
                  return (
                    <FormRow
                      flexdirection="column"
                      gap="0.4rem"
                      key={param.label}
                    >
                      <FormLabel
                        color="var(--color-gray-100)"
                        htmlFor={param.label}
                      >
                        {param.label}
                        {param.required && <Astrick>*</Astrick>}
                      </FormLabel>
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
                              `${
                                createCamelCase(param.formValue)
                                // param.label
                                // .split(' ')
                                // .map(
                                //   (value) =>
                                //     value[0].toUpperCase() + value.slice(1)
                                // )
                                // .join('')
                              }`,
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
                              `${
                                createCamelCase(param.formValue)
                                // param.label
                                // .split(' ')
                                // .map(
                                //   (value) =>
                                //     value[0].toUpperCase() + value.slice(1)
                                // )
                                // .join('')
                              }`,
                              { value: param.value } // Ensure value is set
                            )}
                          />
                        )}
                        {param.type === 'select' && (
                          <Select
                            {...register(
                              `${
                                createCamelCase(param.formValue)
                                // param.label
                                // .split(' ')
                                // .map(
                                //   (value) =>
                                //     value[0].toUpperCase() + value.slice(1)
                                // )
                                // .join('')
                              }`
                            )}
                          >
                            <Option disabled key={'0'} value="">
                              Select
                            </Option>

                            {param.options.map((option, i) => {
                              return (
                                <Option key={i + 1} value={param.values[i]}>
                                  {option}
                                </Option>
                              );
                            })}
                          </Select>
                        )}
                        {param.type === 'address1' && (
                          <Controller
                            name={`${
                              createCamelCase(param.formValue)
                              // param.label
                              // .split(' ')
                              // .map(
                              //   (value) => value[0].toUpperCase() + value.slice(1)
                              // )
                              // .join('')
                            }`}
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
                            name={`${
                              createCamelCase(param.formValue)
                              // param.label
                              // .split(' ')
                              // .map(
                              //   (value) => value[0].toUpperCase() + value.slice(1)
                              // )
                              // .join('')
                            }`}
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
                            name={`${
                              createCamelCase(param.formValue)
                              // param.label
                              // .split(' ')
                              // .map(
                              //   (value) => value[0].toUpperCase() + value.slice(1)
                              // )
                              // .join('')
                            }`}
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
                          createCamelCase(param.formValue)
                          // param.label
                          //   .split(' ')
                          //   .map(
                          //     (value) => value[0].toUpperCase() + value.slice(1)
                          //   )
                          //   .join('')
                        ]?.message ? (
                          <Error>
                            {
                              errors?.[
                                createCamelCase(param.formValue)
                                // param.label
                                //   .split(' ')
                                //   .map(
                                //     (value) =>
                                //       value[0].toUpperCase() + value.slice(1)
                                //   )
                                //   .join('')
                              ]?.message
                            }
                          </Error>
                        ) : (
                          <Placeholder />
                        )}
                      </GridInputError>
                    </FormRow>
                  );
                })}
              </GridTypeOne>
            ) : (
              <GridTypeTwo>
                {formParams.parameters.map((param) => {
                  return (
                    <FormRow
                      gap="3rem"
                      margin="0 0 2rem 0"
                      type={'row'}
                      key={param.label}
                    >
                      <FormLabel
                        style={{ paddingTop: '0.4rem' }}
                        htmlFor={param.label}
                        color="var(--color-gray-100)"
                      >
                        {param.label}
                        {param.required && <Astrick>*</Astrick>}
                      </FormLabel>
                      <GridInputError>
                        {
                          <Input
                            value={param.value && param.value}
                            disabled={param.value && true}
                            id={param.label}
                            autoComplete="off"
                            maxLength={param.max}
                            {...register(
                              `${
                                createCamelCase(param.formValue)
                                // param.label
                                // .split(' ')
                                // .map(
                                //   (value) =>
                                //     value[0].toUpperCase() + value.slice(1)
                                // )
                                // .join('')
                              }`,
                              {
                                required: param.message,
                              }
                            )}
                          />
                        }
                        {errors?.[
                          createCamelCase(param.formValue)
                          // param.label
                          //   .split(' ')
                          //   .map(
                          //     (value) => value[0].toUpperCase() + value.slice(1)
                          //   )
                          //   .join('')
                        ]?.message ? (
                          <Error>
                            {
                              errors?.[
                                createCamelCase(param.formValue)
                                // param.label
                                //   .split(' ')
                                //   .map(
                                //     (value) =>
                                //       value[0].toUpperCase() + value.slice(1)
                                //   )
                                //   .join('')
                              ]?.message
                            }
                          </Error>
                        ) : (
                          <Placeholder />
                        )}
                      </GridInputError>
                    </FormRow>
                  );
                })}
              </GridTypeTwo>
            )}
            <Button type="submit">verify</Button>
          </Form>
          {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        </StyledModal>
      </Overlay>
    </>,
    document.body
  );
}
