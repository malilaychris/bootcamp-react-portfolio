import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
        <div class="container">

            <section class="section-portfolio">
                <h1 class="section__title">Portfolio</h1>
                <div class="section__content">
                    <div class="portfolio-projects">
                        <a class="project" href="https://cca.michaeldoylecs.com/">
                            <img src="assets/images/portfolio-project1.png">
                            <div class="project__label">College Carball Association Website</div>
                        </a>
                        <a class="project" href="https://madhumitha.github.io/ISS-Tracker/">
                            <img src="assets/images/portfolio-project2.png">
                            <div class="project__label">ISS Tracker</div>
                        </a>
                        <a class="project" href="https://github.com/bg00/project2">
                            <img src="assets/images/portfolio-project3.jpg">
                            <div class="project__label">Runner Tracking App</div>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    </main>
  );
}

export default App;
