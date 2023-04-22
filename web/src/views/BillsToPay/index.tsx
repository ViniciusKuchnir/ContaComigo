import React, { useState } from 'react'
import * as C from './styles';
import Layout from '../../components/Layout';
import FlatButton from '../../components/Buttons/FlatButton';
import ModalBillToPay from '../../components/Modals/ModalBillToPay';

const BillsToPay = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Layout
      title='Bills to pay'
      subtitle='See here your bills to be paid'
    >

      <FlatButton onClick={() => setShowModal(true)} text='Add Bill' />
      {showModal && <ModalBillToPay showModal={showModal} setShowModal={() => setShowModal(!showModal)} />}
    </Layout>
  )
}

export default BillsToPay