import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <div className="container">
        <section className="section-about">
          <h1 className="section__title">About Me</h1>
          <div className="section__content">
            <img src="assets/images/profile.png"></img>
            <p>
              Hey there, I'm Chris Malilay. I'm a three year undergraduate student at The University of Texas currently taking time off to pursue web development. Since I was young, I've always had that soft spot and interest in web development. I expressed a lot of my creativity messing around with web design and gradually moved towards learning how to publish some of the ideas I had over the years as a hobby.
            </p>
            <br></br>
            <p>
              Some of my other hobbies include video games, piano, and basketball. I'm also very interested in PCs, having built my own and for some of my friends and always keeping up to date with the tech industry. I also used to compete at the highest collegiate level for the game Rocket League and played in tournaments representing The University of Texas.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
