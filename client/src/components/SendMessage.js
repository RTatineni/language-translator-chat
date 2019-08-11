import React from "react";

class SendMessage extends React.Component {
  state = {
    messageText: ""
  };
  
  onChange = e => {
    this.setState({
        messageText: e.target.value,
    })
  }

  onSubmit = e => {
      e.preventDefault()
      this.props.onSubmit(this.state.messageText)
      // this.setState({messageText:""})
  }

  render() {
    return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="message"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
    );
  }
}

export default SendMessage;
