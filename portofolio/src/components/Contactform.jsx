import React, { useState, useRef } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Envoyez formData au backend ou traitez-le comme vous le souhaitez
    console.log('Données soumises :', formData);
  };
  const contactFormRef = useRef();

  return (
<div ref={contactFormRef}>      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="sujet">Sujet :</label>
          <input
            type="text"
            id="sujet"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
