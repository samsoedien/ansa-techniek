import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import { TextField } from '@material-ui/core'

import styles from './ContactForm.module.scss'

import { contactValidationSchema } from './contactValidationSchema'

interface IContactFormProps {
  onSubmitCallback: () => void
}

const ContactForm: React.FC<IContactFormProps | any> = ({ onSubmitCallback }) => {
  return (
    <Formik
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmitCallback(values)
        resetForm()
        setSubmitting(false)
      }}
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }}
      validationSchema={contactValidationSchema}
    >
      {({ isSubmitting, dirty, touched, errors }) => (
        <Form>
          <div className={styles['contact-form']}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <Field
                    component={TextField}
                    name="firstName"
                    label="Voornaam*"
                    className="mb-3"
                    fullWidth
                    helperText={touched.firstName && errors.firstName}
                  />
                </div>
                <div className="col-sm-6">
                  <Field
                    component={TextField}
                    label="Achternaam*"
                    className="mb-3"
                    fullWidth
                    helperText={touched.lastName && errors.lastName}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Field component={TextField} name="address" label="Adres + Huisnummer" className="mb-3" fullWidth />
                </div>
                <div className="col-sm-4">
                  <Field component={TextField} name="postalCode" label="Postcode" className="mb-3" fullWidth />
                </div>
                <div className="col-sm-2">
                  <Field component={TextField} name="city" label="Woonplaats" className="mb-3" fullWidth />
                </div>
              </div>
              <Field
                component={TextField}
                name="email"
                label="E-mailadress*"
                className="mb-3"
                fullWidth
                helperText={touched.email && errors.email}
              />
              <Field
                component={TextField}
                name="phone"
                label="Telefoonnummer*"
                className="mb-3"
                fullWidth
                helperText={touched.phone && errors.phone}
              />
              <Field component={TextField} name="subject" label="Onderwerp" className="mb-3" fullWidth />
              <Field
                component={TextField}
                name="message"
                label="Uw Bericht*"
                className="mb-3"
                fullWidth
                helperText={touched.message && errors.message}
              />
              <button type="submit" className="btn btn-primary float-right" disabled={isSubmitting || !dirty}>
                {isSubmitting ? 'Laden...' : 'Verzenden'}
              </button>{' '}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

ContactForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
}

export default ContactForm
