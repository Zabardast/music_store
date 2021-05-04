import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import "tailwindcss/tailwind.css"

import App from './App';

const Index = () => {
 return(
   <>
      <App/>
   </>
   
  )
  

}



ReactDOM.render(<Index/>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
