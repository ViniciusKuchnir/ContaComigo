import React, { useContext, useEffect, useState } from 'react';
import * as C from './styles';
import GenericModal from '../GenericModal'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PrimaryButton from '../../Buttons/Primary';
import SecondaryButton from '../../Buttons/Secondary';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { UserContext } from '../../../contexts/user';
import { ContextUser } from '../../../types/user';

type Props = {
    id: number;
    showModal: boolean;
    setShowModal: (state: boolean) => void;
}


const userToDeleteFormSchema = z.object({
    id: z.number().positive(),
});

type UserToDeleteFormSchema = z.infer<typeof userToDeleteFormSchema>;

const ModalPerfilConfirmationDelete = ({id, showModal, setShowModal}:Props) => {

    const [loading, setLoading] = useState<boolean>(false);

    const {SignOut} = useContext(UserContext) as ContextUser;


    const {
        setValue,
        handleSubmit,
        formState: {errors}
      } = useForm<UserToDeleteFormSchema>({
        resolver: zodResolver(userToDeleteFormSchema)
      });

      useEffect(() => {
        setValue('id', id);
      }, [])

      const confirmDelete = (data: UserToDeleteFormSchema) => {
        setLoading(true);
        api.delete(`/users/${data.id}`)
        .then(({data}) => {
            toast.success(data);
        })
        .catch(error => {
            toast.error(error);
        })
        .finally(() => {
            setLoading(false);
            SignOut();
        })
      }

  return (
    <GenericModal title='Confirm deletion?' showModal={showModal} setShowModal={setShowModal}>
         <form onSubmit={handleSubmit(confirmDelete)}>
            <C.Text>Are you sure you want to delete this account? This action is irreversible.</C.Text>
            <C.Buttons>
                <SecondaryButton type='button' onClick={() => setShowModal(false)}>Cancel</SecondaryButton>
                <PrimaryButton type='submit' loading={loading}>Confirm</PrimaryButton>
            </C.Buttons>
        </form>
    </GenericModal>
  )
}

export default ModalPerfilConfirmationDelete