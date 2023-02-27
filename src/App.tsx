/*
 * @Description:
 * @Version: 2.0
 * @Autor: user
 * @Date: 2023-02-26 21:44:25
 * @LastEditors: user
 * @LastEditTime: 2023-02-27 23:29:37
 */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import utils from 'utils/utils';

function App() {
  // console.log(utils);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.s
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
