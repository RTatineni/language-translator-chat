import React from "react";

class Login extends React.Component {
  state = {
    currUser: "",
    password:"",
    lang:'en'
  };


  onChangeUsername = e => {
    this.setState({
        currUser: e.target.value,
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
  onSubmit = e => {
      e.preventDefault()
      this.props.onSubmit(this.state.currUser,this.state.lang,this.state.password)
      
  }

  updateLanguage = (event) => {
    const { value } = event.target;
    this.setState({
      lang: value,
    });
  }
  render() {
    return (
      <div>
          <h2>Login </h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="username"
              onChange={this.onChangeUsername}
            />
            <input
              type="text"
              placeholder="password"
              onChange={this.onChangePassword}
            />
            <input type="submit" />
            <select
                  id="language"
                  className="language"
                  name="language"
                  value={this.state.lang}
                  onChange={this.updateLanguage}
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="de">German</option>
            </select>
          </form>

      </div>
    );
  }
}

export default Login;
