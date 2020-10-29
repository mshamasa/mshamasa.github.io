import React from 'react';

import HomeIcon from './Icons/HomeIcon';
import TwitterIcon from './Icons/TwitterIcon';
import LinkedInIcon from './Icons/LinkedInIcon';
import GithubIcon from './Icons/GithubIcon';

export default function AboutMe(): React.ReactElement {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="about-me-details">
        <span>Mike Shamasa</span>
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/San+Francisco,+CA"
          >
            <HomeIcon />
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/mshamasa"
          >
            <TwitterIcon />
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mshamasa"
          >
            <LinkedInIcon />
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.github.com/mshamasa"
          >
            <GithubIcon />
          </a>
        </span>
      </div>
    </div>
  );
}
