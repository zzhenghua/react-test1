/*
 * @Descripttion: 
 * @Author: Zeng
 * @Date: 2022-02-18 00:33:23
 * @LastEditors: Zeng
 * @LastEditTime: 2022-02-20 17:43:01
 */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App () {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          Learn React
          <Link to="/hello" tag="button"> hello</Link>
          <Link to="/hello1" tag="button">hello1</Link>
          <Link to="/hello2" tag="button">hello2</Link>
          <Link to="/count" tag="button">count</Link>
        {/* </a> */}
        <Outlet></Outlet>
      {/* </header> */}
    </div>
  );
}

export default App;
