import React from 'react'
import * as C from './styles';
import NavigationBar from './NavigationBar';

type Props = {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <C.Container>
        <NavigationBar />
        <main>
            {children}
        </main>
    </C.Container>
  )
}

export default Layout