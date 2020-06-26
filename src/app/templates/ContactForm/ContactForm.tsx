import React from 'react'
// import PropTypes from 'prop-types'
// import styles from './ContactForm.module.scss'

export interface IContactFormProps {}

const ContactForm: React.FC<IContactFormProps> = () => {
  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="name">Voornaam*</label>
              <input type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="surname">Achternaam*</label>
              <input type="name" className="form-control" id="surname" aria-describedby="emailHelp" placeholder="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <div className="form-group">
              <label htmlFor="name">Adress + Huisnummer</label>
              <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
              <label htmlFor="name">Postcode</label>
              <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="" />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="name">Woonplaats</label>
              <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="name">E-mailadres*</label>
            <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="" />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="name">Telefoonnummer*</label>
            <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="" />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="name">Uw bericht*</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={6}></textarea>
          </div>
        </div>

        <div className="row">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Offerte Gewenst
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Voorkeur datum uitvoering gewenst
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary float-right">
          Submit
        </button>
      </div>
    </form>
  )
}

ContactForm.propTypes = {}

export default ContactForm
