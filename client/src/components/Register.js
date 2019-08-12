import React from "react";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password:"",
    password2:"",

  };


  onChangeName = e => {
    this.setState({
        name: e.target.value,
    })
    if(this.props.onChange){
      this.props.onChange()
    }
  }
  onChangeEmail = e => {
    this.setState({
        email: e.target.value,
    })
    if(this.props.onChange){
      this.props.onChange()
    }
  }
  onChangePassword = e => {
    this.setState({
      password: e.target.value,
    })
    if(this.props.onChange){
    this.props.onChange()
    }
  }
  onChangePassword2 = e => {
    this.setState({
      password2: e.target.value,
    })
    if(this.props.onChange){
    this.props.onChange()
    }
    }
  onSubmit = e => {
      e.preventDefault()
      this.props.onSubmit(this.state.name,this.state.email,this.state.password,this.state.password2)
      
  }

 
  render() {
    return (
      <div>
          <h2>Register for an account </h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="name"
              onChange={this.onChangeName}
            />
            <input
              type="text"
              placeholder="email"
              onChange={this.onChangeEmail}
            />
            <input
              type="text"
              placeholder="password"
              onChange={this.onChangePassword}
            />
            <input
              type="text"
              placeholder="reenter password"
              onChange={this.onChangePassword2}
            />
            <input type="submit" />
          </form>

      </div>
    );
  }
}

export default Register;
