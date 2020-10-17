import React from 'react'
// import PropTypes from 'prop-types';
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h5 className={styles['heading']}>Contactgegevens</h5>
            <p>André Samsoedien</p>
            <p>+31 (0)6 37 36 28 17</p>
            <p>info@ansa-techniek.nl</p>
          </div>
          {/* <div className="col-sm-6">
            <div className={styles['footer__copyright']}>
              <p>&copy; {new Date().getFullYear()}, Ansa-Techniek. All rights reserved.</p>
              <p>Website created by Samsoedien Design</p>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
