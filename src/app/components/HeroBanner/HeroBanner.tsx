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
            Uw technisch vakman in het verlenen van installatietechniek aan huis.
          </p>
        </div>
      </div>
    </div>
  )
}

HeroBanner.propTypes = {}

export default HeroBanner
