import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Layout from '../../components/Layout';
import LottieAnimation from '../../assets/images/profile.json'
import TextField from '../../components/Form/TextField';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { getUser } from '../../libs/user';
import { User } from '../../types/user';
import { api } from '../../services/api';
import SecondaryButton from '../../components/Buttons/Secondary';
import PrimaryButton from '../../components/Buttons/Primary';
import { toast } from 'react-toastify';

const editUserFormSchema = z
  .object({
    name: z.string()
      .min(2, 'The name must contain at least 2 characters')
      .max(30, 'The name must contain a maximum of 30 characters')
      .nonempty('Name is required')
      .transform(name => { //Capitalize
        return name.trim().split(' ').map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
      }),
    surname: z
      .string()
      .min(2, 'The confirmation password must contain at least 2 characters')
      .max(60, 'The name must contain a maximum of 60 characters')
      .nonempty('Surname is required')
      .transform(name => { //Capitalize
        return name.trim().split(' ').map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
      }),
    email: z.string().email('Invalid email').nonempty('Email is required'),
    password: z.string()
      .nonempty('Password is required')
      .min(8, 'The password must contain at least 8 characters'),
    confirmPassword: z.string()
      .min(8, 'The confirmation password must contain at least 8 characters')
  }).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must be the same",
  path: ['confirmPassword']

});


type EditUserFormData = z.infer<typeof editUserFormSchema>;


const Perfil = () => {
  
    const [edition, setEdition] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const {
        register, 
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm<EditUserFormData>({
        resolver: zodResolver(editUserFormSchema)
    });

    const user = getUser() as User;

    useEffect(() => {
        api.get(`/users/${user.id}`)
        .then(({data}) => {
            setValue('name', data.name);
            setValue('surname', data.surname);
            setValue('email', data.email);
        })
        .catch(error => {
            toast.error(error);
        })
    }, [user.surname]);

    const sendForm = (data: EditUserFormData) => {
        setLoading(true);
        api.put(`/users/${user.id}`, data)
        .then((response) => {
            toast.success(response.data);
        })
        .catch((error) => {
            toast.error(error);
        })
        .finally(() => {
            setLoading(false);
            setEdition(false);
        })
    }

  
    return (
    <Layout title='Perfil' subtitle='See your profile data here.'>
        <C.Container>
            <C.Content>
                <C.Image
                    src={LottieAnimation}
                    className="player"
                    loop
                    autoplay
                />
                <form>
                    <C.Names>
                        <TextField 
                            id='user-name'
                            type='text'
                            label='Name'
                            placeholder='E.g. Josh'
                            required={true}
                            register={register('name')}
                            readOnly={!edition}
                            error={errors.name && errors.name.message}
                        />
                        <TextField 
                            id='user-surname'
                            type='text'
                            label='Surname'
                            placeholder='E.g. Reynolds Autin'
                            required={true}
                            register={register('surname')}
                            readOnly={!edition}
                            error={errors.surname && errors.surname.message}
                        />
                    </C.Names>
                    <TextField 
                        id='user-email'
                        type='text'
                        label='Email'
                        placeholder='E.g. joshreynolds@gmail.com'
                        required={true}
                        register={register('email')}
                        readOnly={true}
                        error={errors.email && errors.email.message}
                    />
                    <TextField 
                        id='user-password'
                        type='password'
                        label='Current or a new password'
                        placeholder='Inform your current or a new password'
                        required={true}
                        register={register('password')}
                        readOnly={!edition}
                        error={errors.password && errors.password.message}
                    />
                    <TextField 
                        id='user-confirm-password' 
                        type='password' 
                        label='Confirm password' 
                        placeholder='Confirm your password'
                        required={true}  
                        register={register('confirmPassword')}
                        readOnly={!edition}
                        error={errors.confirmPassword && errors.confirmPassword.message}
                    />
                    <C.Buttons>
                        {edition && <SecondaryButton onClick={() => setEdition(false)}>Cancel</SecondaryButton>}
                        {edition ? 
                            <PrimaryButton type='button' loading={loading} onClick={handleSubmit(sendForm)}>Confirm</PrimaryButton>
                            : 
                            <PrimaryButton type='button' onClick={() => setEdition(true)} loading={false}>Edit account</PrimaryButton>
                        }
                    </C.Buttons> 
                    
                </form>
            </C.Content>
        </C.Container>
    </Layout>
  )
}

export default Perfil