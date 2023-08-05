import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class StateManagement extends React.Component{
  constructor(){
    super()
    this.state = ({os: "Windows"})
  }
  windows = () => this.setState = {os: "Windows"}
  mac = () => this.setState = {os: "Mac"}
  linux = () => this.setState = os.{os: "Linux"}

  render(){
    return(
      <div>
        <h1>I am using {this.state.os} Operating System</h1>
        <button onClick={this.mac}>Change to Mac</button>
        <button onClick={this.linux}>Change to Linux</button>
        <button onClick={this.windows}>Change to Windows</button>
        <br></br><br></br>
        <App></App>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateManagement />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
