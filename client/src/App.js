import React from "react";
import Login from "./components/Login";
import Axios from "axios";
import ChatMain from "./components/ChatMain";

class App extends React.Component {
  state = {
    currUser: "",
    currView: "LOGIN"
  };

  onLoginUser = username => {
    Axios.get("http://localhost:3001/api/df/users", {
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
    console.log(this.state.currView)
    if (this.state.currView === "LOGIN") {
      return <Login onSubmit ={this.onLoginUser}/>;
    }

    if (this.state.currView ==="CHAT_MAIN_SCREEN"){
      return <ChatMain currUser={this.state.currUser} />
    }
    
  
  }
}

export default App;
