import styled from 'styled-components';
import { useState } from 'react';
import { EditDeleteButton } from './UserManageBody';
import { createPortal } from 'react-dom';
import Overlay from '../../../UI/Overlay';
import UserCreateDeleteForm from '../../../UI/UserCreateEditForm';
import { RxCross1 } from 'react-icons/rx';

const EditUserContainer = styled.div`
  background-color: aliceblue;
  width: 70rem;
  height: 43rem;
  padding-top: 1rem;
  border-radius: 0.8rem;
  margin: auto;
  transform: translateY(25%);
  position: relative;
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

export default function EditUser() {
  const [openEditForm, setOpenEditForm] = useState(false);

  return (
    <>
      <EditDeleteButton
        backgroundcolor={'#a29609'}
        onClick={() => setOpenEditForm(true)}
      >
        edit
      </EditDeleteButton>
      {openEditForm &&
        createPortal(
          <Overlay onClick={() => setOpenEditForm(false)}>
            <EditUserContainer onClick={(e) => e.stopPropagation()}>
              <CrossContainer onClick={() => setOpenEditForm(false)}>
                <RxCross1 />
              </CrossContainer>
              <UserCreateDeleteForm
                formButtonName={'edit user'}
                buttonColor={'#a29609'}
                buttonHoverColor={'#867b07'}
                inputbackground={'#fffcdb'}
              />
            </EditUserContainer>
          </Overlay>,
          document.body
        )}
    </>
  );
}
