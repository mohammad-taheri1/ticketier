'use client';

import { useState, useEffect } from 'react';

const useDebounce = (searchString: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(searchString);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('timer run');

      setDebouncedValue(searchString);
    }, delay);

    return () => {
      console.log('timer delete');

      clearTimeout(timerId);
    };
  }, [searchString, delay]);

  return debouncedValue;
};

export default useDebounce;
