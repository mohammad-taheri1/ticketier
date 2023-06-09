import { useState, useEffect } from "react";
import BackButton from "../../components/back-button/BackButton";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Ticket } from "../../typings/Ticket";
import axios from "axios";
import CustomSpinner from "../../components/spinner/CustomSpinner";
import moment from "moment";

const TicketsIndexPage = () => {
   const [Tickets, setTickets] = useState<Ticket[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   const getTickets = async () => {
      if (!loading) setLoading(true);
      const { data } = await axios.get<Ticket[]>("/Tickets");

      setLoading(false);
      setTickets(data);
   };

   useEffect(() => {
      getTickets();
   }, []);

   const NoDataContent = <div className="text-center text-3xl">No Tickets Found</div>;

   const TicketsContent = (
      <table className="w-full">
         <thead className="bg-gray-100 p-2">
            <tr>
               <th className="text-center">Id</th>
               <th className="text-center">Passenger Name</th>
               <th className="text-center max-md:hidden">Passenger SSN</th>
               <th className="text-center max-lg:hidden">From</th>
               <th className="text-center max-lg:hidden">To</th>
               <th className="text-center max-md:hidden">Price</th>
               <th className="text-center">Time</th>
               <th className="text-center">Operation</th>
            </tr>
         </thead>
         <tbody className="bg-sky-100">
            {Tickets.map((ticket) => (
               <tr
                  key={ticket.id}
                  className="border-2 border-gray-200 h-12 hover:bg-sky-400 transition-all duration-200"
               >
                  <td className="text-center">{ticket.id}</td>
                  <td className="text-center">{ticket.passengerName}</td>
                  <td className="text-center max-md:hidden">{ticket.passengerSSN}</td>
                  <td className="text-center max-lg:hidden">{ticket.from}</td>
                  <td className="text-center max-lg:hidden">{ticket.to}</td>
                  <td className="text-center max-md:hidden">{ticket.price}</td>
                  <td className="text-center">{moment(ticket.time).format("YYYY-MM-DD|HH:MM")}</td>
                  <td className="text-center">
                     <Link to={`/tickets/${ticket.id}`} className="bg-green-600 p-1 rounded-md mx-1">
                        Details
                     </Link>
                     <Link
                        to={`/tickets/edit/${ticket.id}`}
                        className="bg-yellow-600 p-1 rounded-md mx-1 max-md:hidden"
                     >
                        Edit
                     </Link>
                     <Link to={`/tickets/delete/${ticket.id}`} className="bg-red-600 p-1 rounded-md mx-1 max-md:hidden">
                        Delete
                     </Link>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );

   return (
      <div className="pageGeneralClass">
         <BackButton previousRoute="/" />

         <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-4xl font-bold my-8">Tickets List</h1>
            <Link to="/tickets/create">
               <AiOutlinePlusSquare className="text-4xl text-blue-600" />
            </Link>
         </div>

         {/* Render All tickets */}
         {loading ? <CustomSpinner /> : !Tickets.length ? NoDataContent : TicketsContent}
      </div>
   );
};

export default TicketsIndexPage;
