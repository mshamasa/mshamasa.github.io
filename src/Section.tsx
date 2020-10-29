import React from 'react';

interface ISection {
  title: string;
  date: string;
  text: Array<string>;
}

export default function Section(props: ISection): React.ReactElement {
  const { title, date, text } = props;

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
