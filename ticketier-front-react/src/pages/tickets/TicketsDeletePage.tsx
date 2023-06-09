import { useState } from "react";
import BackButton from "../../components/back-button/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TicketsDeletePage = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const navigate = useNavigate();
   const { id } = useParams();

   // We must check if this ticket exists on server?
   // 200 -> Ok
   // 404 -> Not Found
   const deleteTicketHandler = async () => {
      setLoading(true);
      try {
         await axios.delete(`/Tickets/delete/${id}`);
         setLoading(false);
         navigate("/tickets");
      } catch (error) {
         setLoading(false);
         navigate("/404");
      }
   };

   return (
      <div className="pageGeneralClass">
         <BackButton previousRoute="/tickets" />
         <h1 className="text-2xl sm:text-4xl font-bold my-8">Delete Ticket</h1>
         <div
            className={`border-2 border-gray-200 w-[400px] max-w-ful mx-auto mt-8 p-2 rounded-lg ${
               loading ? "blur-sm" : ""
            }`}
         >
            <p>Are You sure you want to delete this ticket ?</p>
            <div className="flex justify-between items-center">
               <button onClick={deleteTicketHandler} className="bg-sky-800 text-white px-4 py-2 mx-8 my-2 rounded-lg">
                  Yes, Delte it
               </button>
               <button
                  onClick={() => navigate("/tickets")}
                  className="bg-orange-800 text-white px-4 py-2 mx-8 my-2 rounded-lg"
               >
                  No
               </button>
            </div>
         </div>
      </div>
   );
};

export default TicketsDeletePage;
