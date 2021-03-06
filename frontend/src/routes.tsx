import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Perfil from './pages/Perfil';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed/'
import Login from './pages/Login'


const AppRoutes: React.FC = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/feed' element={<Feed />} />
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/perfil' element={<Perfil />} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;