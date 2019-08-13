import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Login extends React.Component {
  state = {
    currUser: "",
    password: "",
    lang: "en"
  };

  onChangeUsername = e => {
    this.setState({
      currUser: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      this.state.currUser,
      this.state.lang,
      this.state.password
    );
  };

  updateLanguage = event => {
    const { value } = event.target;
    this.setState({
      lang: value
    });
  };
  render() {
    return (
      <div>
        <h2>Login </h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.onChangeUsername}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </Form.Group>
          <select
                  id="language"
                  className="language"
                  name="language"
                  value={this.state.lang}
                  onChange={this.updateLanguage}
                >
                  <option value="ar">Arabic</option>
                  <option value="zh">Chinese(Simplified)</option>
                  <option value="zh-TW">Chinese(Traditional)</option>
                  <option value="cs">Czech</option>
                  <option value="da">Danish</option>
                  <option value="nl">Dutch</option>
                  <option value="en">English</option>
                  <option value="fi">Finnish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="he">Hebrew</option>
                  <option value="hi">Hindi</option>
                  <option value="id">Indonesian</option>
                  <option value="it">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="ko">Korean</option>
                  <option value="ms">Malay</option>
                  <option value="no">Norwegian</option>
                  <option value="fa">Persian</option>
                  <option value="pl">Polish</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="es">Spanish</option>
                  <option value="sv">Swedish</option>
                  <option value="tr">Turkish</option>


            </select>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
