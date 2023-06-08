import React, { useContext, useEffect, useRef } from 'react';
import * as C from './styles';
import { 
    MdOutlineDashboard, 
    MdOutlineAttachMoney,
    MdOutlinePerson,
    MdOutlineExitToApp,
    MdArrowCircleRight,
    MdArrowCircleLeft,
    
} from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { ContextUser, User } from '../../../types/user';
import { UserContext } from '../../../contexts/user';

const NavigationBar = () => {
    const {SignOut} = useContext(UserContext) as ContextUser;

  return (
    <C.Container>
        <C.ItemMenu to='/dashboard'>
            <MdOutlineDashboard />
            <span>Dashboard</span>
        </C.ItemMenu>
        <C.ItemMenu to='/bills-to-pay'>
            <MdArrowCircleRight />
            <span>Bills to pay</span>
        </C.ItemMenu>
        <C.ItemMenu to='/bills-already-paid'>
            <MdOutlineAttachMoney />
            <span>Already paid</span>
        </C.ItemMenu>
        <C.ItemMenu to='/bills-to-receivable'>
            <MdArrowCircleLeft />
            <span>Bill to receivable</span>
        </C.ItemMenu>
        <C.ItemMenu to='/bills-received'>
            <GiReceiveMoney />
            <span>Bill received</span>
        </C.ItemMenu>
        <C.ItemMenu to='#'>
            <MdOutlinePerson />
            <span>Perfil</span>
        </C.ItemMenu>
        <C.ItemMenu onClick={() => SignOut()} to='#'>
            <MdOutlineExitToApp />
            <span>Exit</span>
        </C.ItemMenu>
        
    </C.Container>
  )
}

export default NavigationBar