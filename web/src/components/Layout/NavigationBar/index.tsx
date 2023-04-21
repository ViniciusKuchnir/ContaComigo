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
import { User } from '../../../types/user';

const NavigationBar = () => {

    const {name, surname} = getUser() as User;

  return (
    <C.Container>
        <C.Tooltip>
            <MdOutlineDashboard />
            <span>Dashboard</span>
        </C.Tooltip>
        <C.Tooltip>
            <MdOutlineWallet />
            <span>Bills to pay</span>
        </C.Tooltip>
        <C.Tooltip>
            <MdOutlineAttachMoney />
            <span>Bills to receive</span>
        </C.Tooltip>
        <C.Tooltip>
            <MdPlaylistAddCheck />
            <span>Goals</span>
        </C.Tooltip>
        <C.Tooltip>
            <MdSettings />
            <span>Settings</span>
        </C.Tooltip>
        <C.Tooltip>
            <MdOutlinePerson />
            <span>Perfil: {name} {surname}</span>
        </C.Tooltip>
        <C.Tooltip>
            <MdOutlineSupportAgent />
            <span>Support</span>
        </C.Tooltip>
        <C.Tooltip>
            <MdOutlineExitToApp />
            <span>Exit</span>
        </C.Tooltip>
        
    </C.Container>
  )
}

export default NavigationBar