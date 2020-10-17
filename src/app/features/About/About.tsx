import React from 'react'
import PropTypes from 'prop-types'
import styles from './About.module.scss'

export interface IAboutProps {}

const About: React.FC<IAboutProps> = () => {
  return (
    <div className={styles['about']} id="about">
      <div className="container">
        <div className="row">
          <h3 className={styles['heading']}>Over Ons</h3>
          <p>
            Ansa-Techniek heeft ruim 30 jaar ervaring in de installatietechniek en werkt veel samen met andere ZZP'ers.
            Wij worden veel ingehuurd door andere installatiebedrijven. Ansa-techniek beschikt over materialen van een
            hoge kwaliteit om elke klus uit te voeren.
          </p>
          <p>
            Heeft u een probleem met uw elektrische installatie, wilt u een aanpassing vanwege een verbouwing of heeft u
            behoefte aan een uitbreiding van uw groepenkast? Dan bent u bij Ansa-techniek op het goede adres.
          </p>
          <p>
            Als een klant contact opneemt met Ansa-Techniek vinden wij het belangrijk dat hij of zij alle aandacht
            krijgt en goed geholpen wordt. Of het om een kleine of grote klus gaat, is de prijs- en kwaliteitsverhouding
            zeer belangrijk voor ons en zorgen wij ervoor een uitstekende service te verlenen waar wij beiden tevreden
            over kunnen zijn.
          </p>
        </div>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
