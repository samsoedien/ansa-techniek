import React from 'react'
import PropTypes from 'prop-types'

import ContactForm from '../../templates/ContactForm'

export interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  const onSubmitCallback = (values: object): void => {
    alert(JSON.stringify(values, null, 2))
  }

  return <ContactForm onSubmitCallback={onSubmitCallback} />
}

Contact.propTypes = {}

export default Contact
