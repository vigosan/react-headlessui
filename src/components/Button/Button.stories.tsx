import React from 'react';
import Button from './Button';

export const Basic = () => (
  <Button
    onClick={() => console.log('click!')}
    style={{
      fontFamily: 'arial',
      width: '264px',
      padding: '1px 6px',
      fontSize: '14px',
      display: 'block',
    }}
  >
    I am a button
  </Button>
);

export const AsDiv = () => (
  <Button
    as="div"
    onClick={() => console.log('click!')}
    style={{
      fontFamily: 'arial',
      margin: '0',
      textTransform: 'none',
      cursor: 'pointer',
      borderRadius: '2px',
      padding: '1px 6px',
      fontSize: '14px',
      fontWeight: '400',
      backgroundColor: '#efefef',
      border: '1px solid #767676',
      width: '250px',
      textAlign: 'center',
    }}
  >
    I am a button
  </Button>
);

export const AsLink = () => (
  <Button
    as="a"
    onClick={() => console.log('click!')}
    style={{
      fontFamily: 'arial',
      margin: '0',
      textTransform: 'none',
      cursor: 'pointer',
      borderRadius: '2px',
      padding: '1px 6px',
      fontSize: '14px',
      fontWeight: '400',
      backgroundColor: '#efefef',
      border: '1px solid #767676',
      textDecoration: 'none',
      color: 'black',
      width: '250px',
      display: 'block',
      textAlign: 'center',
    }}
  >
    I am a button
  </Button>
);

export default {
  title: 'Button',
};
