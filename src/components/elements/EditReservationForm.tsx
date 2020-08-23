import React from 'react';
import { Reservation } from '../../redux/reservations/types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { FormData, formSchema } from '../../utils';
import { makeStyles, createStyles, Theme, Grid, TextField, Button } from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import { editReservation } from '../../redux/reservations/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: '80%',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    form: {
      width: '100%',
    },
  }),
);

interface EditReservationFormProps {
  reservation: Reservation;
}

export const EditReservationForm: React.FC<EditReservationFormProps> = ({ reservation }: EditReservationFormProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const formik = useFormik<FormData>({
    initialValues: {
      ...reservation,
    },
    onSubmit: (values) => {
      dispatch(editReservation({ ...values, id: reservation.id }));
      history.push('/');
    },
    validationSchema: formSchema,
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Grid container direction='column' justify='center' alignItems='center'>
        <TextField
          name='name'
          label='Name'
          value={formik.values.name}
          onChange={formik.handleChange}
          color='secondary'
          variant='outlined'
          className={classes.input}
          error={!!formik.errors.name}
          helperText={formik.errors?.name}
        />
        <KeyboardDateTimePicker
          variant='inline'
          inputVariant='outlined'
          color='secondary'
          label='Date and Time'
          value={formik.values.date}
          onChange={(date) => formik.setFieldValue('date', date, false)}
          className={classes.input}
          format='dd/MM/yyyy HH:mm'
          error={!!formik.errors.date}
          helperText={formik.errors?.date}
          disablePast
        />
        <TextField
          name='guests'
          type='number'
          label='Number of Guests'
          value={formik.values.guests}
          onChange={formik.handleChange}
          color='secondary'
          variant='outlined'
          className={classes.input}
          error={!!formik.errors.guests}
          helperText={formik.errors?.guests}
        />
        <TextField
          name='email'
          label='Email (optional)'
          value={formik.values.email}
          onChange={formik.handleChange}
          color='secondary'
          variant='outlined'
          className={classes.input}
          error={!!formik.errors.email}
          helperText={formik.errors?.email}
        />
        <Grid container direction='row' alignItems='center' justify='space-evenly'>
          <Button variant='contained' size='large' color='default' onClick={() => history.push('/')}>
            Cancel
          </Button>
          <Button variant='contained' size='large' color='secondary' type='submit'>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
