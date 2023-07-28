import React from 'react';
import '../styles/ContactForm.css'

const ContactForm = () => {
  return (
    <form style={{ maxWidth: '400px', margin: '0 auto' }}>
    
      <label htmlFor="name">Nom :</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email :</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message :</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
