import './contact.css';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        'service_q4pku8h',
        'template_xpiremr',
        formRef.current,
        'gITPMVNjdvQSdW42J'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true); // Move the setMessage inside the success callback
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond ASAP if a valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>subhrantanayak6535@gmail.com</h5>
            <a href="mailto:subhrantanayak6535@gmail.com">Send a message</a>
          </article>
        </div>
       {!message ? (
  <form ref={formRef} onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Your Full Name"
      name="user_name"
      required
    />
    <input
      type="email"
      placeholder="Your Email"
      name="user_email"
      required
    />
    <textarea
      placeholder="Your message"
      rows="7"
      name="message"
      required
    ></textarea>
    <button type="submit" className="btn btn-primary">
      Send Message
    </button>
  </form>
) : (
  <h4 style={{ marginTop: "2rem" }}>Thank you! I will reach out soon 🙂</h4>
)}


      </div>
    </section>
  );
};

export default Contact;
