import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => {
  const isGoogle = `${isGoogleSignIn ? 'google-sign-in' : ''}`;
  const isInverted = `${inverted ? 'inverted' : ''}`;
  return <button className={`${isGoogle} ${isInverted} custom-button`} {...otherProps}>
    {children}
  </button>
};

export default CustomButton;