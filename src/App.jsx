import React, { Component ,Fragment} from 'react';
import {Routes,Route } from 'react-router-dom';
import Show from './pages/account/Show';
import Signin from './pages/Signin';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/show" element={<Show/>}/>
        </Routes>
      </Fragment>
    );
  }
}
