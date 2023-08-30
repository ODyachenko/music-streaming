'use client';
import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const ReleasesSkelleton: FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={135}
      height={187}
      viewBox="0 0 135 187"
      backgroundColor="#33373b"
      foregroundColor="#f2f2f2"
      {...props}
    >
      <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="0" rx="15" ry="15" width="135" height="135" />
      <rect x="0" y="149" rx="0" ry="0" width="110" height="20" />
      <rect x="0" y="178" rx="0" ry="0" width="120" height="16" />
    </ContentLoader>
  );
};
