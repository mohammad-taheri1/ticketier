import { useState } from "react";
import { useForm } from "react-hook-form";
import { TicketCreateDto } from "../../typings/Ticket";
import CustomSpinner from "../spinner/CustomSpinner";
import axios from "axios";

interface Props {
   onSuccessHandler: () => void;
}

const CreateTicketForm = ({ onSuccessHandler }: Props) => {
   const [loading, setLoading] = useState<boolean>(false);
   const form = useForm<TicketCreateDto>({});

   const { register, handleSubmit, formState, reset } = form;
   const { errors } = formState;

   const onSubmitFunction = async (data: TicketCreateDto) => {
      console.log(data);

      try {
         setLoading(true);
         await axios.post("/Tickets/create", data);
         onSuccessHandler();
      } catch (error) {
         // You must handle error here based on you project requirements !!!!!!!
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         {loading && <CustomSpinner />}
         <>
            <form
               onSubmit={handleSubmit(onSubmitFunction)}
               className={`border-2 border-gray-200 w-[400px] max-w-full mx-auto mt-8 p-2 rounded-lg ${
                  loading ? "blur-xl" : ""
               }`}
               noValidate
            >
               <div className="m-4">
                  <label className="text-slate-500">Ticket Time</label>
                  <input
                     type="datetime-local"
                     {...register("time", {
                        required: "Ticket Time is required",
                        valueAsDate: true,
                     })}
                  />
                  <span className="bg-red-200 text-red-600">{errors?.time?.message}</span>
               </div>

               <div className="m-4">
                  <label className="text-slate-500">Passenger Name</label>
                  <input
                     autoComplete="off"
                     type="text"
                     {...register("passengerName", {
                        required: "Passenger Name is required",
                     })}
                  />
                  <span className="bg-red-200 text-red-600">{errors?.passengerName?.message}</span>
               </div>

               <div className="m-4">
                  <label className="text-slate-500">Passenger SSN</label>
                  <input
                     type="number"
                     {...register("passengerSSN", {
                        required: "Passenger SSN is required",
                     })}
                  />
                  <span className="bg-red-200 text-red-600">{errors?.passengerSSN?.message}</span>
               </div>

               <div className="m-4">
                  <label className="text-slate-500">Source (From)</label>
                  <input
                     autoComplete="off"
                     type="text"
                     {...register("from", {
                        required: "Source (From) is required",
                     })}
                  />
                  <span className="bg-red-200 text-red-600">{errors?.from?.message}</span>
               </div>

               <div className="m-4">
                  <label className="text-slate-500">Destination (To)</label>
                  <input
                     autoComplete="off"
                     type="text"
                     {...register("to", {
                        required: "Destination (To) is required",
                     })}
                  />
                  <span className="bg-red-200 text-red-600">{errors?.to?.message}</span>
               </div>

               <div className="m-4">
                  <label className="text-slate-500">Ticket Price</label>
                  <input
                     type="number"
                     {...register("price", {
                        required: "Ticket Price is required",
                     })}
                  />
                  <span className="bg-red-200 text-red-600">{errors?.price?.message}</span>
               </div>

               <div className="flex justify-between items-center">
                  <button className="bg-sky-800 text-white px-4 py-2 mx-8 my-2 rounded-lg">Submit</button>
                  <button
                     type="button"
                     className="bg-orange-600 text-white px-4 py-2 mx-8 my-2 rounded-lg"
                     onClick={() => reset()}
                  >
                     Reset Form
                  </button>
               </div>
            </form>
         </>
      </>
   );
};

export default CreateTicketForm;
