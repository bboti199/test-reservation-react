import React from 'react';
import { Grid, Typography, makeStyles, Theme, createStyles, Card, CardContent } from '@material-ui/core';
import { ReservationForm } from '../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: 'center',
    },
    root: {
      width: '60%',
      marginTop: theme.spacing(4),
    },
  }),
);

export const CreatePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant='h4' className={classes.title}>
            Create a new reservation
          </Typography>
          <ReservationForm />
        </CardContent>
      </Card>
    </Grid>
  );
};
