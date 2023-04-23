import React from 'react';
import * as C from './styles';
import GenericModal from '../GenericModal'
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { z } from 'zod';
import TextField from '../../Form/TextField';
import Textarea from '../../Form/Textarea';
import SecondaryButton from '../../Buttons/Secondary';
import PrimaryButton from '../../Buttons/Primary';

type Props = {
  showModal: boolean;
  setShowModal: (state: boolean) => void
}

const billToPayFormSchema = z.object({
  name: z.string()
  .nonempty('Account name required')
  .max(35, 'Account name must contain a maximum of 35 characters'),
  beneficiary_name: z.string()
  .nonempty('Beneficiary name required')
  .max(100, 'Beneficiary name must contain a maximum of 100 characters'),
  expiration: z.string()
  .transform(date => {
    if(date === ""){
      return null
    }
    return date
  })
  .optional(),
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
  .optional()
});

type BillToPayFormData = z.infer<typeof billToPayFormSchema>;

const ModalBillToPay = ({showModal, setShowModal}: Props) => {
  
  const {
    register, 
    handleSubmit,
    formState: {errors}
  } = useForm<BillToPayFormData>({
    resolver: zodResolver(billToPayFormSchema)
  });

  const currentDate = `${new Date().getFullYear()}/${new Date().getMonth().toString().padStart(2, '0')}/${new Date().getDate().toString().padStart(2, '0')}`
  
  const sendForm = (data: BillToPayFormData) => {
    console.log(data);
  }

  return (
    <GenericModal title='Add Bill to pay' showModal={showModal} setShowModal={() => setShowModal(!showModal)}>
      <form onSubmit={handleSubmit(sendForm)}>
        <TextField
          id='account-name' 
          type='text'
          label='Account name'
          placeholder='Eg.: Water bill'
          required={true}
          register={register('name')}
          error={errors.name && errors.name.message}
        />
        <TextField 
          id='beneficiary-name'
          type='text'
          label='Beneficiary name'
          placeholder='Eg.: Watersource Inc.'
          required={true}
          register={register('beneficiary_name')}
          error={errors.beneficiary_name && errors.beneficiary_name.message}
        />
        <TextField 
          id='expiration-date'
          type='date'
          label='Expiration date'
          placeholder={`E.g.: ${currentDate}`}
          required={false}
          register={register('expiration')}
          error={errors.expiration && errors.expiration.message}
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
        />
        <Textarea 
          id='comments'
          label='Comments'
          placeholder='Write any comments you want here'
          register={register('comments')}
          required={false}
          maxLength={255}
          error={errors.comments && errors.comments.message}
        />
        <C.Buttons>
          <SecondaryButton onClick={() => setShowModal(false)}>Cancel</SecondaryButton>
          <PrimaryButton 
            type='submit'  
            loading={false} 
          >
            Add
          </PrimaryButton>
        </C.Buttons>
      </form>
    </GenericModal>
  )
}

export default ModalBillToPay