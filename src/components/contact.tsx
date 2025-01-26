import React from 'react';
import '../style/contact.css';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
      <div className="contact">
        <div className="heading3">CONTACT ME</div>
      
        <div className="cover">
          {/* Left side - Contact Form */}
          <div className="details">
            <form>
              <div className="name">
                <label htmlFor="name">Enter Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  aria-label="Enter your name"
                />
              </div>

              <div className="email">
                <label htmlFor="email">Enter Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  required
                  aria-label="Enter your email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>

              <div className="message">
                <label htmlFor="message">Leave Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                  aria-label="Leave your message"
                />
              </div>

              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>

          {/* Right side - Profile Picture */}
          <div className="picture">
            <Image
              src='/images/rahat.jpg'
              alt='Profile Image of Rahat'
              width={300}
              height={250}
              className='design1'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
