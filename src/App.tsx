import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routehub from './routehub';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter
          basename={window.__POWERED_BY_QIANKUN__ ? '/mf/rtree' : '/'}
        >
          <Routehub />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
