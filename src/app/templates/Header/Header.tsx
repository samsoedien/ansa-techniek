import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Header.module.scss'

import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import HeroBanner from '../../components/HeroBanner'

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={styles.header}>
      {/* <Banner /> */}
      {/* <Navbar /> */}
      <HeroBanner />
    </header>
  )
}

Header.propTypes = {}

export default Header
