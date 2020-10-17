import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import { TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core'

import Input from '../../components/Input'

import styles from './ContactForm.module.scss'

import { ContactValidationSchema } from './contactValidationSchema'

interface IContactFormProps {
  onSubmitCallback: () => void
}

interface IContactForm {
  firstName: string
  lastName: string
  address: string
  postalCode: string
  city: string
  email: string
  phone: string
  subject: string
  message: string
  offerte: boolean
}

const initialValues: IContactForm = {
  firstName: '',
  lastName: '',
  address: '',
  postalCode: '',
  city: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  offerte: false,
}

const ContactForm: React.FC<IContactFormProps | any> = ({ onSubmitCallback }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactValidationSchema}
      onSubmit={(values, actions) => {
        onSubmitCallback(values)
        actions.resetForm()
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting, dirty, touched, errors }) => (
        <Form id="contact">
          <div className={styles['contact-form']}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <Field
                    as={TextField}
                    name="firstName"
                    label="Voornaam*"
                    className="mb-3"
                    fullWidth
                    helperText={touched.firstName && errors.firstName}
                    FormHelperTextProps={{ className: 'text-danger' }}
                  />
                </div>
                <div className="col-sm-6">
                  <Field
                    as={TextField}
                    name="lastName"
                    label="Achternaam*"
                    className="mb-3"
                    fullWidth
                    helperText={touched.lastName && errors.lastName}
                    FormHelperTextProps={{ className: 'text-danger' }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Field as={TextField} name="address" label="Adres + Huisnummer" className="mb-3" fullWidth />
                </div>
                <div className="col-sm-4">
                  <Field as={TextField} name="postalCode" label="Postcode" className="mb-3" fullWidth />
                </div>
                <div className="col-sm-2">
                  <Field as={TextField} name="city" label="Woonplaats" className="mb-3" fullWidth />
                </div>
              </div>
              <Field
                as={TextField}
                name="email"
                label="E-mailadress*"
                className="mb-3"
                fullWidth
                helperText={touched.email && errors.email}
                FormHelperTextProps={{ className: 'text-danger' }}
              />
              <Field
                as={TextField}
                name="phone"
                label="Telefoonnummer*"
                className="mb-3"
                fullWidth
                helperText={touched.phone && errors.phone}
                FormHelperTextProps={{ className: 'text-danger' }}
              />
              <Field component={TextField} name="subject" label="Onderwerp" className="mb-3" fullWidth />
              <Field
                as={TextField}
                multiline
                rows={8}
                name="message"
                label="Uw Bericht*"
                className="mb-3"
                fullWidth
                helperText={touched.message && errors.message}
                FormHelperTextProps={{ className: 'text-danger' }}
              />
              <FormControlLabel
                control={<Field as={Checkbox} color="primary" name="offerte" />}
                label="Offerte gewenst"
              />
              <Button variant="contained" color="primary" type="submit" className="float-right">
                {isSubmitting ? 'Laden...' : 'Verzenden'}
              </Button>{' '}
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
