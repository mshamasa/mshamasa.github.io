import React from 'react';
// eslint-disable-next-line
import ryuGif from 'assets/ryu_loading.gif';

import './Loading.css';

export default function Loading(): React.ReactElement {
  return (
    <div className="loading">
      <span className="loading-text">Loading...</span>
      <span className="loading-img">
        <img src={ryuGif} alt="Ryu kicking the shit out of loading" />
      </span>
    </div>
  );
}
