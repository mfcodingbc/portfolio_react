import React from 'react';

const Hero = () => {
  return (
    <section className='hero'>
      <img
        src={
          require('../../assets/images/mitchell-frey-sydney-profile-photo.jpg')
            .default
        }
        alt='Mitchell Frey flashing a peace sign with his hand in front of the Sydney Harbor and the Sydney Opera Theatre'
      />
      <div className='hero-text'>
        <p>Hello World!</p>
      </div>
    </section>
  );
};

export default Hero;
