import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
    
    export const ContactUs = () => {
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_hhvigdi', 'template_e090hdn', form.current, {
            publicKey: '7vGvj0RHC4zrJvXu2',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
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












// Contact Form
// Initialize EmailJS
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get the form data
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     // Send the email
//     emailjs.send('service_hhvigdi', 'template_e090hdn', {
//         from_name: name,
//         from_email: email,
//         message: message
//     })
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         document.getElementById('status').innerText = 'Message sent successfully!';
//         document.getElementById('status').style.color = 'green';
//     }, function(error) {
//         console.log('FAILED...', error);
//         document.getElementById('status').innerText = 'Failed to send message.';
//         document.getElementById('status').style.color = 'red';
//     });

//     // Clear the form
//     document.getElementById('contact-form').reset();
// });
