import React from 'react'
// import PropTypes from 'prop-types'
// import styles from './Navbar.module.scss'

export interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Ansa-Techniek
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                Over Ons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
