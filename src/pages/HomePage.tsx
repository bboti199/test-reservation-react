import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { ReservationCard } from '../components';
import { Grid, makeStyles, Theme, createStyles, Fab, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      padding: theme.spacing(2),
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(6),
      right: theme.spacing(6),
    },
    messageContainer: {
      flex: 1,
      height: '90vh',
    },
    message: {
      color: theme.palette.grey[500],
      textAlign: 'center',
    },
  }),
);

export const HomePage: React.FC = () => {
  const classes = useStyles();
  const reservations = useSelector((state: RootState) => state.reservations.reservations);

  return (
    <div>
      {reservations.length > 0 ? (
        <Grid className={classes.root} container direction='row' justify='flex-start' alignItems='flex-start'>
          {reservations.map((r) => (
            <Grid item className={classes.card} key={r.id}>
              <ReservationCard item={r} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container direction='column' className={classes.messageContainer} justify='center' alignItems='center'>
          <Typography className={classes.message} variant='h5'>
            You can add new reservations by clicking on the <code>+</code> sign below
          </Typography>
        </Grid>
      )}
      <Fab className={classes.fab} color='secondary' component={Link} to='/create'>
        <Add />
      </Fab>
    </div>
  );
};
