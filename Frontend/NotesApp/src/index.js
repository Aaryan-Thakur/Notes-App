import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register  from './pages/Register'

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(window.location.pathname)
if(window.location.pathname == "/register"){
root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
  
);
}
else{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
