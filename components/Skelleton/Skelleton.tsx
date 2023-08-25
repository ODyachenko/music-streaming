import { FC } from 'react';

export const Skelleton: FC = () => {
  return (
    <svg
      role="img"
      width="390"
      height="70"
      aria-labelledby="loading-aria"
      viewBox="0 0 390 70"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        fill='url("#fill")'
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <rect x="28" y="388" rx="8" ry="8" width="98" height="40" />
          <rect x="238" y="388" rx="8" ry="8" width="98" height="40" />
          <rect x="30" y="228" rx="8" ry="8" width="80" height="25" />
          <rect x="148" y="224" rx="8" ry="8" width="32" height="32" />
          <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
          <rect x="0" y="0" rx="0" ry="0" width="63" height="63" />
          <rect x="80" y="0" rx="0" ry="0" width="160" height="11" />
          <rect x="80" y="25" rx="0" ry="0" width="100" height="4" />
          <rect x="87" y="108" rx="0" ry="0" width="420" height="9" />
          <circle cx="369" cy="19" r="19" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f7f7f7" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1.59996" stopColor="#f2f2f2" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="2.59996" stopColor="#f7f7f7" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
