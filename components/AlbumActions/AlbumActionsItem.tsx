import { IActions } from '@/@types';
import React from 'react';

export default function AlbumActionsItem({ img, value }: IActions) {
  return (
    <li className="album__actions-item">
      {img}
      {value}
    </li>
  );
}
