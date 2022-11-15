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
      <header className="App-header">
        <p>
          hll <code> 子应用</code> v0.0.1
        </p>
      </header>
      <Provider store={store}>
        <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/app/react" : "/"}>
          <Routehub />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
