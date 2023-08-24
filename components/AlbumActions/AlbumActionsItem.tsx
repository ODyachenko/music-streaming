import { FC } from 'react';
import { IActions } from '@/@types';

export const AlbumActionsItem: FC<IActions> = ({ img, value }) => {
  return (
    <li className="album__actions-item">
      {img}
      {value}
    </li>
  );
};
