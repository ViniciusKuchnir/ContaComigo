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

const forgotPasswordPassFormSchema = z.object({
    password: z.string()
      .nonempty('Password is required')
      .min(8, 'The password must contain at least 8 characters'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordPassFormSchema>;

type Props = {
    userEmail: string
}

const FormPassword = ({userEmail}: Props) => {

    const [loading, setLoading] = useState<boolean>(false);

    const {
        setValue,
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordPassFormSchema)
    });

    const navigate = useNavigate();

    const sendForm = async (data: ForgotPasswordFormData) => {
        api.put('/reset-password', {
            email: userEmail,
            password: data.password
        })
        .then(({data}) => {
            toast.success(data);
            navigate('/signin');
        })
        .catch((error) => {
            toast.error(error);
        })
        .finally(() => {

        })
    }

  return (
    <C.Form onSubmit={handleSubmit(sendForm)}>
                <TextField 
                    id='user-new-password'
                    type='password'
                    label='New password'
                    placeholder='Inform your new password'
                    required={true}
                    register={register('password')}
                    error={errors.password && errors.password.message}
                />
                <PrimaryButton loading={loading} type='submit'>Reset password</PrimaryButton>
                <SecondaryButton onClick={() => navigate('/signin')}>
                    <MdArrowBack size={20} /> 
                    Back to login
                </SecondaryButton>
            </C.Form>
  )
}

export default FormPassword;