import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  Error,
  Option,
  Select,
  LabelInputErrorContainer,
  InputErrorContainer,
} from './Form-UI';
import { useLocation } from 'react-router-dom';
import Astrick from '../../../../UI/Astrick';
import FormLabel from '../../../../UI/FormLabel';
import Form from '../../../../UI/Form';
import FormRow from '../../../../UI/FormRow';
import Input from '../../../../UI/Input';

const StyledMLForm = styled.div`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0rem 3rem 16rem;
  border-radius: 1rem;
  background: var(--color-gray-50);
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

export default function MLForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  console.log(errors);

  const location = useLocation();
  const inputs = location.state?.data;
  const { data, heading } = inputs;

  function onSubmit(result) {
    console.log(result);
    reset();
  }

  return (
    <StyledMLForm>
      <Heading>{heading}</Heading>
      <Form gap="1.8rem" borderradius="1rem" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputErrorContainer>
          {data.map((val) => {
            return (
              <FormRow flexdirection="column" gap="0.4rem" key={val.label}>
                <FormLabel htmlFor={val.label}>
                  {val.label}
                  <Astrick>*</Astrick>
                </FormLabel>
                <InputErrorContainer>
                  {val.formValueType === 'input' && (
                    <Input
                      background="linear-gradient(to right, var(--color-gray-25), var(--color-gray-50))"
                      type={val.type}
                      id={val.label}
                      autoComplete="off"
                      step={`${val.type === 'number' && 0.01}`}
                      placeholder={val.placeholder}
                      // disabled={isLoading}
                      {...register(
                        `${val.label
                          .split(' ')
                          .map(
                            (value) => value[0].toUpperCase() + value.slice(1)
                          )
                          .join('')}`,
                        {
                          required: val.message,
                          // maxLength: {
                          //   value: 10,
                          //   message: 'Password needs a minimum of 8 chracters',
                          // },
                        }
                      )}
                    />
                  )}
                  {val.formValueType === 'select' && (
                    <Select
                      {...register(
                        `${val.label
                          .split(' ')
                          .map(
                            (value) => value[0].toUpperCase() + value.slice(1)
                          )
                          .join('')}`
                      )}
                    >
                      <Option disabled key={'0'} value="">
                        Select
                      </Option>
                      {val.values.map((option, i) => {
                        return (
                          <Option key={i + 1} value={option}>
                            {option}
                          </Option>
                        );
                      })}
                    </Select>
                  )}

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
                          .map(
                            (value) => value[0].toUpperCase() + value.slice(1)
                          )
                          .join('')
                      ]?.message
                    ) : (
                      <PlaceHolder></PlaceHolder>
                    )}
                  </Error>
                </InputErrorContainer>
              </FormRow>
            );
          })}
        </LabelInputErrorContainer>
        <Button type="submit">Let&apos;s Predict</Button>
      </Form>
    </StyledMLForm>
  );
}
