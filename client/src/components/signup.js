import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2:""
    };
  }


  handleSubmit = (e) => {
    e.preventDefault()

  }

  handleChangeUsername(e) {
    this.setState({user: e.target.value});
  }
  
  handleChangePassword(e){
      this.setState({password: e.target.value})
  }

  handleChangePasswordRepeat(e){
    this.setState({password2:e.target.value})
  }


  render() {
    return (

      <div className="form-container">
        <h1>Login to Messenger</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="username">What is your UserName?</label>
          <input
            type="username"
            name="username"
            onChange={this.handleChangeUsername}
            className="input"
          />
          <br></br>
          <label htmlFor="username">What is your Password?</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChangePassword}
            className="input"
          />
          <br></br>
          <label htmlFor="username">Enter your Password again plz?</label>
           <input
            type="password"
            name="password"
            onChange={this.handleChangePasswordRepeat}
            className="input"
          />
          <button className="submit">Login</button>
        </form>
      </div>


    );
  }
}

export default Signup;
