import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { makeStyles, Theme, createStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { EditReservationForm } from '../components/elements';

interface EditPageRouterProps {
  id: string;
}

type EditPageProps = RouteComponentProps<EditPageRouterProps>;

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

export const EditPage: React.FC<EditPageProps> = ({ match }: EditPageProps) => {
  const { id } = match.params;
  const classes = useStyles();
  const reservation = useSelector((state: RootState) => state.reservations.reservations).find((x) => x.id === id);

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Card className={classes.root}>
        <CardContent>
          {reservation ? (
            <React.Fragment>
              <Typography gutterBottom variant='h4' className={classes.title}>
                Edit your reservation
              </Typography>
              <EditReservationForm reservation={reservation} />
            </React.Fragment>
          ) : (
            <Typography gutterBottom variant='h4' className={classes.title}>
              We did not find your reservation
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
