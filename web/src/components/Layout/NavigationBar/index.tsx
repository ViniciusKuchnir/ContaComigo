import React, { useContext, useEffect, useRef } from 'react';
import * as C from './styles';
import { 
    MdOutlineDashboard, 
    MdOutlineAttachMoney,
    MdPlaylistAddCheck,
    MdSettings,
    MdOutlinePerson,
    MdOutlineSupportAgent,
    MdOutlineExitToApp,
    MdArrowCircleRight,
    MdArrowCircleLeft
} from 'react-icons/md';
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
        <C.ItemMenu to='#'>
            <MdPlaylistAddCheck />
            <span>Goals</span>
        </C.ItemMenu>
        <C.ItemMenu to='#'>
            <MdSettings />
            <span>Settings</span>
        </C.ItemMenu>
        <C.ItemMenu to='#'>
            <MdOutlinePerson />
            <span>Perfil</span>
        </C.ItemMenu>
        <C.ItemMenu to='#'>
            <MdOutlineSupportAgent />
            <span>Support</span>
        </C.ItemMenu>
        <C.ItemMenu onClick={() => SignOut()} to='#'>
            <MdOutlineExitToApp />
            <span>Exit</span>
        </C.ItemMenu>
        
    </C.Container>
  )
}

export default NavigationBar