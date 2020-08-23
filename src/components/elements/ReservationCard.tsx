import React from 'react';
import { Reservation } from '../../redux/reservations/types';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Divider,
  Theme,
  createStyles,
  Chip,
} from '@material-ui/core';
import moment from 'moment';
import { Edit, Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/reservations/actions';

interface ReservationCardProps {
  item: Reservation;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 360,
      height: 240,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'space-between',
    },
    cardData: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    deleteButton: {
      color: theme.palette.error.light,
    },
    cardBottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  }),
);

export const ReservationCard: React.FC<ReservationCardProps> = ({ item }: ReservationCardProps) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteReservation(item.id));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant='h4'>
          {item.name}
        </Typography>
        <Divider />
        <Grid container direction='row' className={classes.cardData} justify='space-between' alignItems='center'>
          <Typography variant='body1' gutterBottom>
            Guests: {item.guests}
          </Typography>
          <Chip color='secondary' label={moment(item.date).format('DD/MM/YYYY HH:mm')} />
        </Grid>
        {item.email && <Typography variant='body1'>Email: {item.email}</Typography>}
      </CardContent>
      <CardActions className={classes.cardBottom}>
        <Button color='secondary' startIcon={<Edit />}>
          Edit
        </Button>
        <Button className={classes.deleteButton} onClick={onDelete} startIcon={<Delete />}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
