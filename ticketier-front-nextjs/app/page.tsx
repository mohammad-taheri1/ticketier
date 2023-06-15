import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='pageGeneralClass flex flex-col justify-center items-center gap-y-8 sm:gap-y-16'>
      <div className='mt-16'>
        <h1 className='relative text-xl sm:text-3xl font-bold'>
          Welcome to Ticketier
          <div className='absolute inset-0 w-full h-8 sm:h-12 rounded-full bg-gradient-to-t from-purple-500 to-blue-300 blur-md opacity-40'></div>
        </h1>
      </div>
      <Link
        href='/tickets'
        className='bg-sky-800 text-white px-4 py-2 rounded-lg'
      >
        Tickets
      </Link>
    </div>
  );
};

export default HomePage;
