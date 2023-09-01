import { FC } from 'react';

type ColletionActionsPropsType = {
  isActive: number;
  setIsActive: (value: number) => void;
};

const actions: string[] = ['My collection', 'Likes'];

export const CollectionActions: FC<ColletionActionsPropsType> = ({
  isActive,
  setIsActive,
}) => {
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
