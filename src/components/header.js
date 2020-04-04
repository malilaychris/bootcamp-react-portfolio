import React from 'react';

export default function header() {
  return (
    <header>
        <div className="container">

            <a href="index.html"><h1 className="header__logo">Chris Malilay</h1></a>
            <nav>
                <ul class="nav-listlist">
                    <li className="nav-list__item"><a href="index.html">About</a></li>
                    <li className="nav-list__item"><a href="portfolio.html">Portfolio</a></li>
                    <li className="nav-list__item"><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

        </div>
    </header>
  );
}