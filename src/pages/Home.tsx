import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, useNavigate, Navigate } from 'react-router-dom';
import { Routes, Route as RouteV6 } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Experience from './Experience';
import Contact from './Contact';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import jlogo from './assets/jlogo.png';
import Welcome from './Welcome';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: '100px',
    flexShrink: 0,
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    alignItems: 'center',
  },
  listItem: {
    position: 'relative',
    transition: 'transform 0.3s',
    display: 'flex',
    alignItems: 'center',
    marginTop: '60px',
  },
  logo: {
    maxWidth: '3%',
    maxBlockSize: '3%',
    marginRight: '10px',
    marginBottom: '20px',
  },
  listItemBefore: {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '3px',
    bottom: '0',
    left: '0',
    backgroundColor: 'transparent',
  },
  listItemHover: {
    borderBottom: '5px solid #044d6b',
    transform: 'scale(1.1)',
  },
  listItemLink: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 600,
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '60px',
    letterSpacing: '1px',
  },
  listItemLinkHover: {
    color: '#a8d6e8',
  },
  nav: {
    backgroundColor: '#2596be',
    position: 'fixed',
    top: '0',
  },
}));

function Home() {
  const classes = useStyles();

  useEffect(() => {
  });

  return (
    <Router>
      <div className={classes.root}>
        <nav className={`${classes.drawer} ${classes.nav}`}>
          <List>
            <ListItem button className={classes.listItem}>
              <ListItemIcon>
                <img className={classes.logo} src={jlogo} alt="Jlogo" />
              </ListItemIcon>
              <ListItemText />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/welcome"
              className={classes.listItem}
            >
              <ListItemIcon>
                <PersonRoundedIcon />
              </ListItemIcon>
              <ListItemText />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/experience"
              className={classes.listItem}
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact"
              className={classes.listItem}
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText />
            </ListItem>
          </List>
        </nav>
        <div className={classes.content}>
          <Routes>
            <RouteV6 path="/welcome" element={<Welcome />} />
            <RouteV6 path="/experience" element={<Experience />} />
            <RouteV6 path="/contact" element={<Contact />} />
            <RouteV6 path="/*" element={<Navigate to="/welcome" replace={true} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
