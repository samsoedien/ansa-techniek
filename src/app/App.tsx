import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import PropTypes from 'prop-types'
import styles from './App.module.scss'

import About from './features/About'
import Contact from './features/Contact'

import Header from './templates/Header'
import Footer from './templates/Footer'
import Page from './templates/Page'

export interface IAppProps {}

const App: React.FC<IAppProps> = () => (
  <Router>
    {/* <div className={styles.App}> */}
    <Header />
    <About />
    <Contact />
    <Footer />
    {/* <Page>
        <main>
          <h3>OVER ANSA-TECHNIEK</h3>
          <p>
            Ansa-Techniek heeft ruim 30 jaar ervaring in de installatietechniek en werkt veel samen met andere
            ZZP&apos;ers. Wij worden veel ingehuurd door andere installatiebedrijven. Ansa-techniek beschikt over
            materialen van een hoge kwaliteit om elke klus uit te voeren. Heeft u een probleem met uw elektrische
            installatie, wilt u een aanpassing vanwege een verbouwing of heeft u behoefte aan een uitbreiding van uw
            groepenkast? Dan bent u bij Ansa-techniek op het goede adres. Als een klant contact opneemt met
            Ansa-Techniek vinden wij het belangrijk dat hij of zij alle aandacht krijgt en goed geholpen wordt. Of het
            om een kleine of grote klus gaat, is de prijs- en kwaliteitsverhouding zeer belangrijk voor ons en zorgen
            wij ervoor een uitstekende service te verlenen waar wij beiden tevreden over kunnen zijn.
          </p>
        </main>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Page>
    </div> */}
  </Router>
)

App.propTypes = {}

export default App
