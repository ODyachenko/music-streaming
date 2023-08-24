'use client';
import { FC, useState } from 'react';

const actions: string[] = ['My collection', 'Likes'];

export const CollectionActions: FC = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <ul className="collection__actions">
      {actions.map((item, index) => {
        return (
          <li
            key={item}
            onClick={() => setIsActive(index)}
            className={`collection__actions-item ${
              isActive === index ? 'active' : ''
            }`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
