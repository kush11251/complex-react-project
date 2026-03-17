import React from 'react';
/**
 * PrimaryButton represents a primary button component
 */
const PrimaryButton = (props: { onClick: () => void }) => {
  return (
    <button onClick={props.onClick}>Primary Button</button>
  );
};
export { PrimaryButton };