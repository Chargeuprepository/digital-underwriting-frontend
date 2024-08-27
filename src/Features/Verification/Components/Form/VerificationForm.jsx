import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Astrick } from '../../UI';
import useAddress from '../../../../Hooks/useAddress';
import useDate from '../../../../Hooks/useDate';
import useAadhar from '../../../../Hooks/useAadhar';

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
  display: flex;
  flex-direction: column;
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
const FormContainer = styled.div`
  color: aliceblue;
`;
const GridTypeOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 6rem;
  padding: 0rem 8rem;
`;
const GridTypeTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const FormRowGridOne = styled.div`
  display: flex;
  flex-direction: column;
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

export default function VerificationForm({ refStyledModal, formParams }) {
  const { address, handleAddressChange } = useAddress();
  const { selectedDate, handleDateChange, StyledDatePicker } = useDate();
  const { aadhaar, handleAadharChange } = useAadhar();

  if (Object.keys(formParams).length === 0) return;

  return createPortal(
    <Overlay>
      <StyledModal ref={refStyledModal}>
        <Heading>{formParams.name}</Heading>
        <FormContainer>
          {formParams.parameters.length >= 4 ? (
            <GridTypeOne>
              {formParams.parameters.map((param) => {
                return (
                  <FormRowGridOne key={param.label}>
                    <Label>
                      {param.label}
                      {param.required && <Astrick>*</Astrick>}
                    </Label>
                    <GridInputError>
                      {param.type === 'input' && (
                        <Input
                          value={param.value && param.value}
                          disabled={param.value && true}
                          placeholder={param.placeholder}
                          type={param.valueType}
                        />
                      )}
                      {param.type === 'select' && (
                        <Select>
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
                      {param.type === 'address' && (
                        <Input
                          type="text"
                          value={address}
                          onChange={handleAddressChange}
                          placeholder={param.placeholder}
                        />
                      )}
                      {param.type === 'dob' && (
                        <StyledDatePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                          format="DD/MM/YYYY"
                          placeholder={param.placeholder}
                        />
                      )}
                      <Placeholder />
                      {/* <Error>xyz</Error> */}
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
                    <Label>
                      {param.label}
                      {param.required && <Astrick>*</Astrick>}
                    </Label>
                    <GridInputError>
                      {param.type === 'aadhar' ? (
                        <Input
                          type="text"
                          value={aadhaar}
                          onChange={handleAadharChange}
                          maxLength={param.max}
                          placeholder={param.placeholder}
                        />
                      ) : (
                        <Input
                          value={param.value && param.value}
                          disabled={param.value && true}
                        />
                      )}
                      <Placeholder>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                      </Placeholder>
                      {/* <Error>xyz</Error> */}
                    </GridInputError>
                  </FormRowGridTwo>
                );
              })}
            </GridTypeTwo>
          )}
        </FormContainer>
        <Button>verify</Button>
      </StyledModal>
    </Overlay>,
    document.body
  );
}
