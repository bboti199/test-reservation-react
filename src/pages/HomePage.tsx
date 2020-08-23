import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { ReservationCard } from '../components';
import { Grid, makeStyles, Theme, createStyles, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

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
      ) : null}
      <Fab className={classes.fab} color='secondary'>
        <Add />
      </Fab>
    </div>
  );
};
