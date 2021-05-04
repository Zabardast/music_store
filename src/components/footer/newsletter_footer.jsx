import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { newsLetterApi } from '../../services/APIservice'
import './Footer.css';

export default function Newsletter_footer(props) {
  console.log(props)
  const [contact, setEmail] = useState({email: ''})
  let history = useHistory()
  const handleChange =  (event) => {
      console.log(event)

      const value = event.currentTarget.value
      const name = event.currentTarget.name
      
      setEmail({...contact, [name]: value})
      contact.email = value

      console.log(contact.email)
      console.log(value)
  }
  const handleSubmit = async (event) => {
      event.preventDefault()
      console.log('contact !')
      //ajax
      const result = await newsLetterApi(contact)
      // console.log(result, typeof result)
      if(result && result.data) {

          history.push("/")
      }
  }

  return (
    <div className="newsletter_footer">
        <h3>news letter</h3>
        <p>be the first one to know</p>
        <form id="center_content" className="email_wrapper" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="form-control email_input" type="email" placeholder="email@email.com" name="email" value={contact.email}/>
            <button className="btn btn-secondary email_sub_button" id="lightgrey" type="submit">Valider</button>
        </form>
    </div>
  )
}
