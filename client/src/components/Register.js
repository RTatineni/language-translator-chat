import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
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
  onChangePassword2 = e => {
    this.setState({
      password2: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.password2
    );
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />

        <h2>Register for an account </h2>

        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
              onChange={this.onChangeName}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmailAddress">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.onChangeEmail}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordRegister">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordRegisterAgain">
            <Form.Label>Reenter your Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password again"
              onChange={this.onChangePassword2}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
