import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'

interface IInputProps {
  label: string
}

const Input: React.FC<IInputProps | any> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <TextField
        label={label}
        {...field}
        {...props}
        fullWidth
        helperText={meta.touched && meta.error ? meta.error : null}
      />
    </>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Input
