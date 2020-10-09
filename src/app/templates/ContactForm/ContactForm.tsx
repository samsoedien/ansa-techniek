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
        <Form id="contact">
          <div className={styles['contact-form']}>
            <div className="container">
              <div className="row">
                <h3>Contact</h3>
                <p>
                  Bij een aanvraag van een offerte wordt er eerst de juiste informatie verzamelt over hoe een opdracht
                  uitgevoerd moet worden. Dit wordt gedaan om zo goed mogelijk aan uw wensen te voldoen, u duidelijk te
                  adviseren en elkaar niet achteraf te verassen met onvoorziende extra kosten. In de meeste gevallen
                  maken wij een afspraak om het werk op te nemen en te bespreken. We nodigen u uit om contact op te
                  nemen voor een vrijblijvende offerte met een geldigheid van 30 dagen.
                </p>
                <p>
                  Heeft u een klus of storing kunt u het onderstaande contact formulier invullen. Ook voor vragen kunt u
                  hiermee contact met ons opnemen.
                </p>

                <div className="col-sm-6">
                  <Field
                    component={TextField}
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
                    component={TextField}
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
                FormHelperTextProps={{ className: 'text-danger' }}
              />
              <Field
                component={TextField}
                name="phone"
                label="Telefoonnummer*"
                className="mb-3"
                fullWidth
                helperText={touched.phone && errors.phone}
                FormHelperTextProps={{ className: 'text-danger' }}
              />
              <Field component={TextField} name="subject" label="Onderwerp" className="mb-3" fullWidth />
              <Field
                component={TextField}
                name="message"
                label="Uw Bericht*"
                className="mb-3"
                fullWidth
                helperText={touched.message && errors.message}
                FormHelperTextProps={{ className: 'text-danger' }}
              />
              <button type="submit" className="btn btn-primary float-right" disabled={isSubmitting}>
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
