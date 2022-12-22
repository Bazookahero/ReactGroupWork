import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Greeting from './App';
import reportWebVitals from './reportWebVitals'
import DataTable from './Table/DataTable';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataTable />
    {/* <Greeting /> */}
    <div id="details"></div>
  </React.StrictMode>
);

reportWebVitals();

