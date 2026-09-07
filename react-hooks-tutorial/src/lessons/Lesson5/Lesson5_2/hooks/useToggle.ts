import { useCallback, useState } from 'react';
// import { useState } from 'react';

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState(state => !state);
  }, []);
  // const toggle = () => {
  //   setState(state => !state);
  // };

  return [state, toggle];
};
