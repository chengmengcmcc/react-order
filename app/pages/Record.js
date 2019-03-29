import React, { Fragment } from 'react';
import { Route, Link } from "react-router-dom";
import Header from '../components/Header';
import RecordList from '../components/RecordList';
import { withStyles } from '@material-ui/core/styles';
import Nav from '../components/Nav';

const styles = theme => ({
  tab: {
    display: "flex",
    marginTop: 48,
    height: 40,
    lineHeight: '40px'
  },
  tabItem: {
    flex: '1',
    textAlign: 'center',

  },
  tabLink: {
    display: 'block',
    width: '100%',
    height: '100%',
    color: '#000',
  },
  curTabLink: {
    borderBottom: '1px solid #2196f3',
    color: '#2196f3',
  }
});

const Record = ({ match, classes, location }) => {
  const path = location.pathname.split('/').pop();
  return (
    <Fragment>
      <Header />
      <ul className={classes.tab}>
        <li className={classes.tabItem}>
          <Link to={`${match.url}/passed`} className={path === 'passed' ? classes.tabLink + ' ' + classes.curTabLink : classes.tabLink}>已通过</Link>
        </li>
        <li className={classes.tabItem}>
          <Link to={`${match.url}/audited`} className={path === 'audited' ? classes.tabLink + ' ' + classes.curTabLink : classes.tabLink}>待审核</Link>
        </li>
        <li className={classes.tabItem}>
          <Link to={`${match.url}/failed`} className={path === 'failed' ? classes.tabLink + ' ' + classes.curTabLink : classes.tabLink}>未通过</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:typeId`} component={RecordList} />
      {/* <Route
    exact
    path={match.path}
    render={() => <RecordList />}
  /> */}
      <Nav />

    </Fragment>
  )
}


export default withStyles(styles)(Record);