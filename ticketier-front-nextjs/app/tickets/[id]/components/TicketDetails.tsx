'use client';
import { Ticket } from '@/typings/generalTypes';
import React from 'react';
import moment from 'moment';
import Link from 'next/link';

interface Props {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: Props) => {
  return (
    <div className='border-2 border-gray-300 flex flex-col gap-y-4 p-4 rounded-lg'>
      <div>
        <span className='text-lg font-bold text-sky-900 mr-4'>Ticket Id</span>
        <span className='text-lg'>{ticket.id}</span>
      </div>

      <div>
        <span className='text-lg font-bold text-sky-900 mr-4'>
          Pasenger Name
        </span>
        <span className='text-lg'>{ticket.passengerName}</span>
      </div>

      <div>
        <span className='text-lg font-bold text-sky-900 mr-4'>Ticket SSN</span>
        <span className='text-lg'>{ticket.passengerSSN}</span>
      </div>

      <div>
        <span className='text-lg font-bold text-sky-900 mr-4'>From</span>
        <span className='text-lg'>{ticket.from}</span>
      </div>

      <div>
        <span className='text-lg font-bold text-sky-900 mr-4'>To</span>
        <span className='text-lg'>{ticket.to}</span>
      </div>

      <div>
        <span className='text-lg font-bold text-sky-900 mr-4'>Price</span>
        <span className='text-lg'>{ticket.price}</span>
      </div>

      <div>
        <span className='text-lg font-bold text-sky-900 mr-4'>Ticket time</span>
        <span className='text-lg'>
          {moment(ticket.time + 'Z').format('yyyy-MM-DD _ HH:mm')}
        </span>
      </div>

      <div className='flex justify-between items-center'>
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className='bg-yellow-600 text-white px-4 py-2 rounded-md mx-1'
        >
          Edit
        </Link>
        <Link
          href={`/tickets/delete/${ticket.id}`}
          className='bg-red-600 text-white px-4 py-2 rounded-md mx-1'
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default TicketDetails;
