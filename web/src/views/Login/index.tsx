import React from 'react'
import * as C from './styles';
import testimonial2 from '../../assets/images/testimonail2.jpg';
import SocialButton from '../../components/Buttons/Social';
import googleIcon from '../../assets/images/google.png';
import officeIcon from '../../assets/images/office.png';
import appleIcon from '../../assets/images/apple.png';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';
import TextField from '../../components/Form/TextField';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../components/Buttons/Primary';
import TertiaryButton from '../../components/Buttons/Social/Tertiary';
import { useNavigate } from 'react-router-dom';

const loginUserFormSchema = z.object({
    email: z.string().email('Invalid email').nonempty('Email is required'),
    password: z.string()
      .nonempty('Password is required')
      .min(8, 'The password must contain at least 8 characters'),
});

type LoginUserFormData = z.infer<typeof loginUserFormSchema>;

const Login = () => {

  const navigate = useNavigate();

    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm<LoginUserFormData>({
        resolver: zodResolver(loginUserFormSchema)
    });

    const sendForm = (data: LoginUserFormData) => {
        console.log(data);
    }

  return (
    <C.Container>
        <C.Form onSubmit={handleSubmit(sendForm)}>
        <C.MessageSignIn>
              <h1>Login</h1>
              <p>Enter your data to access the platform.</p>
            </C.MessageSignIn>

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
                <TextField 
                    type='email'
                    label='Email'
                    placeholder='E.g.: joshreynolds@gmail.com'
                    required={true}
                    register={register('email')}
                    error={errors.email && errors.email.message}
                />
                <TextField 
                    type='password'
                    label='Password'
                    placeholder='Inform your password'
                    required={true}
                    register={register('password')}
                    error={errors.password && errors.password.message}
                />
            </div>
            <C.Buttons>
              <PrimaryButton type='submit'>
                  Login
              </PrimaryButton>
              <TertiaryButton onClick={() => navigate('/signup')} label="Don't have an account yet?">
                Sign Up
              </TertiaryButton>
            </C.Buttons>

        </C.Form>
        <C.BoxMessage>
            <C.Brand>ContaComigo</C.Brand>
            <div>
              <C.MessageMain>Welcome back</C.MessageMain>
              <C.Message>Welcome back to your favorite personal finance web platform.</C.Message>
            </div>

            <C.Card>
              <i>After I accessed the ContaComigo platform my personal finances were much more controlled</i>
              <C.Avatar>
                <img src={testimonial2} alt="User perfil testimonial" />
                <C.DataAvatar>
                  <strong>Alvin M.</strong>
                  <span>Architect</span>
                </C.DataAvatar>
              </C.Avatar>
            </C.Card> 
         </C.BoxMessage>
    </C.Container>
  )
}

export default Login