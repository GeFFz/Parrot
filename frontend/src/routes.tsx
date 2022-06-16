import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed/'
import Login from './pages/Login'


const AppRoutes: React.FC = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;