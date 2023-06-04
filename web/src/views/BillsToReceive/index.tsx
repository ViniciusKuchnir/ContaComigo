import React, { useEffect, useState } from 'react'
import * as C from './styles';
import Layout from '../../components/Layout'
import TextSearch from '../../components/Form/TextSearch'
import Spin from '../../components/Spin';
import CardAccount from '../../components/Cards/Account';
import { Accounts } from '../../types/account';
import { getUser } from '../../libs/user';
import { User } from '../../types/user';
import { api } from '../../services/api';
import EmptyListMessage from '../../components/EmptyListMessage';

const BillsToReceive = () => {

    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [accounts, setAccounts] = useState<[] | Accounts[]>([]);
    
    const user = getUser() as User;

    useEffect(() => {
        setLoading(true);
        api.get(`/accounts/${user.id}/1`)
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
                      typeAccount={1}
                        forPaid={false}
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
        title='Bills to receive'
        subtitle='Check your paid bills here'
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
          <EmptyListMessage nameList='Bills To Receive' />
      } 

    </Layout>
  )
}

export default BillsToReceive