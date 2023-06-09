import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Ticket } from "../../typings/Ticket";
import axios from "axios";
import BackButton from "../../components/back-button/BackButton";
import CustomSpinner from "../../components/spinner/CustomSpinner";
import moment from "moment";

const TicketsDetailsPage = () => {
   const { id } = useParams();
   const [ticket, setTicket] = useState<Ticket>();
   const [loading, setLoading] = useState<boolean>(true);

   const navigate = useNavigate();

   // We must check if this ticket exists on server?
   // 200 -> Ok
   // 404 -> Not Found
   const getTicketById = async () => {
      if (!loading) setLoading(true);
      try {
         const { data } = await axios.get<Ticket>(`/Tickets/${id}`);

         setLoading(false);
         setTicket(data);
      } catch (error) {
         setLoading(false);
         navigate("/404");
      }
   };

   useEffect(() => {
      getTicketById();
   }, []);

   return (
      <div className="pageGeneralClass">
         <BackButton previousRoute="/tickets" />
         {loading ? (
            <CustomSpinner />
         ) : (
            <>
               <h1 className="text-2xl sm:text-4xl font-bold my-8">
                  Ticket Details For {ticket && ticket.passengerName}
               </h1>
               <div className="flex flex-col gap-y-4">
                  <div>
                     <span className="ticketDetailsRow">Ticket Id:</span>
                     <span className="text-lg">{ticket?.id}</span>
                  </div>
                  <div>
                     <span className="ticketDetailsRow">Passenger Name:</span>
                     <span className="text-lg">{ticket?.passengerName}</span>
                  </div>
                  <div>
                     <span className="ticketDetailsRow">Passenger SSN:</span>
                     <span className="text-lg">{ticket?.passengerSSN}</span>
                  </div>
                  <div>
                     <span className="ticketDetailsRow">From (Source):</span>
                     <span className="text-lg">{ticket?.from}</span>
                  </div>
                  <div>
                     <span className="ticketDetailsRow">Destination (To):</span>
                     <span className="text-lg">{ticket?.to}</span>
                  </div>
                  <div>
                     <span className="ticketDetailsRow">Ticket Price:</span>
                     <span className="text-lg">{ticket?.price}</span>
                  </div>
                  <div>
                     <span className="ticketDetailsRow">Ticket Time:</span>
                     <span className="text-lg">{moment(ticket?.time).format("YYYY-MM-DD|HH:MM")}</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                     <Link to={`/tickets/edit/${ticket?.id}`} className="bg-yellow-600 px-4 py-2 rounded-md mx-1">
                        Edit
                     </Link>
                     <Link to={`/tickets/delete/${ticket?.id}`} className="bg-red-600 px-4 py-2 rounded-md mx-1">
                        Delete
                     </Link>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default TicketsDetailsPage;
