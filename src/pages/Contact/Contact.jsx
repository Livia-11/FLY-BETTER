import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = (e) => {
    e.preventDefault();
    const data = { name, email, message };

    axios({
      method: 'POST',
      url: 'https://flybetter-1.onrender.com/create',
      data: data
    })
      .then(() => {
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <>
      <section className='sub-contact'>
        <div>
          <h1>Contact Us</h1>
        </div>
      </section>
      
      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2613478146795!2d29.512365774725023!3d-1.600721098384363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcf9d0b19e6ea9%3A0x3ff8eddb2e77ab88!2sRwanda%20Coding%20Academy!5e0!3m2!1sen!2srw!4v1704280909191!5m2!1sen!2srw"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa-solid fa-house"></i>
              <span>
                <h5>Nyabihu RN4, Ruhengeri-Gisenyi Rd, Mukamira</h5>
                <p>Nyabihu, Rwanda</p>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <span>
                <h5>+250 78_ ___ ___</h5>
                <p>
                  We are at your service 24/7. For customer inquiries, assistance,
                  and support, our dedicated team is available from Monday to
                  Saturday, 6:00 AM to 9:00 PM
                </p>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <span>
                <h5>customerservice@flybetter.com</h5>
                <p>Email us with your query</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form onSubmit={sendMail}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email_address">Email</label>
              <input
                type="email"
                id="email_address"
                placeholder="Enter email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="message">Message</label>
              <textarea
                rows="8"
                id="message"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="hero-btn red-btn"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
