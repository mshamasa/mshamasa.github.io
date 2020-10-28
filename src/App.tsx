import React from 'react';

import Section from './Section';

import { data } from './blog_data.json';
import './App.css';

export default function App() {
  const sections = data.map((s) => <Section {...s} />);

  return (
    <div className="container">
      <section>
        <header>
          <h2>Mike Shamasa</h2>
          <p>
            Hey welcome to my cheap ass free blog. Could I have used a free
            service? Yeah, so. Anyway these are my random thoughts I would like
            to share as a software engineer, I hope it helps you.:w
          </p>
        </header>
      </section>
      {sections}
    </div>
  );
}
