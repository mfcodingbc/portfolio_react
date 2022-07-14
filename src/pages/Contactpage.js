import React from 'react';

import Contact from '../components/Contact';

const Contactpage = () => {
  return (
    <section>
      <Contact />
      <br></br>
      <div className='section-contact' id='contacts'>
        <a href='mailto:mfcodingbootcamp@gmail.com'>Email Me!</a>
        <a href='https://github.com/mfcodingbc'>Check Out My GitHub!</a>
        <a href='https://www.linkedin.com/in/mitchellfrey/'>
          Look at My LinkedIn!
        </a>
      </div>
    </section>
  );
};

export default Contactpage;
