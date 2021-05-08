import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';

import { makeStyles } from '@material-ui/core/styles';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    paddingLeft: 5,
  },
  userName: {
    padding: 10,
  },
});

const Header = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const authLinks = (
    <Appbar position="static" color="secondary">
      <Toolbar>
        <ListAltIcon />
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Todo List App
        </Typography>
        {/* <Typography className={classes.userName} variant="body1">
          USERNAME
        </Typography>
        <Typography variant="h4">|</Typography> */}
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" onClick={logout} component={Link} to="/">
          Logout
        </Button>
      </Toolbar>
    </Appbar>
  );

  const guestLinks = (
    <Appbar position="static" color="secondary">
      <Toolbar>
        <ListAltIcon />
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Todo List App
        </Typography>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </Appbar>
  );

  return (
    <div className={classes.root}>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
