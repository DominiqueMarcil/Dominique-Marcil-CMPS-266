import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
    
    export const ContactUs = () => {
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_hhvigdi', 'template_e090hdn', form.current, {
            publicKey: '3paMIOPOwV2E7vtkZ',
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
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
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
