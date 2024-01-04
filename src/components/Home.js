// components/Home.js
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>
        I'm passionate about coding and have worked on various projects. Here's
        a brief overview:
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/your-username/project1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project 1
          </a>
        </li>
        <li>
          <a
            href="https://github.com/your-username/project2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
