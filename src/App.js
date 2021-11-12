import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SimilarAnnouncements from './pages/SimilarAnnouncements';
import Main from './pages/Main';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  app: {
    display: 'flex',
    justifyContent: 'center',
  },

  container: {
    padding: 20,
    maxWidth: 800,
    width: '100%',
  },
})

const App = () => {
  const classes = useStyles();
  const { announcement } = useSelector(state => state);

  return (
    <Box className={classes.app}>
      <Box className={classes.container}>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            {announcement.map(item => (
              <Route path={`/announcement/${item.id}`}>
                <SimilarAnnouncements item={item} />
              </Route>
            ))}
          </Switch>
        </Router>
      </Box>
    </Box>
  )
}

export default App;