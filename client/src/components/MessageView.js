import React from "react";

class MessageView extends React.Component {
  
  state = {

  };

  render() {
    return (
      <div>
        <ul>
          {this.props.messageList.map((message, index) => (
            
            <li key={index}>
              <div>
                <span>{message[1]}</span>{" "}
              </div>
              <p>{message[0].TranslatedText}</p>
            </li>
          ))}
        </ul>
      </div>
    );
    
  }
}

export default MessageView;
