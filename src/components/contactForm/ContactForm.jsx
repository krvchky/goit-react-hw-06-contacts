import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from "./ContactForm.module.css";
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const idGenerator = useId();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be max 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d+$/, 'Number must be digits only')
      .min(3, 'Number must be at least 3 digits')
      .max(50, 'Number must be max 50 digits')
      .required('Number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          ...values,
          id: idGenerator,
        };

        dispatch(addContact(newContact));
        resetForm();
      }}
    >
      {({ touched, errors }) => (
        <Form className={style.contactForm}>
          <div className={style.formItem}>
            <label className={style.formLabel} htmlFor="name">Name</label>
            <Field
              id="name"
              type="text"
              name="name"
              className={`${style.formInput} ${touched.name && errors.name ? style.errorInput : ''}`}
              placeholder="name"
            />
            <ErrorMessage name="name" component="div" className={style.error} />
          </div>

          <div className={style.formItem}>
            <label className={style.formLabel} htmlFor="number">Number</label>
            <Field
              id="number"
              type="text"
              name="number"
              className={`${style.formInput} ${touched.number && errors.number ? style.errorInput : ''}`}
              placeholder="number"
            />
            <ErrorMessage name="number" component="div" className={style.error} />
          </div>

          <div className={style.formItem}>
            <button type="submit" className={style.formButton}>
              Add contact
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
