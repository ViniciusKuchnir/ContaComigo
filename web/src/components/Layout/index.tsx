import React from 'react'
import * as C from './styles';
import NavigationBar from './NavigationBar';

type Props = {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

const Layout = ({children,title, subtitle}: Props) => {
  return (
    <C.Container>
        <NavigationBar />
        <main>
          <C.Head>
            <h1>{title}</h1>
            <span>{subtitle}</span>
          </C.Head>
          {children}
        </main>
    </C.Container>
  )
}

export default Layout