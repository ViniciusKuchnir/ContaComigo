import React from 'react'
import * as C from './styles';

type Props = {
  nameList: string;
}

const EmptyListMessage = ({nameList}: Props) => {
  return (
    <C.Container>
      <C.Text>Empty <C.NameList>{nameList}</C.NameList> list</C.Text>
    </C.Container>
  )
}

export default EmptyListMessage