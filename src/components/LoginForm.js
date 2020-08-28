import React from "react";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  }

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={username} onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={password} onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.username && this.state.password) this.props.handleLogin(this.state)
  }

  handleInputChange = (event) => {
    const { 
      target: { 
        name,
        value,
      }
    } = event

    this.setState({
      [name]: value,
    })
  }
}

export default LoginForm;
