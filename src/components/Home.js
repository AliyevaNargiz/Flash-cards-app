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
            href="https://aliyevanargiz.github.io/portfolio/"
            target="_blank"
            rel="Personal Portfolio"
          >
            Project 1
          </a>
        </li>
        <li>
          <a
            href="https://aliyevanargiz.github.io/assignment2-api-WaM/"
            target="_blank"
            rel="Fetchin Data from Dummy Api"
          >
            Project 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
