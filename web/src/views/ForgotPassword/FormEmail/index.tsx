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

const forgotPasswordEmailFormSchema = z.object({
    email: z.string().email('Invalid email').nonempty('Email is required')
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordEmailFormSchema>;

type Props = {
    handleSentEmail: () => void;
    setEmail: (email: string) => void;
}

const FormEmail = ({handleSentEmail, setEmail}: Props) => {

    const [loading, setLoading] = useState<boolean>(false);

    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordEmailFormSchema)
    });

    const navigate = useNavigate();

    const generateRandomString = async () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomString = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    }
    
    const sendForm = async (data: ForgotPasswordFormData) => {
        setLoading(true);
        setEmail(data.email);
        const code = await generateRandomString();
        localStorage.setItem('forgotpassword-token', code);
        api.post('/sendEmailForgotPassword', {
            email: data.email,
            code: code
        }).then((response) => {
            toast.success(response.data + ' to ' + data.email);
        })
        .catch(error => {
            toast.error(error)
        })
        .finally(() => {
            setLoading(false);
            handleSentEmail();
        })
    
    }

  return (
    <C.Form onSubmit={handleSubmit(sendForm)}>
                <TextField 
                    id='user-email'
                    type='email'
                    label='Email'
                    placeholder='E.g.: joshreynold@gmail.com'
                    required={true}
                    register={register('email')}
                    error={errors.email && errors.email.message}
                />
                <PrimaryButton loading={loading} type='submit'>Send email</PrimaryButton>
                <SecondaryButton onClick={() => navigate('/signin')}>
                    <MdArrowBack size={20} /> 
                    Back to login
                </SecondaryButton>
            </C.Form>
  )
}

export default FormEmail