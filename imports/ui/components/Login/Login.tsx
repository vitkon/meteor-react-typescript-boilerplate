import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import { browserHistory } from 'react-router';
import { Alert, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';

class Login extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      hasError: false,
      isEmailRequired: false,
      isInvalid: false,
      isSent: false,
      password: '',
    };
  }

public render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit.bind(this)}>

          {this.state.isSent ? <Alert bsStyle="info">Please check your email</Alert> : ''}
          {this.state.isInvalid ? <Alert bsStyle="danger">Please enter email and password</Alert> : ''}
          {this.state.isEmailRequired ? <Alert bsStyle="danger">Please enter your email address first.</Alert> : ''}
          {this.state.hasError ? <Alert bsStyle="danger">Login unsuccessful. Please try again.</Alert> : ''}

          <FormGroup controlId="username">
            <ControlLabel htmlFor="username" srOnly>Username</ControlLabel>
            <FormControl
              type="text"
              id="username"
              required
              autoFocus
              placeholder="Username"
              value={email}
              onChange={this.handleChange.bind(this, 'email')}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel htmlFor="password" srOnly>Password</ControlLabel>
            <FormControl
              type="password"
              id="password"
              required
              placeholder="Password"
              value={password}
              onChange={this.handleChange.bind(this, 'password')}
            />
          </FormGroup>
          <FormGroup>
            <Button bsStyle="primary" block type="submit">Log in</Button>
          </FormGroup>
          <FormGroup>
            <a href="#" onClick={this.forgotPassword.bind(this)}>Forgot password?</a>
          </FormGroup>
        </form>
      </div>
    );
  }

  private onSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    if (!this.state.email || !this.state.password) {
      this.setState({ isInvalid: true, isEmailRequired: false, hasError: false, isSent: false });
      return;
    }

    this.setState({ isInvalid: false, isEmailRequired: false, hasError: false, isSent: false });

    Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
      if (err) {
        this.setState({ isInvalid: false, isEmailRequired: false, hasError: true, isSent: false });
      } else {
        browserHistory.push('/admin');
      }
    });
  }

  private forgotPassword(e) {
    if (e) {
      e.preventDefault();
    }

    if (!this.state.email) {
      this.setState({ isInvalid: false, isEmailRequired: true, hasError: false, isSent: false });
      return;
    }

    Accounts.forgotPassword({ email: this.state.email }, (err) => {
      if (err) {
        this.setState({ isInvalid: false, isEmailRequired: false, hasError: true, isSent: false });
      }

      this.setState({ isInvalid: false, isEmailRequired: false, hasError: false, isSent: true });
    });
  }

  private handleChange(field, event) {
    this.setState({ [field]: event.target.value });
  }
}

export default Login;
