import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import NewsFeed from './components/news-feed';
import reportWebVitals from './reportWebVitals';
//import * as ServiceWorker from './serviceWorker';


ReactDOM.render(
  <NewsFeed />,
  document.getElementById('root')

  //React.createElement(NewsFeed, {}, null),  
);

//ServiceWorker.unregister();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//<React.StrictMode>
   // <App />
  //</React.StrictMode>,