import { useState } from 'react';
import { EditDeleteButton } from './UserManageBody';
import { createPortal } from 'react-dom';
import Overlay from '../../../UI/Overlay';
import styled from 'styled-components';
import { TiUserDelete } from 'react-icons/ti';
import { RxCross1 } from 'react-icons/rx';

const DeleteFormContainer = styled.div`
  height: 25rem;
  width: 45rem;
  background-color: var(--color-gray-0);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.286);
  border-radius: 0.8rem;
  margin: auto;
  transform: translateY(70%);
  position: relative;
  text-transform: capitalize;
`;
const DeleteIcon = styled.div`
  text-align: center;
  padding-top: 1.6rem;
  svg {
    height: 4rem;
    width: 4rem;
    color: var(--color-brand-original-green-400);
  }
`;
const AreYouSure = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-500);
  padding: 1rem 0rem 0rem 0rem;
  text-align: center;
`;
const UserName = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
`;
const Button = styled.button`
  padding: 0.7rem 3rem;
  border-radius: 0.6rem;
  border: none;
  text-transform: capitalize;
  transition: all 0.2s;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundcolor};

  &:hover {
    color: ${(props) => props.hovercolor};
    background-color: ${(props) => props.hoverbackgroundcolor};
  }
`;
const CrossContainer = styled.div`
  position: absolute;
  right: 3rem;
  top: 1.4rem;
  svg {
    cursor: pointer;
    transition: all 0.3s;
  }
  svg:hover {
    transform: scale(1.06);
  }
`;

export default function DeleteUser({ name }) {
  const [openDeleteForm, setOpenDeleteForm] = useState(false);

  return (
    <>
      <EditDeleteButton
        onClick={() => setOpenDeleteForm((val) => !val)}
        backgroundcolor={'#ab0404'}
      >
        delete
      </EditDeleteButton>
      {openDeleteForm &&
        createPortal(
          <Overlay onClick={() => setOpenDeleteForm(false)}>
            <DeleteFormContainer onClick={(e) => e.stopPropagation()}>
              <CrossContainer onClick={() => setOpenDeleteForm(false)}>
                <RxCross1 />
              </CrossContainer>
              <DeleteIcon>
                <TiUserDelete />
              </DeleteIcon>
              <AreYouSure>
                are you sure to delete the user ?<UserName>({name})</UserName>
              </AreYouSure>
              <ButtonContainer>
                <Button
                  color="var(--color-gray-300)"
                  backgroundcolor="var(--color-gray-50)"
                  hovercolor="var(--color-gray-500)"
                  hoverbackgroundcolor="var(--color-gray-100)"
                  onClick={() => setOpenDeleteForm(false)}
                >
                  cancel
                </Button>
                <Button
                  color="var(--color-gray-10)"
                  backgroundcolor="#ab0404"
                  hovercolor="var(--color-gray-50)"
                  hoverbackgroundcolor="#770000"
                >
                  delete
                </Button>
              </ButtonContainer>
            </DeleteFormContainer>
          </Overlay>,
          document.body
        )}
    </>
  );
}
