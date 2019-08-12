import React from "react";
import Login from "./components/Login";
import ChatMain from "./components/ChatMain";
import Axios from "axios";
import Register from './components/Register'

class App extends React.Component {
  state = {
    currUser: "",
    password:"",
    currView: "LOGIN",
    lang:"",
    success:""
  };

  onLoginUser = (username,language,password) => {

    console.log(username,language,password)
   
    Axios.get("/api/users/login/"+username+"/"+password, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      //  body: JSON.stringify({ username,password})

    }).then( response =>{
      console.log(response)
      // this.setState({
        // success:"true"
      // })
      if(response.status ===200){
        fetch("/api/users/createUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({username })
        })
          .then(response => {
            this.setState({
              currUser: username,
              currView: "CHAT_MAIN_SCREEN",
              lang:language
            });
          })
          .catch(error => console.error("error", error));
      }
      else{
        this.setState({
          currView: "LOGIN"
        })
      }
      
    })
    
  }


  onRegister = (name,email,password,password2) => {
    console.log(name,email,password,password2)
    Axios.post("/api/users/register/"+name+"/"+email+"/"+password+"/"+password2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      //  body: JSON.stringify({ username,password})

    }).then( response =>{
      console.log(response)
    })
  }

  render() {
    if (this.state.currView === "LOGIN") {
      return (
        <div>
          <Login onSubmit ={this.onLoginUser}/>
          <Register onSubmit={this.onRegister}/>
        </div>
      )
    } else if (this.state.currView ==="CHAT_MAIN_SCREEN"){
      return <ChatMain currUser={this.state.currUser} lang={this.state.lang} />
    }    
  
  }
}

export default App;
