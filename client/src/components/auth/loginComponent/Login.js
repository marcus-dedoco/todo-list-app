import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../../actions/auth';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  label: {
    marginBottom: '10px',
  },
  input: {
    display: 'block',
    paddingBottom: 10,
  },
  btn: {
    marginBottom: '10px',
  },
});

const Login = ({ login, isAuthenticated }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    login({ email, password });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <Typography className={classes.label} variant="h2" color="secondary">
          Login
        </Typography>
        <Typography className={classes.label} variant="h6">
          Sign In Your Account
        </Typography>
        <TextField
          className={classes.input}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <TextField
          className={classes.input}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength="8"
        />

        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
        >
          Login
        </Button>
      </form>
      <Typography className={classes.label} variant="body1">
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
