import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cadastro, Dashboard, Login } from '../views';
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
            </Route>

            <Route path='*' element={<h1>NOT FOUND</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteNavigators