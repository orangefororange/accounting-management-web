import React, { Component ,Fragment} from 'react';
import {Routes,Route,Navigate  } from 'react-router-dom';
import { isLogined } from './utils/auth';
import { adminRoutes } from './routes';
import Show from './pages/account/Show';


export default class App extends Component {
  render() {
    return isLogined()?(
      <Fragment>
        <Routes>
        {/* {adminRoutes.map(route => {
            return <Route key={route.path} {...route}/>;
          })} */}
          <Route path="/show" element={<Show/>}></Route>
        </Routes>
        <App></App>
      </Fragment>
    ):(<Navigate  to="/signin"></Navigate>);
  }
}
