import React, { useEffect, useState } from 'react';
import * as C from './styles';
import GenericModal from '../GenericModal'
import TextField from '../../Form/TextField'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '../../Form/Select';
import Textarea from '../../Form/Textarea';
import SecondaryButton from '../../Buttons/Secondary';
import PrimaryButton from '../../Buttons/Primary';
import { api } from '../../../services/api';
import { AccountTypes } from '../../../types/accountTypes';
import { toast } from 'react-toastify';
import { Options } from '../../../types/OptionSelect';
import { getUser } from '../../../libs/user';
import { User } from '../../../types/user';

type Props = {
    id: number;
    showModal: boolean;
    setShowModal: (state: boolean) => void;
    typeAccount: number;
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
    })
    .nullable(),
    status_id: z.number().positive()
  });

type BillToPayFormData = z.infer<typeof billToPayFormSchema>;

const currentDate = `${new Date().getFullYear()}/${new Date().getMonth().toString().padStart(2, '0')}/${new Date().getDate().toString().padStart(2, '0')}`


const ModalBillEdited = ({id, typeAccount, setShowModal, showModal}: Props) => {
    
    const [accountTypes, setAccountTypes] = useState<[] | Options[]>([]);
    const [edition, setEdition] = useState<boolean>(false);

    const user = getUser() as User;

    const {
        register, 
        handleSubmit,
        setValue,
        formState: {errors}
      } = useForm<BillToPayFormData>({
        resolver: zodResolver(billToPayFormSchema)
      });

      useEffect(() => { //Search Account Types
        api.get('/account-types')
        .then(({data}) => {
          const accountTypesTransformed = data.map(({id, type}: AccountTypes) => {
            return {
              value: id,
              label: type
            }
          });
          setAccountTypes(accountTypesTransformed)
        }).catch((error) => {
          toast.error(error);
        })
      }, []);

      useEffect(() => {
        api.get(`/accounts/${user.id}/${typeAccount}/${id}`)
        .then(({data}) => {
          setValue('id', data[0].id);
          setValue('name', data[0].name);
          setValue('beneficiary_name', data[0].beneficiary_name);
          setValue('type_bill', data[0].type_bill_id.toString()); //Input must be of type string on first rendering, after that it is converted to int via zod 
          if (data[0].expiration) {
            const date = new Date(data[0].expiration);
            const expiration = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`              
            setValue('expiration', expiration);
          }
          setValue('amount', data[0].amount);
          setValue('comments', data[0].comments);
          setValue('status_id', data[0].status_id)
        })
      }, []);

      const sendForm = async (data: BillToPayFormData) => {
        await api.patch(`/accounts/${data.id}`, {
          name: data.name,
          beneficiary_name: data.beneficiary_name,
          type_bill_id: data.type_bill,
          expiration: data.expiration,
          amount: data.amount,
          comments: data.comments,
          status_id: data.status_id
        }).then(response => {
          toast.success(response.data);
          setShowModal(false);
        }).catch(error => {
          toast.error(error);
        })
      }

    return (
    <GenericModal title='Edit account' setShowModal={setShowModal} showModal={showModal}>
        <form>
        <TextField
          id='account-name' 
          type='text'
          label='Account name'
          placeholder='Eg.: Water bill'
          required={true}
          register={register('name')}
          error={errors.name && errors.name.message}
          readOnly={!edition}
        />
        <TextField 
          id='beneficiary-name'
          type='text'
          label='Beneficiary name'
          placeholder='Eg.: Watersource Inc.'
          required={true}
          register={register('beneficiary_name')}
          error={errors.beneficiary_name && errors.beneficiary_name.message}
          readOnly={!edition}
        />
        
        <Select 
          id='type-bill'
          options={accountTypes}
          label='Type bill'
          placeholder='Chose type bill'
          error={errors.type_bill  && errors.type_bill.message}
          register={register('type_bill')}
          required={true}
          readOnly={!edition}
        />
        <TextField 
          id='expiration-date'
          type='date'
          label='Expiration date'
          placeholder={`E.g.: ${currentDate}`}
          required={false}
          register={register('expiration')}
          error={errors.expiration && errors.expiration.message}
          readOnly={!edition}
        />
        <TextField 
          id='amount'
          type='number'
          label='Amount'
          placeholder='E.g.: $43.55'
          required={true}
          register={register('amount')}
          step='0.01'
          error={errors.amount && errors.amount.message}
          readOnly={!edition}
        />
        <Textarea 
          id='comments'
          label='Comments'
          placeholder='Write any comments you want here'
          register={register('comments')}
          required={false}
          maxLength={255}
          error={errors.comments && errors.comments.message}
          readOnly={!edition}
        />
        <C.Buttons>
          <SecondaryButton onClick={() => setShowModal(false)}>
            {edition ? 'Cancel' : 'Close'}
          </SecondaryButton>

          
          {edition ? 
            <PrimaryButton type='button' loading={false} onClick={handleSubmit(sendForm)}>Confirm</PrimaryButton>
          : 
            <PrimaryButton type='button' onClick={() => setEdition(true)} loading={false}>Edit account</PrimaryButton>
          }
        </C.Buttons>
      </form>
    </GenericModal>
  )
}

export default ModalBillEdited