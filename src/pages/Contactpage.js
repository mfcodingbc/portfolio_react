import React from 'react';

import Contact from '../components/Contact';

const Contactpage = () => {
  return (
    <section class='section-contact'>
      <h2 class='section-title'>Contact Me</h2>
      <Contact />
      <div id='contacts'>
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
