import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const PlaylistSkeleton: FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={232}
      viewBox="0 0 200 232"
      backgroundColor="#33373b"
      foregroundColor="#f2f2f2"
      {...props}
    >
      <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="0" rx="20" ry="20" width="200" height="200" />
      <rect x="0" y="210" rx="0" ry="0" width="160" height="21" />
    </ContentLoader>
  );
};
