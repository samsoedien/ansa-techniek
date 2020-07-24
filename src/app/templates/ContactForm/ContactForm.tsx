import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
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
      {(props) => (
        <Form>
          <div className={styles['contact-form']}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <TextField name="firstName" label="Voornaam*" className="mb-3" fullWidth />
                </div>
                <div className="col-sm-6">
                  <TextField name="lastName" label="Achternaam*" className="mb-3" fullWidth />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <TextField name="address" label="Adres + Huisnummer" className="mb-3" fullWidth />
                </div>
                <div className="col-sm-4">
                  <TextField name="postalCode" label="Postcode" className="mb-3" fullWidth />
                </div>
                <div className="col-sm-2">
                  <TextField name="city" label="Woonplaats" className="mb-3" fullWidth />
                </div>
              </div>
              <TextField name="email" label="E-mailadress*" className="mb-3" fullWidth />
              <TextField name="phone" label="Telefoonnummer*" className="mb-3" fullWidth />
              <TextField name="subject" label="Onderwerp" className="mb-3" fullWidth />
              <TextField name="message" label="Uw Bericht*" className="mb-3" fullWidth />
              <button
                type="submit"
                className="btn btn-primary float-right"
                disabled={props.isSubmitting || !props.dirty}
              >
                {props.isSubmitting ? 'Laden...' : 'Verzenden'}
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
  isSubmitting: PropTypes.func.isRequired,
}

export default ContactForm
