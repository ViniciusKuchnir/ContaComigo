import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cadastro, Login } from '../views';
import { BrowserRouter } from 'react-router-dom';

const RouteNavigators = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Cadastro />} />
            <Route path='/signin' element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteNavigators