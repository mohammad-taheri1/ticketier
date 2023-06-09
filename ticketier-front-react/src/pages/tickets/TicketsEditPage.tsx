import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../components/back-button/BackButton";
import EditTicketForm from "../../components/edit-ticket-form/EditTicketForm";

const TicketsEditPage = () => {
   const navigate = useNavigate();
   const { id } = useParams();

   const onSuccessHandler = () => {
      navigate("/tickets");
   };

   const onFailureHandler = () => {
      navigate("/404");
   };

   return (
      <div className="pageGeneralClass">
         <BackButton previousRoute="/tickets" />
         <h1 className="text-2xl sm:text-4xl font-bold my-8">Edit Ticket</h1>
         <EditTicketForm onSuccessHandler={onSuccessHandler} onFailureHandler={onFailureHandler} id={id} />
      </div>
   );
};

export default TicketsEditPage;
