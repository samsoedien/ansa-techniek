import React from 'react'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { SubmitFormThunkActionCreator } from '../../../store/formsSlice'
import ContactForm from '../../templates/ContactForm'

export interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  const dispatch = useDispatch()
  const onSubmitCallback = (values: object): void => {
    dispatch(SubmitFormThunkActionCreator(values))
  }

  return <ContactForm onSubmitCallback={onSubmitCallback} />
}

Contact.propTypes = {}

export default Contact
