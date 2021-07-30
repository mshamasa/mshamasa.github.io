import React, { ReactElement, useState, useEffect } from 'react';

import Section, { ISection } from './Section';
import AboutMe from './AboutMe';
import Loading from './Loading';
import data from './blog_data.json';

import './App.css';

type Data = Array<ISection>;

async function fetchData(): Promise<Data> {
  return Promise.resolve(data.data);
}

interface IApp {
  articles: Data;
  loading: boolean;
}

function App({ articles = [], loading = true }: IApp): ReactElement {
  const [data, setData] = useState({ articles, loading });

  useEffect(() => {
    fetchData().then((data) => {
      setData({ articles: data, loading: false });
    });
  }, []);

  return (
    <div className="container">
      <AboutMe />
      <div className={`sections ${data.loading ? 'loading' : ''}`}>
        {data.loading && <Loading />}
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
