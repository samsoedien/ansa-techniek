import React from 'react'
import PropTypes from 'prop-types'
// import styles from './Page.module.scss'

export interface IPageProps {
  children: React.ReactNode
}

const Page: React.FC<IPageProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">{children}</div>
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
