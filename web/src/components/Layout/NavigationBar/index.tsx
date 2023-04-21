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
import { getUser } from '../../../libs/user';
import { ContextUser, User } from '../../../types/user';
import { UserContext } from '../../../contexts/user';

const NavigationBar = () => {

    const user = getUser() as User;
    const {SignOut} = useContext(UserContext) as ContextUser;

  return (
    <C.Container>
        <C.Tooltip to='/dashboard'>
            <MdOutlineDashboard />
            <span>Dashboard</span>
        </C.Tooltip>
        <C.Tooltip to='#'>
            <MdOutlineWallet />
            <span>Bills to pay</span>
        </C.Tooltip>
        <C.Tooltip to='#'>
            <MdOutlineAttachMoney />
            <span>Bills to receive</span>
        </C.Tooltip>
        <C.Tooltip to='#'>
            <MdPlaylistAddCheck />
            <span>Goals</span>
        </C.Tooltip>
        <C.Tooltip to='#'>
            <MdSettings />
            <span>Settings</span>
        </C.Tooltip>
        <C.Tooltip to='#'>
            <MdOutlinePerson />
            <span>Perfil: {user.name} {user.surname}</span>
        </C.Tooltip>
        <C.Tooltip to='#'>
            <MdOutlineSupportAgent />
            <span>Support</span>
        </C.Tooltip>
        <C.Tooltip onClick={() => SignOut()} to='#'>
            <MdOutlineExitToApp />
            <span>Exit</span>
        </C.Tooltip>
        
    </C.Container>
  )
}

export default NavigationBar