import React, { useState } from 'react'
import * as C from './styles';
import { Accounts } from '../../../types/account';
import { formatMoney } from '../../../libs/Money';
import { formatDate } from '../../../libs/Date';
import { 
    MdMoreVert
} from 'react-icons/md';

type Props = {
    id: number;
    name: string;
    amount: number;
    type_bill: {
        type: string;
    },
    expiration: Date;
    beneficiary_name: string;
    comments: string;
}

const CardAccount = ({id, name, amount, type_bill: {type}, expiration, beneficiary_name, comments}: Props) => {

    return (
    <C.Container>
        <C.Information>
            <C.Label>Name</C.Label>
            <C.Data>{name}</C.Data>
        </C.Information>
        <C.Information>
            <C.Label>Amount</C.Label>
            ${formatMoney(amount)}
        </C.Information>
        <C.Information>
            <C.Label>Expiration date</C.Label>
            {formatDate(expiration)}
        </C.Information>
    </C.Container>
  )
}

export default CardAccount