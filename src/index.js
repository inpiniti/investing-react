import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

// 리덕스
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './store/index';
import ReduxThunk from 'redux-thunk';

// 리덕스 개발자 도구
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

import selectedToDetails from './middlewares/selectedToDetails'

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(selectedToDetails, ReduxThunk)),
);
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <App2 />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
