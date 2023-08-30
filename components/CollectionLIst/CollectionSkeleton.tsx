import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const CollectionSkeleton: FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={183}
      height={240}
      viewBox="0 0 183 240"
      backgroundColor="#33373b"
      foregroundColor="#f2f2f2"
      {...props}
    >
      <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="0" rx="20" ry="20" width="183" height="183" />
      <rect x="0" y="193" rx="0" ry="0" width="160" height="21" />
      <rect x="0" y="219" rx="0" ry="0" width="105" height="16" />
    </ContentLoader>
  );
};
