'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Ticket, TicketCreateDto } from '@/typings/generalTypes';
import CustomSpinner from '@/components/custom-spinner/CustomSpinner';
import axios from 'axios';
import toast from 'react-hot-toast';
import moment from 'moment';

interface Props {
  ticket: Ticket;
}

const EditTicketForm = ({ ticket }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const form = useForm<TicketCreateDto>({});
  const { register, handleSubmit, formState, reset, setValue } = form;
  const { errors } = formState;

  const onSubmitFunction = async (data: TicketCreateDto) => {
    console.log(data);
    try {
      setLoading(true);
      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/edit/${ticket.id}`,
        data
      );
      router.push('/tickets');
      router.refresh();
      toast.success('Ticket edited successfully');
    } catch (error) {
      // Handled
      console.log(error);
      toast.error('Error on editing new Ticket');
    }
  };

  useEffect(() => {
    // For more info, Look at these values
    console.log(ticket.time);
    console.log(moment(ticket.time + 'Z').format());

    setValue('time', moment(ticket.time + 'Z').format('yyyy-MM-DDTHH:mm'));
    setValue('passengerName', ticket.passengerName);
    setValue('passengerSSN', ticket.passengerSSN);
    setValue('from', ticket.from);
    setValue('to', ticket.to);
    setValue('price', ticket.price);
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <CustomSpinner />}
      <>
        <form
          onSubmit={handleSubmit(onSubmitFunction)}
          className={`border-2 border-gray-200 w-96 max-w-full mx-auto mt-4 p-2 rounded-lg ${
            loading ? 'blur-xl' : ''
          }`}
          noValidate
        >
          <div className='m-4'>
            <label className='text-slate-500'>Ticket Time</label>
            <input
              type='datetime-local'
              className='border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1'
              {...register('time', {
                required: 'Ticket Time is required',
                valueAsDate: true,
              })}
            />
            <span className='bg-red-200 text-red-600 rounded-md'>
              {errors?.time?.message}
            </span>
          </div>

          <div className='m-4'>
            <label className='text-slate-500'>Passenger Name</label>
            <input
              autoComplete='off'
              type='text'
              className='border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1'
              {...register('passengerName', {
                required: 'Passenger Name is required',
              })}
            />
            <span className='bg-red-200 text-red-600 rounded-md'>
              {errors?.passengerName?.message}
            </span>
          </div>

          <div className='m-4'>
            <label className='text-slate-500'>Passenger SSN</label>
            <input
              autoComplete='off'
              type='number'
              className='border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1'
              {...register('passengerSSN', {
                required: 'Passenger SSN is required',
                valueAsNumber: true,
              })}
            />
            <span className='bg-red-200 text-red-600 rounded-md'>
              {errors?.passengerSSN?.message}
            </span>
          </div>

          <div className='m-4'>
            <label className='text-slate-500'>From</label>
            <input
              autoComplete='off'
              type='text'
              className='border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1'
              {...register('from', {
                required: 'From is required',
              })}
            />
            <span className='bg-red-200 text-red-600 rounded-md'>
              {errors?.from?.message}
            </span>
          </div>

          <div className='m-4'>
            <label className='text-slate-500'>To</label>
            <input
              autoComplete='off'
              type='text'
              className='border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1'
              {...register('to', {
                required: 'To is required',
              })}
            />
            <span className='bg-red-200 text-red-600 rounded-md'>
              {errors?.to?.message}
            </span>
          </div>

          <div className='m-4'>
            <label className='text-slate-500'>Price</label>
            <input
              autoComplete='off'
              type='number'
              className='border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1'
              {...register('price', {
                required: 'Price is required',
                valueAsNumber: true,
              })}
            />
            <span className='bg-red-200 text-red-600 rounded-md'>
              {errors?.price?.message}
            </span>
          </div>

          <div className='flex justify-between items-center'>
            <button className='bg-sky-800 text-white px-4 py-2 mx-8 my-2 rounded-lg'>
              Submit
            </button>
            <button
              type='button'
              onClick={() => reset()}
              className='bg-orange-800 text-white px-4 py-2 mx-8 my-2 rounded-lg'
            >
              Reset Form
            </button>
          </div>
        </form>
      </>
    </>
  );
};

export default EditTicketForm;
