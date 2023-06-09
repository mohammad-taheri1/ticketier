const CustomSpinner = () => {
   return (
      <div className="flex justify-center items-center">
         <span className="relative h-20 w-20">
            <span className="absolute bg-sky-800 animate-ping h-full w-full rounded-full blur-md"></span>
            <span className="bg-sky-800 h-20 w-20 relative inline-flex blur-xl rounded-full"></span>
         </span>
      </div>
   );
};

export default CustomSpinner;
