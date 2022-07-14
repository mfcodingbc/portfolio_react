import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my Resume
        <a href='https://docs.google.com/document/d/1Iv2vInIXRKVNE5JjlPrSoKpfdT7KH1gRh8oRjUDj1pE/edit?usp=sharing'>
          here
        </a>
      </p>
      <br></br>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <br></br>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>ApolloServer</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
};

export default Resume;
