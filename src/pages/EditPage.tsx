import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { makeStyles, Theme, createStyles, Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
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
      <Typography>
        Warning: Refreshing the page deletes all existing data due to the fact that it is generated on the fly and is
        stored in memory
      </Typography>
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
            <Grid container direction='column' justify='center' alignItems='center'>
              <Typography gutterBottom variant='h4' className={classes.title}>
                We did not find your reservation
              </Typography>
              <Button component={Link} to='/' variant='contained' color='default'>
                Go Back
              </Button>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
