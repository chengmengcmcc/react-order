import React from 'react';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotesIcon from '@material-ui/icons/Notes';
import { connect } from 'react-redux';
import { toggleNav } from '../store/actions';
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    fontSize: '1rem'
  },
  toolbar: {
    minHeight: 40
  },
  aLink: {
    color: '#fff'
  },
  appBar: {
    background: '#2196f3'
  }
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleNav())
    }
  }
}

const Header = ({ classes, onClick }) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton color="inherit" aria-label="Menu" onClick={onClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" align="center" className={classes.grow} >
          首页
        </Typography>
        <Link to='/record/passed' className={classes.aLink}>
          <IconButton color="inherit" aria-label="List">
            <NotesIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
)

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));