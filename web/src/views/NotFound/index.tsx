import React, { useContext } from 'react'
import * as C from './styles';
import TertiaryButton from '../../components/Buttons/Tertiary';
import { UserContext } from '../../contexts/user';
import { ContextUser } from '../../types/user';
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {

    const {signed} = useContext(UserContext) as ContextUser;
    const navigate = useNavigate();
    
return (
    <C.Container>
        <C.Number>404</C.Number>
        <C.Message>
            Oops! It looks like your savings are in a better place than this page.
            <TertiaryButton onClick={() => signed ? navigate('/dashboard') : navigate('/signin')}>Back to {signed ? 'dashboard' : 'login'}</TertiaryButton> 
        </C.Message>
    </C.Container>
  )
}

export default NotFound