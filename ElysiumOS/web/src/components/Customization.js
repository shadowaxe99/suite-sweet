
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { updateCustomization } from '../redux/actions';
import { Button, Container, Row, Col } from 'react-bootstrap';

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
  const customization = useSelector(state => state.customization);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values) => {
    dispatch(updateCustomization(values));
    setSubmitted(true);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Customization</h1>
          <Formik
            initialValues={customization}
            validationSchema={CustomizationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <label>Name</label>
                  <Field name="name" />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label>Personality</label>
                  <Field name="personality" />
                  {errors.personality && touched.personality ? (
                    <div>{errors.personality}</div>
                  ) : null}
                </div>
                <div>
                  <label>Accent</label>
                  <Field name="accent" />
                  {errors.accent && touched.accent ? (
                    <div>{errors.accent}</div>
                  ) : null}
                </div>
                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
          {submitted && <p>Customization updated!</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default Customization;
