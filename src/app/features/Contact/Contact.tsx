import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './Contact.module.scss'

import ContactForm from '../../templates/ContactForm'
import Alert from '../../components/Alert'

export interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  const [formSubmitConfirmation, setFormSubmitConfirmation] = useState<boolean>(false)

  // const dispatch = useDispatch()
  const onSubmitCallback = async (formData: object) => {
    // dispatch(SubmitFormThunkActionCreator(formData))
    console.log(formData)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios.post('https://us-central1-ansa-techniek.cloudfunctions.net/contact', formData, config)

    setFormSubmitConfirmation(true)
  }

  return (
    <>
      <div className={styles['contact']}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className={styles['heading']}>Contact</h3>
              <p>
                Bij een aanvraag van een offerte wordt er eerst de juiste informatie verzamelt over hoe een opdracht
                uitgevoerd moet worden. Dit wordt gedaan om zo goed mogelijk aan uw wensen te voldoen, u duidelijk te
                adviseren en elkaar niet achteraf te verassen met onvoorziende extra kosten. In de meeste gevallen maken
                wij een afspraak om het werk op te nemen en te bespreken. We nodigen u uit om contact op te nemen voor
                een vrijblijvende offerte met een geldigheid van 30 dagen.
              </p>
              <p>
                Heeft u een klus of storing kunt u het onderstaande contact formulier invullen. Ook voor vragen kunt u
                hiermee contact met ons opnemen.
              </p>
              {formSubmitConfirmation ?  <Alert>Bedankt voor uw bericht. We hebben uw bericht ontvangen en we nemen zo spoedig mogelijk contact op.</Alert> : <ContactForm onSubmitCallback={onSubmitCallback} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Contact.propTypes = {}

export default Contact
