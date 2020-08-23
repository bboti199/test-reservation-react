import * as yup from 'yup';

export interface FormData {
  name: string;
  guests: number;
  date: Date;
  email?: string;
}

export const formSchema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  date: yup.date().required('Date is required'),
  guests: yup.number().required('Number of guests is required').moreThan(1, 'You must enter at least 1 guest'),
  email: yup.string().email('You must enter a valid email address').optional(),
});
