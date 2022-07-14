import React from 'react';

import habitTracker from '../../assets/images/habit-tracker-deployed-site-screenshot.jpeg'
import dayStarted from '../../assets/images/Get Your Day Started.gif'
import vehicleService from '../../assets/images/vehicle-service-manager-dashboard.png'
import runBuddy from '../../assets/images/run-buddy-deployed-site-screenshot.PNG'
import dayScheduler from '../../assets/images/work-day-scheduler-deployed-site-screenshot.PNG'
import robotGladiators from '../../assets/images/robot-gladiators-deployed-site-screenshot.PNG'

const Project = () => {
  return (
    <section id='project'>
      {/* MSU Coding Bootcamp Group Project 3 */}
      <div className='project-row'>
        <div className='project-content'>
          <a href='https://mfcodingbc.github.io/habit-tracker/'>
            <img
              src={habitTracker}
              alt='Habit-Tracker'
            />
          </a>
          <div className='project-text'>
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
      <div className='project-row'>
        <div className='project-content'>
          <a href='https://mfcodingbc.github.io/get-your-day-started-right/'>
            <img
              src={dayStarted}
              alt='Get Your Day Started Right!'
            />
          </a>
          <div className='project-text'>
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
      <div className='project-row'>
        <div className='project-content'>
          <a href='https://github.com/mfcodingbc/vehicle-service-manager'>
            <img
              src={vehicleService}
              alt='Vehicle Service Manager'
            />
          </a>
          <div className='project-text'>
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
      <div className='project-row'>
        <div className='project-content'>
          <a href='https://mfcodingbc.github.io/run-buddy/'>
            <img
              src={runBuddy}
              alt='RUN BUDDY'
            />
          </a>
          <div className='project-text'>
            <h3>RUN BUDDY</h3>
            <h4>HTML/CSS</h4>
          </div>
        </div>
      </div>
      {/* MSU Coding Bootcamp JS Assignment */}
      <div className='project-row'>
        <div className='project-content'>
          <a href='https://mfcodingbc.github.io/work-day-scheduler/'>
            <img
              src={dayScheduler}
              alt='Work Day Scheduler'
            />
          </a>
          <div className='project-text'>
            <h3>Work Day Scheduler</h3>
            <h4>HTML/CSS/JavaScript</h4>
          </div>
        </div>
        {/* MSU Coding Bootcamp JS Assignemnt */}
        <div className='project-content'>
          <a href='https://mfcodingbc.github.io/robot-gladiators/'>
            <img
              src={robotGladiators}
              alt='Robot Gladiators!'
            />
          </a>
          <div className='project-text'>
            <h3>Robot Gladiators!</h3>
            <h4>JavaScript</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
