import React from 'react';

import Section from './Section';
import AboutMe from './AboutMe';
import { data } from './blog_data.json';

import './App.css';

export default function App(): React.ReactElement {
  const sections = data.map((s) => (
    <Section key={s.title} title={s.title} date={s.date} text={s.text} />
  ));

  return (
    <div className="container">
      <AboutMe />
      <div className="sections">{sections}</div>
    </div>
  );
}
