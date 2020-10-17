import React from 'react'
import PropTypes from 'prop-types'
import styles from './Alert.module.scss'

export interface IAlertProps {
  children: React.ReactNode
}

const Alert: React.FC<IAlertProps> = ({ children }) => {
  return <div className={styles['alert']}>{children}</div>
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Alert
