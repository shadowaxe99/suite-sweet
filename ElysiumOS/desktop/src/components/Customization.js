
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssistant } from '../redux/actions';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const CustomizationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  personality: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  accent: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Customization = () => {
  const dispatch = useDispatch();
  const assistant = useSelector(state => state.assistant);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(updateAssistant(values));
    setSuccess(true);
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Customize Your Assistant</h1>
      <Formik
        initialValues={assistant}
        validationSchema={CustomizationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="personality" />
            {errors.personality && touched.personality ? <div>{errors.personality}</div> : null}
            <Field name="accent" />
            {errors.accent && touched.accent ? <div>{errors.accent}</div> : null}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {success && <div>Assistant updated successfully!</div>}
    </div>
  );
};

export default Customization;
