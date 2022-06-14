import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Feed from './pages/Feed/'


const AppRoutes: React.FC = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Feed />} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;