import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configurStore' 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { ProSidebarProvider } from "react-sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';

const store = ConfigureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
    <React.Fragment>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover={true}
        style={{ width: "100%", maxWidth: "500px", margin: "auto" }}
        toastStyle={{ background: "#333", color: "#fff", borderRadius: "4px" }}
      />
       <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
    </React.Fragment>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
