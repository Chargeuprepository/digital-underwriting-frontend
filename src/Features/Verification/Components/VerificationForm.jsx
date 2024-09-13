import { createPortal } from 'react-dom';
import {
  Astrick,
  Button,
  Error,
  FormContainer,
  FormRowGridOne,
  FormRowGridTwo,
  GridInputError,
  GridTypeOne,
  GridTypeTwo,
  Heading,
  Icon,
  Input,
  Label,
  Option,
  Overlay,
  Placeholder,
  Select,
  StyledModal,
} from '../UI';
import useAddress from '../../../Hooks/useAddress';
import { IoCloseCircleOutline } from 'react-icons/io5';
import UseDate from '../../../Hooks/useDate';
import { Controller, useForm } from 'react-hook-form';

export default function VerificationForm({ formParams, setState }) {
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
  console.log(errors);

  if (Object.keys(formParams).length === 0) return;

  function onSubmit(result) {
    console.log(result);
    reset();
    setAddress1('');
    setAddress2('');
  }

  return createPortal(
    <Overlay onClick={() => setState(false)}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <Icon onClick={() => setState(false)}>
          <IoCloseCircleOutline />
        </Icon>
        <Heading>{formParams.name}</Heading>
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
                              <Option key={i + 1} value={param.values[i]}>
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
