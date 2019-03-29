import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleNav } from '../store/actions';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    top: 48,
    left: '-100%',
    bottom: 0,
    transition: 'left 0.3s linear'
  },
  show: {
    left: '0',
  },
  aLink: {
    display: 'block'
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.get('navShow')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleNav())
    }
  }
}

const Nav = ({ classes, show, onClick }) => {
  const clsName = show ? classes.root + ' ' + classes.show : classes.root;
  return (
    <List component="nav" className={clsName}>
      <ListItem button onClick={onClick}>
        <ListItemText primary="首页" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <Link to='/balance' className={classes.aLink}>
          <ListItemText primary="提现" />
        </Link>
      </ListItem>
    </List>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));