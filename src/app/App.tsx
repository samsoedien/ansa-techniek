import React from 'react'
// import logo from './logo.svg'
// import PropTypes from 'prop-types'
import styles from './App.module.scss'

import Header from './templates/Header'
import Footer from './templates/Footer'
import Page from './templates/Page'

export interface IAppProps {}

const App: React.FC<IAppProps> = () => (
  <div className={styles.App}>
    <Header />
    <Page>
      <main>
        <h3>OVER ANSA-TECHNIEK</h3>
        <p className="text-left">
          Ansa-Techniek heeft ruim 30 jaar ervaring in de installatietechniek en werkt veel samen met andere
          ZZP&apos;ers. Wij worden veel ingehuurd door andere installatiebedrijven. Ansa-techniek beschikt over
          materialen van een hoge kwaliteit om elke klus uit te voeren. Heeft u een probleem met uw elektrische
          installatie, wilt u een aanpassing vanwege een verbouwing of heeft u behoefte aan een uitbreiding van uw
          groepenkast? Dan bent u bij Ansa-techniek op het goede adres. Als een klant contact opneemt met Ansa-Techniek
          vinden wij het belangrijk dat hij of zij alle aandacht krijgt en goed geholpen wordt. Of het om een kleine of
          grote klus gaat, is de prijs- en kwaliteitsverhouding zeer belangrijk voor ons en zorgen wij ervoor een
          uitstekende service te verlenen waar wij beiden tevreden over kunnen zijn.
        </p>
      </main>
    </Page>
    <Footer />
  </div>
)

App.propTypes = {}

export default App
