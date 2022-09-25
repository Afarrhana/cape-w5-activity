import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './navigation';

export const Main = () => {
  let navigate = useNavigate();

  return (
    <div className='justify-center' >
      <Navigation />
      <h1>Tasks & Activities of Week 5</h1>

      <h3><a href="https://afa-cv01.w3spaces.com/">By Ain Farrhana Adnan</a></h3>

      <h4>Introduction</h4>
      <div>
        <p align="justify">Assalamualaikum wbt, I'm Ain Farrhana Binti Adnan. I'm a Web-Based System Development
          student. Currently, I am a student of Bachelor's Degree Information Systems Engineering at
          UiTM Jasin. On this webpage, I would like to show all the tasks and challenges that I have
          already worked on during the workshop. The following tasks and challenges might not be
          displayed, but there are some of them. Since there are a variety of languages used, such as
          node.js and HTML, I wasn't able to display all of them together. So, this is a little task and
          challenge that I'm able to display to you.
        </p>
      </div>
      {/* <h4>List of Exercises</h4>
      <p>
        - Exercise 1<br />
        - Exercise 2<br />
        - Exercise 3<br />
        - Exercise 4<br />
        - Exercise 5<br />
        - Exercise 6<br />
        - Exercise 7<br />
        - Exercise 8<br />
      </p>
      <h4>List of Challenges</h4>
      <p>
        - Challenge 1<br />
        - Challenge 2<br />
        - Challenge 3<br />
      </p> */}
    </div>
  );
}
