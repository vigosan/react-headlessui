import React from 'react';
import Toggle from './Toggle';

export const Default = () => {
  return (
    <Toggle>
      {({ toggle }: { toggle: () => void }) => (
        <>
          <Toggle.On>
            <button onClick={toggle}>on</button>
          </Toggle.On>
          <Toggle.Off>
            <button onClick={toggle}>off</button>
          </Toggle.Off>
        </>
      )}
    </Toggle>
  );
};

export default {
  title: 'Toggle',
};
