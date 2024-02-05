import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {typeof item === 'object' ? (
              // If item is an object, display its properties
              <div>
                {Object.values(item).map((value, i) => (
                  <span key={i}>{value} </span>
                ))}
              </div>
            ) : (
              // If item is not an object, display it as is
              <div>{item}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
