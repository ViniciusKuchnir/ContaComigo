import React, { useState } from 'react'
import * as C from './styles';
import Layout from '../../components/Layout';
import FlatButton from '../../components/Buttons/FlatButton';
import ModalBillToPay from '../../components/Modals/ModalBillToPay';
import TextField from '../../components/Form/TextField';
import TextSearch from '../../components/Form/TextSearch';

const BillsToPay = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

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

      <FlatButton onClick={() => setShowModal(true)} text='Add Bill' />
      {showModal && <ModalBillToPay showModal={showModal} setShowModal={() => setShowModal(!showModal)} />}
    </Layout>
  )
}

export default BillsToPay