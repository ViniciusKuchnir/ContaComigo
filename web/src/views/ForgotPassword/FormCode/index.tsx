import React, { useState } from 'react';
import * as C from '../styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import TextField from '../../../components/Form/TextField';
import { z } from 'zod';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import PrimaryButton from '../../../components/Buttons/Primary';
import SecondaryButton from '../../../components/Buttons/Secondary';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const forgotPasswordCodeFormSchema = z.object({
    code: z.string()
    .min(6, 'The code must have at least 6 characters')
    .max(6, 'The code must have a maximum of 6 characters')
}).refine((data) => data.code.toUpperCase() === localStorage.getItem('forgotpassword-token'), {
    message: "This code is not the same as the one sent to your email",
    path: ['code']
  
  });

type ForgotPasswordFormData = z.infer<typeof forgotPasswordCodeFormSchema>;

type Props = {
    handleSentCode: () => void;
}

const FormCode = ({handleSentCode}: Props) => {

    const [loading, setLoading] = useState<boolean>(false);

    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordCodeFormSchema)
    });

    const navigate = useNavigate();

    const sendForm = async (data: ForgotPasswordFormData) => {
        handleSentCode();
        localStorage.removeItem('forgotpassword-token');
    }

  return (
    <C.Form onSubmit={handleSubmit(sendForm)}>
                <TextField 
                    id='user-code'
                    type='text'
                    label='Code'
                    placeholder='E.g.: XXXXXX'
                    required={true}
                    register={register('code')}
                    error={errors.code && errors.code.message}
                />
                <PrimaryButton loading={loading} type='submit'>Send code</PrimaryButton>
                <SecondaryButton onClick={() => navigate('/signin')}>
                    <MdArrowBack size={20} /> 
                    Back to login
                </SecondaryButton>
            </C.Form>
  )
}

export default FormCode;