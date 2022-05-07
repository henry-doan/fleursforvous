import { MainContainer } from "../../../styles/shared";
import { useState } from 'react';

const Contact = () => {
  const { contact, setContact } = useState({ fullName: '', occasion: '', phone: '', email: '', dateNeeded: '', timeNeeded: '', colors: '', specialRequirements: '', priceRange: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault()

    setContact({ fullName: '', occasion: '', phone: '', email: '', dateNeeded: '', timeNeeded: '', colors: '', specialRequirements: '', priceRange: '' })
  }

  return (
    <MainContainer color='Black' id='Contact'>
      <h1>Contact / Get a Estimate</h1>
      <p>We offer full-service boquets for any event, large, medium or small or custom. We understand your needs and we will cater the flowers to satisfy the biggest criteria of them all.</p>
      <p>Serviced in the Great Salt Lake Area</p>
      <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input 
          type='text'
          name='fullName'
          value={contact.fullName}
          onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
          required 
          placeholder="Full Name"
        />
        <label>Occasion:</label>
        <input 
          name='occasion'
          value={contact.occasion}
          onChange={(e) => setContact({ ...contact, occasion: e.target.value })}
          required 
          placeholder="Occasion"
        />
        <label>Phone:</label>
        <input 
          type='phone'
          name='phone'
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          required 
          placeholder="Phone"
        />
        <label>Email:</label>
        <input 
          type='email'
          name='email'
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          placeholder="Email"
        />
        <label>Date Needed By:</label>
        <input 
          type='date'
          name='dateNeeded'
          value={contact.dateNeeded}
          onChange={(e) => setContact({ ...contact, dateNeeded: e.target.value })}
          required 
        />
        <label>Time Needed By:</label>
        <input 
          type='time'
          name='timeNeeded'
          value={contact.timeNeeded}
          onChange={(e) => setContact({ ...contact, timeNeeded: e.target.value })}
          required 
        />
        {/* multi select */}
        <label>Colors:</label>
        <input 
          name='colors'
          value={contact.colors}
          onChange={(e) => setContact({ ...contact, colors: e.target.value })}
          required 
          placeholder="Colors"
        />
        {/* money, price */}
        <label>Price Range:</label>
        <input 
          name='priceRange'
          value={contact.priceRange}
          onChange={(e) => setContact({ ...contact, priceRange: e.target.value })}
          required 
        />
        <label>Any Special Requirements:</label>
        <textarea 
          name='specialRequirements'
          value={contact.specialRequirements}
          onChange={(e) => setContact({ ...contact, specialRequirements: e.target.value })}
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </MainContainer>
  )
}

export default Contact;