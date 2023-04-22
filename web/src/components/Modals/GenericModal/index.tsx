import React from 'react'
import * as C from './styles';
import { MdClose } from 'react-icons/md';

type Props = {
    title: string;
    children: React.ReactNode,
    showModal: boolean;
    setShowModal: (state: boolean) => void  
}

const GenericModal = ({title, children, showModal, setShowModal}:Props) => {
  return (
    <C.Container>
    <C.Content>
      <C.Header>
        <h1>{title}</h1>
        <C.CloseButton>
          <MdClose size={28} onClick={() => setShowModal(!showModal)} />
        </C.CloseButton>
      </C.Header>
      {children}
    </C.Content>
  </C.Container>
  )
}

export default GenericModal