import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layoutmain from './components/layouts/Layout';
import VerifiedUser from './components/VerifiedUser';
import UnverifiedUser from './components/UnverifiedUser';
import ErrorComponent from './components/ErrorComponent';
import VerificationPage from './components/VerificationPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { toString } from 'lodash';
import { BrowserRouter } from 'react-router-dom';
// usar http://localhost:3000/#/verificar/12345678-9

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layoutmain>
    <HashRouter>
        <Routes>
          <Route
            key={"verificar_rut"}
            path={"/verificar/:rut"}
            element={<VerificationPage/>}
          />
          <Route
            key={"verificado"}
            path={"/VerifiedUser"}
            element={<VerifiedUser/>}
          />
          <Route
            key={"no_verificado"}
            path={"/UnverifiedUser"}
            element={<UnverifiedUser/>}
          />  
          {/* {routes.map((route, index) => (
            <Route
              key={toString(index)}
              path={route.path}
              element={
                <route.layout>
                  <route.element />
                </route.layout>
              }
            />
          ))} */}
        </Routes>
      </HashRouter>
    </Layoutmain>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
