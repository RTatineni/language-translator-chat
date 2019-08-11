import React from "react";

class Login extends React.Component {
  state = {
    currUser: ""
  };


  onChange = e => {
    this.setState({
        currUser: e.target.value,
    })
    if(this.props.onChange){
      this.props.onChange()
    }
  }

  onSubmit = e => {
      e.preventDefault()
      this.props.onSubmit(this.state.currUser)
  }
  render() {
    return (
      <div>
          <h2>What is Your Username?</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="username"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
      </div>
    );
  }
}

export default Login;
