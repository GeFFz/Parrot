import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Feed from './pages/Feed/'
import Login from './pages/Login'


const AppRoutes: React.FC = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;