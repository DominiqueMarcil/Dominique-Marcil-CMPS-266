import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const formDataObj = {};
      for (let [key, value] of formData.entries()) {
        formDataObj[key] = value;
      }

      emailjs
        .sendForm('service_hhvigdi', 'template_e090hdn', formDataObj, {
          publicKey: '7vGvj0RHC4zrJvXu2',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            document.getElementById('status').innerText = 'Message sent successfully!';
            document.getElementById('status').style.color = 'green';
          },
          (error) => {
            console.log('FAILED...', error.text);
            document.getElementById('status').innerText = 'Failed to send message.';
            document.getElementById('status').style.color = 'red';
          },
        );
    }
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <h5>Contact Us</h5>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="from_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="from_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Send</button>
        <div id="status"></div>
      </form>
    </div>
  );
};