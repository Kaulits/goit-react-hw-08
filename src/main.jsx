import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


import { Global } from './styles/Global.js'
import { Provider } from 'react-redux';

import {  persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
        <App /> <Global />
   </PersistGate>
    </Provider>
</BrowserRouter>
    
 
);