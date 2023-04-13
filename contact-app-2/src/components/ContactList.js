import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = props => {
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className='ui violet button'>Add Contact</button>
      </Link>
      <div className='ui celled list'>
        {props.contacts.map(contact => <ContactCard key={contact.id} contact={contact} clickHandler={ id => props.getContactID(id) } />)}
      </div>
    </div>
  )
}

export default ContactList