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
import Spin from '../../components/Spin';
import EmptyListMessage from '../../components/EmptyListMessage';

const BillsToPay = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [accounts, setAccounts] = useState<[] | Accounts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const user = getUser() as User;

  useEffect(() => {
    setLoading(true);
      api.get(`/accounts/${user.id}/2`)
    .then(({data}) => {
      setAccounts(data);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);


  const accountsFiltered = accounts.filter(account => account.name.toUpperCase().includes(search.toUpperCase())); 

  const renderList = (list: Accounts[]) => {
    return (
      <C.List>
        {
          accountsFiltered.map(item => {
              return (
                <CardAccount
                  typeAccount={2} 
                  forPaid={true}
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
          })
        }
      </C.List>
    );
  }

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
        
      {loading ? 
        <C.Spinner>
          <Spin />
        </C.Spinner> 
      : 
        accountsFiltered.length > 0 ? 
        renderList(accountsFiltered) 
        : 
        <EmptyListMessage nameList='Bills To Pay' />
      }

      <FlatButton onClick={() => setShowModal(true)} text='Add Bill' />
      {showModal && <ModalBillToPay showModal={showModal} setShowModal={() => setShowModal(!showModal)} />}
    </Layout>
  )
}

export default BillsToPay