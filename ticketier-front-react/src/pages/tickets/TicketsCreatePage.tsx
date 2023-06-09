import { useNavigate } from "react-router-dom";
import BackButton from "../../components/back-button/BackButton";
import CreateTicketForm from "../../components/create-ticket-form/CreateTicketForm";

const TicketsCreatePage = () => {
   const navigate = useNavigate();

   const onSuccessHandler = () => {
      navigate("/tickets");
   };

   return (
      <div className="pageGeneralClass">
         <BackButton previousRoute="/tickets" />
         <h1 className="text-2xl sm:text-4xl font-bold my-8">Create Ticket</h1>
         <CreateTicketForm onSuccessHandler={onSuccessHandler} />
      </div>
   );
};

export default TicketsCreatePage;
