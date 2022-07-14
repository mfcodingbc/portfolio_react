import React from 'react';

const Project = () => {
  return (
    <section id='project'>
      {/* MSU Coding Bootcamp Group Project 3 */}
      <div class='project-row'>
        <div class='project-content'>
          <a href='https://mfcodingbc.github.io/habit-tracker/'>
            <img
              src='./assets/images/robot-gladiators-deployed-site-screenshot'
              alt='Habit-Tracker'
            />
          </a>
          <div class='project-text'>
            <h3>Habit-Tracker</h3>
            <h4>
              React/ApolloServer/MongoDB
              <br></br>
              Collaborative Project
            </h4>
          </div>
        </div>
      </div>
      {/* MSU Coding Bootcamp Group Project 1 */}
      <div class='project-row'>
        <div class='project-content'>
          <a href='https://mfcodingbc.github.io/get-your-day-started-right/'>
            <img
              src='./assets/images/Get Your Day Started.gif'
              alt='Get Your Day Started Right!'
            />
          </a>
          <div class='project-text'>
            <h3>Get Your Day Started Right!</h3>
            <h4>
              HTML/CSS/JavaScript
              <br></br>
              Collaborative Project
            </h4>
          </div>
        </div>
      </div>
      {/* MSU Coding Bootcamp Group Project 2 */}
      <div class='project-row'>
        <div class='project-content'>
          <a href='https://github.com/mfcodingbc/vehicle-service-manager'>
            <img
              src='./assets/images/vehicle-service-manager-dashboard.png'
              alt='Vehicle Service Manager'
            />
          </a>
          <div class='project-text'>
            <h3>Vehicle Service Manager</h3>
            <h4>
              HTML/CSS/Node.js
              <br></br>
              Collaborative Project
            </h4>
          </div>
        </div>
      </div>
      {/* MSU Coding Bootcamp HTML/CSS Assignment */}
      <div class='project-row'>
        <div class='project-content'>
          <a href='https://mfcodingbc.github.io/run-buddy/'>
            <img
              src='./assets/images/run-buddy-deployed-site-screenshot.PNG'
              alt='RUN BUDDY'
            />
          </a>
          <div class='project-text'>
            <h3>RUN BUDDY</h3>
            <h4>HTML/CSS</h4>
          </div>
        </div>
      </div>
      {/* MSU Coding Bootcamp JS Assignment */}
      <div class='project-row'>
        <div class='project-content'>
          <a href='https://mfcodingbc.github.io/project-day-scheduler/'>
            <img
              src='./assets/images/project-day-scheduler-deployed-site-screenshot.PNG'
              alt='project Day Scheduler'
            />
          </a>
          <div class='project-text'>
            <h3>project Day Scheduler</h3>
            <h4>HTML/CSS/JavaScript</h4>
          </div>
        </div>
        {/* MSU Coding Bootcamp JS Assignemnt */}
        <div class='project-content'>
          <a href='https://mfcodingbc.github.io/robot-gladiators/'>
            <img
              src='./assets/images/robot-gladiators-deployed-site-screenshot.PNG'
              alt='Robot Gladiators!'
            />
          </a>
          <div class='project-text'>
            <h3>Robot Gladiators!</h3>
            <h4>JavaScript</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
