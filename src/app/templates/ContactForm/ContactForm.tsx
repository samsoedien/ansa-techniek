import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Input from '../../components/Input'

interface IContactFormProps {
  onSubmitCallback: () => void
}

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Must be at least 3 characters').max(15, 'Must be less than 15 characters').required(),
  lastName: Yup.string().min(2, 'Must be at least 3 characters').max(15, 'Must be less than 15 characters').required(),
})

const ContactForm: React.FC<IContactFormProps | any> = ({ onSubmitCallback }) => {
  return (
    <Formik
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmitCallback(values)
        resetForm()
        setSubmitting(false)
        // dispatch action alert
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
      validationSchema={ContactFormSchema}
    >
      {(props) => (
        <Form>
          <div className="container">
            <div className="row pb-3">
              <div className="col-6">
                <Input name="firstName" label="Voornaam*" />
              </div>
              <div className="col-6">
                <Input name="lastName" label="Achternaam" />
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-6">
                <Input name="address" label="Adres + Huisnummer" />
              </div>
              <div className="col-4">
                <Input name="postalCode" label="Postcode" />
              </div>
              <div className="col-2">
                <Input name="city" label="Woonplaats" />
              </div>
            </div>
            <div className="row pb-3">
              <Input name="email" label="E-mailadress*" />
            </div>
            <div className="row pb-3">
              <Input name="phone" label="Telefoonnummer*" />
            </div>
            <div className="row pb-3">
              <Input name="subject" label="Onderwerp*" />
            </div>
            <div className="row pb-3">
              <Input name="message" label="Uw Bericht*" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={props.isSubmitting || !props.dirty}>
              {props.isSubmitting ? 'Laden...' : 'Verzenden'}
            </button>{' '}
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
