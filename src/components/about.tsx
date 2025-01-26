'use client';
import { TypeAnimation } from 'react-type-animation';
import '../style/about.css'

import React from 'react'

const About = () => {
  return (
    <section className='about-section' id='about'>
      <div className="about">
        <div className="heading"> 
          <TypeAnimation
            sequence={["ABOUT", 500, "ME..", 500]}
            style={{ fontSize: "1em" }}
            speed={40}
            repeat={Infinity}
          />
        </div>

        <div className="background">
          <p>
            I&apos;m a passionate Graphic Designer &amp; Front-End Web Developer with a keen eye for detail and a drive to create visually stunning,
            user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like React and Next.js,
            leveraging Tailwind CSS for efficient and responsive UI design.
            My expertise lies in transforming creative ideas into functional,
            high-performance websites that provide seamless user experiences across all devices.
            With a strong foundation in both design and development,
            I ensure clean, maintainable code while optimizing for performance.
            Whether it&apos;s building dynamic single-page applications or complex websites,
            I&apos;m committed to bridging the gap between design and development to bring ideas to life.
            Let&apos;s collaborate and craft something extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
