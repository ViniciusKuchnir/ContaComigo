import React, { useState } from 'react'
import * as C from './styles';
import TextField from '../../components/Form/TextField';
import testimonial1 from '../../assets/images/testimonial1.jpg'
import PrimaryButton from '../../components/Buttons/Primary';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SocialButton from '../../components/Buttons/Social';
import googleIcon from '../../assets/images/google.png';
import officeIcon from '../../assets/images/office.png';
import appleIcon from '../../assets/images/apple.png';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';
import TertiaryButton from '../../components/Buttons/Tertiary';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

const createUserFormSchema = z
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


type CreateUserFormData = z.infer<typeof createUserFormSchema>;


const Cadastro = () => {

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const sendForm = async (data: CreateUserFormData) => {
    setLoading(true);
    await api.post('/users', {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password
    })
    .then((result) => {
      toast.success(result.data);
    })
    .catch(({response}) => {
      toast.error(response.data);
    })
    .finally(() => {
      setLoading(false);
      navigate('/signin');
    })
  }

  return (
    <C.Container>
         <C.BoxMessage>
            <C.Brand>ContaComigo</C.Brand>
            <div>
              <C.MessageMain>Start your journey with us.</C.MessageMain>
              <C.Message>Discover the best online platform for personal financial control on the market.</C.Message>
            </div>

            <C.Card>
              <i>I am impressed with this platform that I saw, since I started using this product I started to control my money better.</i>
              <C.Avatar>
                <img src={testimonial1} alt="User perfil testimonial" />
                <C.DataAvatar>
                  <strong>Timson K</strong>
                  <span>Desinger</span>
                </C.DataAvatar>
              </C.Avatar>
            </C.Card> 
         </C.BoxMessage>

         <C.Form onSubmit={handleSubmit(sendForm)}>
            <C.MessageSignUp>
              <h1>Get Started</h1>
              <p>Create your account right now.</p>
            </C.MessageSignUp>

            <C.SocialButtons>
              <SocialButton onClick={() => {}} name='Google'>
                <img src={googleIcon} alt="Google icon" />
              </SocialButton>
              <SocialButton onClick={() => {}} name='Office'>
                <img src={officeIcon} alt="Office icon" />
              </SocialButton>
              <SocialButton onClick={() => {}} name='Apple'>
                <img src={appleIcon} alt="Apple icon" />
              </SocialButton>
              <SocialButton onClick={() => {}} name='Facebook'>
                <img src={facebookIcon} alt="Facebook icon" />
              </SocialButton>
              <SocialButton onClick={() => {}} name='Twitter'>
                <img src={twitterIcon} alt="Twitter icon" />
              </SocialButton>
            </C.SocialButtons>

            <C.Line>
              <div />
              <span>OR</span>
              <div />
            </C.Line>
            
            <div>
              <C.InputsName>
                <TextField 
                  id='name' 
                  type='text' 
                  label='Name'
                  placeholder='E.g.: Josh'
                  required={true}  
                  register={register('name')} 
                  error={errors.name && errors.name.message}
                />
                <TextField 
                  id='surname' 
                  type='text'  
                  label='Surname' 
                  placeholder='E.g.: Reynolds Autin'
                  required={true}  
                  register={register('surname')} 
                  error={errors.surname && errors.surname.message}
                />
              </C.InputsName>

              <TextField 
                id='email' 
                type='email' 
                label='Email'
                placeholder='E.g.: joshreynolds@gmail.com' 
                required={true}  
                register={register('email')} 
                error={errors.email && errors.email.message}
              />
              <TextField 
                id='password' 
                type='password' 
                label='Password' 
                placeholder='Inform your password'
                required={true}  
                register={register('password')} 
                error={errors.password && errors.password.message}
              />
              <TextField 
                id='confirm-password' 
                type='password' 
                label='Confirm password' 
                placeholder='Confirm your password'
                required={true}  
                register={register('confirmPassword')} 
                error={errors.confirmPassword && errors.confirmPassword.message}
              />
            </div>
            <C.Buttons>
              <PrimaryButton type='submit' loading={loading}>
                Create account
              </PrimaryButton>
              <TertiaryButton onClick={() => navigate('/signin')} label='Already have an account?'>
                Login
              </TertiaryButton>
            </C.Buttons>
         </C.Form>
    </C.Container>
  )
}

export default Cadastro