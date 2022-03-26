import { useRef } from 'react';

function useId(id = Math.random().toString(36).slice(-5)) {
  const ref = useRef(id);

  return ref.current;
}

export default useId;
