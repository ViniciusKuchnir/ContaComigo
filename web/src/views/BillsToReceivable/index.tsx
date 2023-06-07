import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Layout from '../../components/Layout'
import TextSearch from '../../components/Form/TextSearch'
import FlatButton from '../../components/Buttons/FlatButton';
import { getUser } from '../../libs/user';
import { User } from '../../types/user';
import ModalBillToReceivable from '../../components/Modals/ModalBillToReceivable';
import { api } from '../../services/api';
import { Accounts } from '../../types/account';
import CardAccount from '../../components/Cards/Account';
import EmptyListMessage from '../../components/EmptyListMessage';
import Spin from '../../components/Spin';

const BillsToReceivable = () => {

    const [search, setSearch] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [accounts, setAccounts] = useState<[] | Accounts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    const user = getUser() as User;

    useEffect(() => {
        setLoading(true);
          api.get(`/accounts/${user.id}/3`)
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
                      typeAccount={3} 
                      forPaid={false}
                      forReceivable={true}
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
    <Layout title='Bill to receivable' subtitle='See here your bills to receivable'>
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
                <EmptyListMessage nameList='Bills To Receivable' />
      }
        
        <FlatButton onClick={() => setShowModal(true)} text='Add Bill' />
        {showModal && <ModalBillToReceivable showModal={showModal} setShowModal={() => setShowModal(!showModal)} />}
    </Layout>
  )
}

export default BillsToReceivable