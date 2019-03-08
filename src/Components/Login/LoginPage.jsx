import React, { Component } from 'react'
import Logo from "./Logo";
import './LoginPage.css'


class LoginPage extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        error: '',
      };
  
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.dismissError = this.dismissError.bind(this);
    }
    dismissError() {
      this.setState({ error: '' });
    }
    handleSubmit(evt) {
      evt.preventDefault();
  
      if (!this.state.username) {
        return this.setState({ error: 'Username is required' });
      }
  
      if (!this.state.password) {
        return this.setState({ error: 'Password is required' });
      }
  
      return this.setState({ error: '' });
    }
  
    handleUserChange(evt) {
      this.setState({
        username: evt.target.value,
      });
    };
  
    handlePassChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    }
  
    render() {
  
      return (
    
        <div className="login-main">
                <Logo />
        <div className="login-back">
        <div className="login-content">
        
          <form onSubmit={this.handleSubmit}>
            {
              this.state.error &&
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            }
            <div className="input-container">
                <label>User Name</label>
                <input type="text" placeholder="Enter Username" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                <label>Password</label>
                <input type="password" placeholder="Enter Password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
            </div>
            <input className="submit-button" type="submit" value="Log In" data-test="submit" />
          </form>
        </div>
        </div>
      </div>

      );
    }
  }
  
  export default LoginPage;

    
  
      
     
   