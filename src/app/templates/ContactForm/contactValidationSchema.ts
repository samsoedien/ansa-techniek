import * as Yup from 'yup'

export const ContactValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Het invullen van uw voornaam is verplicht'),
  lastName: Yup.string().required('Het invullen van uw achternaam is verplicht'),
  email: Yup.string().email('Dit is geen geldig e-mailadres').required('Het invullen van uw email is verplicht'),
  phone: Yup.string().required('Het invullen van uw telefoonnummer is verplicht'),
  message: Yup.string()
    .min(24, 'Uw bericht moet minimaal 24 karakters bevatten')
    .max(1024, 'Uw bericht kan niet meer dan 1024 karakters bevatten')
    .required('Het invullen van uw bericht is verplicht'),
})

export default ContactValidationSchema
