import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const Skelleton: FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={390}
      height={68}
      viewBox="0 0 390 68"
      backgroundColor="#33373b"
      foregroundColor="#f2f2f2"
      {...props}
    >
      <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="0" rx="0" ry="0" width="63" height="63" />
      <rect x="78" y="0" rx="0" ry="0" width="60" height="15" />
      <rect x="78" y="24" rx="0" ry="0" width="110" height="14" />
      <rect x="78" y="46" rx="0" ry="0" width="120" height="15" />
    </ContentLoader>
  );
};
