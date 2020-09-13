import React from 'react'
// import PropTypes from 'prop-types'
import styles from './HeroBanner.module.scss'

import * as BACKGROUND_IMG from '../../../assets/img/electrician-3087536.jpg'

export interface IHeroBannerProps {}

const HeroBanner: React.FC<IHeroBannerProps> = () => {
  return (
    <div className={styles['hero-banner']} id="home">
      <div className={styles['hero-banner__image']} style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}>
        <div className={styles['hero-banner__overlay']}>
          <h2 className={styles['hero-banner__heading']}>Welkom bij Ansa-Techniek</h2>
          <p className={styles['hero-banner__subheading']}>
           De website is tijdelijk niet beschikbaar.<br /> 
           Neem contact met ons op door te mailen naar <a href="mailto:info@ansa-techniek.nl" className={styles['temp-link']}>info@ansa-techniek.nl</a>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

HeroBanner.propTypes = {}

export default HeroBanner
