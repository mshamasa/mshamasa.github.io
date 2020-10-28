import React from 'react';

interface ISection {
  title: string;
  date: string;
  text: Array<string>;
}

export default function Section({ title, date, text }: ISection) {
  return (
    <section>
      <h2>{`${date} ${title}`}</h2>
      <article>
        {text.map((t: string) => (
          <p>{t}</p>
        ))}
      </article>
    </section>
  );
}
