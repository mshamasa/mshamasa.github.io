import React from 'react';

import HomeIcon from './Icons/HomeIcon';
import TwitterIcon from './Icons/TwitterIcon';
import LinkedInIcon from './Icons/LinkedInIcon';
import GithubIcon from './Icons/GithubIcon';

import './AboutMe.css';

export default function AboutMe(): React.ReactElement {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="about-me-details">
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/San+Francisco,+CA"
          >
            <HomeIcon width={24} height={24} />
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/mshamasa"
          >
            <TwitterIcon width={24} height={24} />
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mshamasa"
          >
            <LinkedInIcon width={24} height={24} />
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.github.com/mshamasa"
          >
            <GithubIcon width={24} height={24} />
          </a>
        </span>
      </div>
    </div>
  );
}
