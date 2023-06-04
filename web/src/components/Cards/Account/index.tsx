import React, { useState } from 'react'
import * as C from './styles';
import { Accounts } from '../../../types/account';
import { formatMoney } from '../../../libs/Money';
import { formatDate } from '../../../libs/Date';
import { 
    MdMoreVert
} from 'react-icons/md';
import ModalBillEdited from '../../Modals/ModalBillEdited';
import { Button } from '../../Buttons/Primary/styles';
import Checkbox from '../../Form/Checkbox';
import ModalBillConfirmationPaid from '../../Modals/ModalBillConfirmationPaid';

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
    forPaid: boolean;
    typeAccount: number;
}


const CardAccount = ({id, name, amount, expiration, forPaid, typeAccount}: Props) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalConfirmation, setShowModalConfirmation] = useState<boolean>(false);

    return (
    <div>
        {forPaid ? 
            <C.LabelPaid onClick={() => setShowModalConfirmation(true)} >Bill paid {'>'}</C.LabelPaid> 
            : 
            null
        }
        
        <C.Container onClick={() => setShowModal(true)}>
            <div>
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
                
            </div>
        </C.Container>
        {showModal && <ModalBillEdited 
            id={id}
            setShowModal={setShowModal} 
            showModal={showModal}
            typeAccount={typeAccount} 
            />
        }
        {
            showModalConfirmation && 
                <ModalBillConfirmationPaid 
                    id={id}
                    showModal={showModalConfirmation}
                    setShowModal={setShowModalConfirmation}
                />
        }         
    </div>
  )
}

export default CardAccount