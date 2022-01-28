
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App'
import { isLogined } from './utils/auth';
import Signin from './pages/Signin'

ReactDOM.render(
    <BrowserRouter>
    <Routes>
    <Route path="/signin" element={<Signin/>}></Route>
    </Routes>
  
    </BrowserRouter>
    ,
    document.getElementById('root'));
