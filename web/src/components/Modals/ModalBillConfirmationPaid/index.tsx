import React, { useEffect, useState } from 'react'
import * as C from './styles';
import GenericModal from '../GenericModal'
import PrimaryButton from '../../Buttons/Primary';
import SecondaryButton from '../../Buttons/Secondary';
import { api } from '../../../services/api';
import { getUser } from '../../../libs/user';
import { User } from '../../../types/user';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type Props = {
    id: number;
    showModal: boolean;
    setShowModal: (state: boolean) => void;
}

const billToPayFormSchema = z.object({
    id: z.number(),
    name: z.string()
    .nonempty('Account name required')
    .max(35, 'Account name must contain a maximum of 35 characters'),
    beneficiary_name: z.string()
    .nonempty('Beneficiary name required')
    .max(100, 'Beneficiary name must contain a maximum of 100 characters'),
    type_bill: z.string()
    .nonempty('Chose a account type')
    .transform(value => Number.parseInt(value))
    ,
    expiration: z.string()
    .transform(date => {
      if(date === ""){
        return null
      }
      return date
    })
    .nullable(),
    amount: z.string()
    .refine(value => { // Checks if amount has two decimal places
      const regex = /^\d+(\.\d{1,2})?$/;
      const stringValue = value.toString();
      return regex.test(stringValue);
    }, {
      message: 'The number must contain at most two decimal places'
    })
    .transform(value => parseFloat(value)),
    comments: z.string()
    .max(255, 'Comments must contain a maximum of 255 characters')
    .transform(value => {
      if (value === "") {
        return null
      }
      return value
    }).nullable(),
    status_id: z.number().positive()
  });

type BillToPayFormData = z.infer<typeof billToPayFormSchema>;


const ModalBillConfirmationPaid = ({id, showModal, setShowModal}: Props) => {
  
    const [loading, setLoading] = useState<boolean>(false);

    const user = getUser() as User;

    const {
        setValue,
        handleSubmit,
        formState: {errors}
      } = useForm<BillToPayFormData>({
        resolver: zodResolver(billToPayFormSchema)
      });

      useEffect(() => {
        api.get(`/accounts/${user.id}/2/${id}`)
        .then(({data}) => {
          setValue('id', data[0].id);
          setValue('name', data[0].name);
          setValue('beneficiary_name', data[0].beneficiary_name);
          setValue('type_bill', data[0].type_bill_id.toString()); //Input must be of type string on first rendering, after that it is converted to int via zod 
          if (data[0].expiration) {
            const date = new Date(data[0].expiration);
            const expiration = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`              
            setValue('expiration', expiration);
          }else{
            setValue('expiration', null); 
          }
          setValue('amount', data[0].amount);
          setValue('comments', data[0].comments);
          setValue('status_id', data[0].status_id);
        })
      }, []);


    const confirmPayment = async (data: BillToPayFormData) => {
        setLoading(true);
        await api.patch(`/accounts/${data.id}`, {
            name: data.name,
            beneficiary_name: data.beneficiary_name,
            type_bill_id: data.type_bill,
            expiration: data.expiration,
            amount: data.amount,
            comments: data.comments,
            status_id: 1
          }).then(response => {
            toast.success('Changed account status')
           
          }).catch(error => {
            toast.error(error);
          }).finally(() => {
            setLoading(false);
            setShowModal(false);
          })
    }

    return (
    <GenericModal title='Confirm payment?' showModal={showModal} setShowModal={setShowModal}>
        <form onSubmit={handleSubmit(confirmPayment)}>
            <C.Text>Are you sure you want to confirm payment for this account? This action is irreversible.</C.Text>
            {errors.amount && errors.amount?.message}
            {errors.beneficiary_name && errors.beneficiary_name?.message}
            {errors.comments && errors.comments?.message}
            {errors.expiration && errors.expiration?.message}
            {errors.name && errors.name?.message}
            {errors.status_id && errors.status_id?.message}
            <C.Buttons>
                <SecondaryButton type='button' onClick={() => setShowModal(false)}>Cancel</SecondaryButton>
                <PrimaryButton type='submit' loading={loading}>Confirm</PrimaryButton>
            </C.Buttons>
        </form>
    </GenericModal>
  )
}

export default ModalBillConfirmationPaid