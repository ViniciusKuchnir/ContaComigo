import React from 'react'
import * as C from './styles';
import { formatMoney } from '../../../libs/Money';
import Spin from '../../Spin';

type Props = {
    icon: React.ReactNode;
    label: string;
    data: number;
    color: 'green' | 'red';
    loading: boolean;

}

const CardInformation = ({icon, label, data, color, loading}: Props) => {
  return (
    <C.Container color={color}>
        {icon}
        <C.Line />
        {loading ? 
            <C.Spin />
            :
            <C.Data>
                <span>{label}</span>
                <C.Value>{formatMoney(data)}</C.Value>
            </C.Data>
            
    }
    </C.Container>
  )
}

export default CardInformation