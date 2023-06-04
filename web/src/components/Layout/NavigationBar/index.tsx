import React, { useContext, useEffect, useRef } from 'react';
import * as C from './styles';
import { 
    MdOutlineDashboard, 
    MdOutlineAccountBalanceWallet as MdOutlineWallet,
    MdOutlineAttachMoney,
    MdPlaylistAddCheck,
    MdSettings,
    MdOutlinePerson,
    MdOutlineSupportAgent,
    MdOutlineExitToApp
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
            <MdOutlineWallet />
            <span>Bills to pay</span>
        </C.ItemMenu>
        <C.ItemMenu to='/bills-to-receive'>
            <MdOutlineAttachMoney />
            <span>Bills to receive</span>
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