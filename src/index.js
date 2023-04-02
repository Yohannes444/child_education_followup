import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configurStore' 

const store = ConfigureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
    <React.Fragment>
 
        <App />
      
    </React.Fragment>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
