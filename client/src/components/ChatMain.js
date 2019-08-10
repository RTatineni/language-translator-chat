import React from "react";
import Chatkit from "@pusher/chatkit-client";

class ChatMain extends React.Component {
  state = {
    currUser: {}
  };

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "v1:us1:28eb7916-1ae3-4109-a54b-0172e85d05d6",
      userId: this.props.currUser,
      tokenProvider: new Chatkit.TokenProvider({
        url: "http://localhost:3001/api/df/authenticate"
      })
    });
    chatManager
      .connect()
      .then(currUser => {
        this.setState({ currUser });
      })
      .catch(error => console.error("error", error));
  }
  render() {
    return <div>This is the Main Area for Chat Screen</div>;
  }
}

export default ChatMain;
