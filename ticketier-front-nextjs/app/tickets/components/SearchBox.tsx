'use client';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const router = useRouter();

  const debouncedSearchValue = useDebounce(searchValue, 2000);

  useEffect(() => {
    const url =
      debouncedSearchValue === ''
        ? '/tickets'
        : `/tickets/?q=${debouncedSearchValue}`;
    router.push(url);
  }, [debouncedSearchValue]);

  return (
    <div className='relative mb-4'>
      <input
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='outline-none border-2 border-gray-200 focus:border-gray-500 pl-8 py-1 rounded-lg w-full max-w;lg'
      />
      <AiOutlineSearch className='absolute top-2 left-2 text-2xl text-gray-400' />
    </div>
  );
};

export default SearchBox;
