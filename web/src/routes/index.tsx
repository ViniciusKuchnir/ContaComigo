import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BillsPay, Cadastro, Dashboard, Login, NotFound } from '../views';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './privateRoutes';

const RouteNavigators = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Cadastro />} />
            <Route path='/signin' element={<Login />} />
            
            <Route path='/' element={<PrivateRoutes />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='bills-to-pay' element={<BillsPay />} />
            </Route>
            
            <Route path='*' element={<NotFound />} />

        </Routes>
    </BrowserRouter>
  )
}

export default RouteNavigators