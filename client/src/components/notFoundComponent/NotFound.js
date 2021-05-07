import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '75vh',
  },
  label: {
    textAlign: 'center',
    marginBottom: '10px',
  },
});

function NotFound() {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.root}>
        <Typography className={classes.label} variant="h1" color="secondary">
          Page Not Found!
        </Typography>
        <Typography className={classes.label} variant="h3" color="secondary">
          Sorry, this page does not exist
        </Typography>
      </Container>
    </Fragment>
  );
}

export default NotFound;
