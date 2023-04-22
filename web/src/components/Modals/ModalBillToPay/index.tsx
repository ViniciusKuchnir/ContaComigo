import React from 'react'
import GenericModal from '../GenericModal'

type Props = {
    showModal: boolean;
    setShowModal: (state: boolean) => void
  }

const ModalBillToPay = ({showModal, setShowModal}: Props) => {
  return (
    <GenericModal title='Add Bill to pay' showModal={showModal} setShowModal={() => setShowModal(!showModal)}>

    </GenericModal>
  )
}

export default ModalBillToPay