import React, { useEffect, useState } from 'react';
import * as C from './styles';
import GenericModal from '../GenericModal';
import SecondaryButton from '../../Buttons/Secondary';
import PrimaryButton from '../../Buttons/Primary';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getUser } from '../../../libs/user';
import { User } from '../../../types/user';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

type Props = {
    id: number;
    showModal: boolean;
    setShowModal: (state: boolean) => void;
}

const billToDeleteFormSchema = z.object({
    id: z.number().positive(),
  });

type BillToDeleteFormSchema = z.infer<typeof billToDeleteFormSchema>;

const ModalBillConfirmationDelete = ({id, showModal, setShowModal}:Props) => {

    const [loading, setLoading] = useState<boolean>(false);

    const user = getUser() as User;

    const {
        setValue,
        handleSubmit,
        formState: {errors}
      } = useForm<BillToDeleteFormSchema>({
        resolver: zodResolver(billToDeleteFormSchema)
      });

      useEffect(() => {
        setValue('id', id);
      }, [id])

    const confirmDelete = (data: BillToDeleteFormSchema) => {
        setLoading(true);
        api.delete(`/accounts/${data.id}`)
        .then(response => {
            toast.success(response.data);
        })
        .catch((error) => {
            toast.error(error);
        })
        .finally(() => {
            setLoading(false);
            setShowModal(false);
        })
    };
    

  return (
    <GenericModal title='Confirm deletion?' setShowModal={setShowModal} showModal={showModal}>
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

export default ModalBillConfirmationDelete;