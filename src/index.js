/*
 * @Descripttion: 
 * @Author: Zeng
 * @Date: 2022-02-18 00:33:23
 * @LastEditors: Zeng
 * @LastEditTime: 2022-02-20 17:45:41
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hello from './components/hello'

const Hello1 = () => <h1>这是hello函数组件</h1>

const Hello2 = (props) => {
  return (
    <h2>这是hello{props.x}函数组件</h2>
  )
}

class Count extends React.Component {
  state = {
    count: 0
  }
  countHandle = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  componentDidMount(){
    console.log('componentDidMount', this.state.count)
  }
  componentDidUpdate() {
    console.log(this.state.count)
  }
  render () {
    return (
      <div>
        <div>计算的结果：{this.state.count}</div>
        <button onClick={this.countHandle}>button</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/hello" element={<Hello />}></Route>
          <Route path="/hello1" element={<Hello1 />}></Route>
          <Route path="/count" element={<Count />}></Route>
          <Route path="/hello2" element={<Hello2 x="2"/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
