import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Werkzaamheden.module.scss'

const Werkzaamheden = () => {
  return (
    <div className={styles['werkzaamheden']}>
      <div className="container">
        <div className="row">
          <h3 className={styles['heading']}>Werkzaamheden</h3>
          <p>
            Het aanleggen van elektriciteit is vakwerk en is iets wat secuur moet gebeuren. Wij van Ansa-Techniek zijn
            bekwaam in het aanleggen of aanpassen van uw elektrische installatie.
          </p>
          <p>
            U wilt natuurlijk in alle kamers van uw woning gebruik maken van verlichting en stopcontacten. U kunt het
            natuurlijk ook zelf doen, maar dan is een beetje technische kennis wel handig. Het aanleggen van een nieuw
            stopcontact of aansluiting voor een lamp lijkt vaak niet moeilijk. Alleen moet je wel weten wat je doet,
            want niemand zit te wachten op kortsluiting of erger.
          </p>
          <p>Heeft u een vakman nodig neem dan gerust contact op met Ansa-Techniek.</p>

          <p>Meest voorkomende werkzaamheden:</p>

          <div className="col-md-6">
            <ul>
              <li>Lampen ophangen</li>
              <li>Stopcontacten bijmaken</li>
              <li>Inductiekookplaat aansluiten</li>
              <li>Groepenkast uitbreiden/vervangen</li>
              <li>Kookgroep in de groepenkast bijzetten</li>
              <li>Schakelaar vervangen</li>
              <li>Inspecties NEN 1010 & NEN 3140</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Elektra voorzieningen plaatsen voor keuken</li>
              <li>Tuin/buiten verlichting plaatsen</li>
              <li>Brandmeldinstallaties plaatsen</li>
              <li>Camera systemen plaatsen</li>
              <li>Netwerken/internet aansluiten</li>
              <li>Kabel/draad trekken</li>
              <li>Licht en kracht installaties werkzaamheden</li>
            </ul>
          </div>

          <p>Zo zijn er nog meer klussen. Alle werkzaamheden worden comfort de voorschriften uitgevoerd.</p>

          <p>
            Voor een klus rekenen wij <strong>59 euro per uur</strong> inclusief b.t.w. (ma t/m vrij). Er komen geen
            extra kosten bij zoals service -en voorijkosten (m.u.v. parkeerkosten). Materialen worden apart verrekend
            tenzij u de materialen zelf heeft geregeld. Achteraf ontvangt u een factuur.
          </p>
        </div>
      </div>
    </div>
  )
}

Werkzaamheden.propTypes = {}

export default Werkzaamheden
