import React from 'react'
// import PropTypes from 'prop-types'
// import styles from './Banner.module.scss'

export interface IBannerProps {}

const Banner: React.FC<IBannerProps> = () => {
  return (
    <div className="alert alert-info" role="alert">
      A simple info alert—check it out!
    </div>
  )
}

Banner.propTypes = {}

export default Banner
