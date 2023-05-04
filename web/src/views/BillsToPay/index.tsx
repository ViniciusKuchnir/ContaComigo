import React, { useEffect, useState } from 'react'
import * as C from './styles';
import Layout from '../../components/Layout';
import FlatButton from '../../components/Buttons/FlatButton';
import ModalBillToPay from '../../components/Modals/ModalBillToPay';
import TextField from '../../components/Form/TextField';
import TextSearch from '../../components/Form/TextSearch';
import { api } from '../../services/api';
import { getUser } from '../../libs/user';
import { User } from '../../types/user';
import { Accounts } from '../../types/account';
import CardAccount from '../../components/Cards/Account';

const BillsToPay = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [accounts, setAccounts] = useState<[] | Accounts[]>([]);

  const user = getUser() as User;

  useEffect(() => {
    api.get(`/accounts/${user.id}`)
    .then(({data}) => {
      setAccounts(data);
    })
  }, [])

  return (
    <Layout
      title='Bills to pay'
      subtitle='See here your bills to be paid'
    >
        <TextSearch 
          id='search'
          placeholder='Search account payable'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      <C.List>

        {
          accounts.map(item => {
            if (item.status_id === 2) {
              return (
                <CardAccount 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  type_bill={item.type_bill}
                  expiration={item.expiration}
                  amount={item.amount}
                  beneficiary_name={item.beneficiary_name}
                  comments={item.comments}
                />
              )
            }
          })
        }

        
        </C.List>

                
         
      
      <FlatButton onClick={() => setShowModal(true)} text='Add Bill' />
      {showModal && <ModalBillToPay showModal={showModal} setShowModal={() => setShowModal(!showModal)} />}
    </Layout>
  )
}

export default BillsToPay