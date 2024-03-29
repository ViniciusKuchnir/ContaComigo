import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  BillsPay, 
  Cadastro, 
  Dashboard, 
  Login, 
  NotFound,  
  BillsAlreadyPaid, 
  BillsToReceivable, 
  BillsReceived,
  Perfil,
  ForgotPassword

} from '../views';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './privateRoutes';

const RouteNavigators = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Cadastro />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            
            
            <Route path='/' element={<PrivateRoutes />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='bills-to-pay' element={<BillsPay />} />
              <Route path='bills-already-paid' element={<BillsAlreadyPaid />} />
              <Route path='bills-to-receivable' element={<BillsToReceivable />} />
              <Route path='bills-received' element={<BillsReceived />} />
              <Route path='perfil' element={<Perfil />} />
            </Route>
            
            <Route path='*' element={<NotFound />} />

        </Routes>
    </BrowserRouter>
  )
}

export default RouteNavigators