import { Link } from "react-router-dom";

const HomePage = () => {
   return (
      <div className="pageGeneralClass flex flex-col justify-center items-center gap-y-8 sm:gap-y-16">
         <div className="text-center mt-16">
            <h1 className="relative text-2xl sm:text-4xl font-bold">
               Welcome to Ticketier
               <div className="absolute inset-0 w-full h-8 sm:h-16 rounded-full bg-gradient-to-t from-purple-500 to-blue-300 blur-md opacity-30"></div>
            </h1>
         </div>
         <Link to="/tickets" className="bg-sky-800 text-white px-4 py-2 rounded-lg">
            Tickets
         </Link>
      </div>
   );
};

export default HomePage;
