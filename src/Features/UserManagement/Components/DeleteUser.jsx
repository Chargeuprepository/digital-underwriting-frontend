import { useState } from 'react';
import { EditDeleteButton } from './UserManageBody';
import { createPortal } from 'react-dom';
import Overlay from '../../../UI/Overlay';
import UserCreateDeleteForm from '../../../UI/UserCreateEditForm';

export default function DeleteUser() {
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
          <Overlay>
            <UserCreateDeleteForm />
          </Overlay>,
          document.body
        )}
    </>
  );
}
