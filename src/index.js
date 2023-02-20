// Importing The Pakages --------------------------------------------------------->
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
// Importing The CSS From The css folder inside src------------------------------->

// Importing The App From The Src Folder ----------------------------------------->
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <App />
    </Provider>
);


