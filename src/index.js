import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render (
<BrowserRouter>  
<App></App>
</BrowserRouter>,
document.getElementById('root'))

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render (
  <Router>
  <App/>
  </Router>,
document.getElementById('root'));*/

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/