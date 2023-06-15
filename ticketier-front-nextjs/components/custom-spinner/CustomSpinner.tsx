const CustomSpinner = () => {
  return (
    <div className='h-48 flex justify-center items-center'>
      <span className='relative h-20 w-20'>
        <span className='bg-sky-600 absolute w-full h-full rounded-full blur-lg animate-ping'></span>
        <span className='bg-sky-600 inline-flex h-20 w-20 rounded-full blur-xl'></span>
      </span>
    </div>
  );
};

export default CustomSpinner;
