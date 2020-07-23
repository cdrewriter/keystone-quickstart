import React from 'react';

export const createReactComponent = (name, element, className) => {
  const Component = props => {
    return React.createElement(element, {
      ...props,
      className,
    });
  };

  Component.displayName = name;

  return Component;
};
