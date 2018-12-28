import React, { Component } from 'react';
// import API from '../utils/API';
import Login from '../components/LoginPgComponents/LoginForm/loginForm';
import CreateAcct from '../components/LoginPgComponents/CreateAcctForm/createAcctForm';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

// not sure how this will react with the collectionsPg.js state
class LoggedIn extends Component {
  state = { 
    name: "",
    userName: "",
    Password: ""
   }

  //  not sure if this should be name or userName
   handleChange = name => event => {
     this.setState({
       [name]:event.target.value,
     });
   };

  render() { 

    const {classes} = this.props;

    return ( 
      <div>
          {/* login form calling on login component*/}
        <Login>
            {/* username textfield */}
          <TextField
            id="userName"
            Label="Username"
            className={classes.TextField} 
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
            {/* password textfield */}
          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
            {/* login btn */}
          <Button variant="contained" color="secondary" className={classes.button}>
            Login
          </Button>
        </Login>

          {/* Create acct form calling on createAcct component */}
        <CreateAcct>
            {/* new user name input */}
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
            {/* new user userName input (NOT SURE HOW TO MAKE IT DIFFERENT FROM ABOVE username TextField)*/}
          <TextField
            id="userName"
            Label="Username"
            className={classes.TextField} 
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
            {/* new password textfield (NOT SURE HOW TO MAKE IT DIFFERENT FROM ABOVE password TextField)*/}
          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
           {/* Create Acct btn */}
           <Button variant="contained" color="secondary" className={classes.button}>
            Create Account
          </Button>
        </CreateAcct>
      </div>
     );
  }
}
// TextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default withStyles(styles) (LoggedIn);