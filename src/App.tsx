import React, { ReactElement, useState, useEffect } from 'react';

import Section, { ISection } from './Section';
import AboutMe from './AboutMe';

import './App.css';

async function fetchData() {
  const res = await fetch(
    'https://blog-function.azurewebsites.net/api/BlogTrigger'
  );
  return res.json();
}

interface IApp {
  articles: Array<ISection>;
  loading: boolean;
}

function App({ articles = [], loading = true }: IApp): ReactElement {
  const [data, setData] = useState({ articles, loading });

  useEffect(() => {
    fetchData().then((d) => setData({ articles: d, loading: false }));
  });

  return (
    <div className="container">
      <AboutMe />
      <div className={`sections ${data.loading ? 'loading' : ''}`}>
        {data.loading && <div>Loading...</div>}
        {!data.loading &&
          data.articles.map((s) => (
            <Section
              key={s.title}
              title={s.title}
              date={s.date}
              text={s.text}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
