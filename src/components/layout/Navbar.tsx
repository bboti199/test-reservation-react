import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles, createStyles } from '@material-ui/core';
import { Brightness5, Brightness6 } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { toggleDarkMode } from '../../redux/theme';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
);

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const darkModeSelector = (state: RootState) => state.theme.isDarkMode;
  const isDarkMode = useSelector(darkModeSelector);
  const dispatch = useDispatch();

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography className={classes.title} variant='h6'>
          Test Reservations
        </Typography>
        <IconButton edge='end' color='inherit' onClick={() => dispatch(toggleDarkMode())}>
          {isDarkMode ? <Brightness6 /> : <Brightness5 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
