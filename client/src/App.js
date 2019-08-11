import React from "react";
import Login from "./components/Login";
import ChatMain from "./components/ChatMain";


class App extends React.Component {
  state = {
    currUser: "",
    currView: "LOGIN",
  };

  onLoginUser = username => {
    fetch("/api/users/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(response => {
        this.setState({
          currUser: username,
          currView: "CHAT_MAIN_SCREEN"
        });
      })
      .catch(error => console.error("error", error));
  }

  render() {
    if (this.state.currView === "LOGIN") {
      return <Login onSubmit ={this.onLoginUser}/>;
    } else if (this.state.currView ==="CHAT_MAIN_SCREEN"){
      return <ChatMain currUser={this.state.currUser} />
    }
  
  }
}

export default App;
