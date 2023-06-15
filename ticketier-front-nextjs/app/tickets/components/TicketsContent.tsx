'use client';
import { Ticket } from '@/typings/generalTypes';
import Link from 'next/link';
import {
  MdOutlinePageview,
  MdOutlineEdit,
  MdOutlineDelete,
} from 'react-icons/md';
import moment from 'moment';

interface Props {
  ticketsData: Ticket[];
}

const TicketsContent = ({ ticketsData }: Props) => {
  console.log(ticketsData);

  return (
    <table className='w-full'>
      <thead className='bg-slate-200 p-2'>
        <tr>
          <th className='text-center'>Id</th>
          <th className='text-center'>Passenger Name</th>
          <th className='text-center max-md:hidden'>Passenger SSN</th>
          <th className='text-center max-lg:hidden'>From</th>
          <th className='text-center max-lg:hidden'>To</th>
          <th className='text-center max-md:hidden'>Price</th>
          <th className='text-center'>Time</th>
          <th className='text-center'>Operations</th>
        </tr>
      </thead>
      <tbody className='bg-slate-100 p-2'>
        {ticketsData.map((ticket) => (
          <tr
            key={ticket.id}
            className='border-2 border-gray-200 h-10 hover:bg-slate-300 transition-all duration-200'
          >
            <td className='text-center'>{ticket.id}</td>
            <td className='text-center'>{ticket.passengerName}</td>
            <td className='text-center max-md:hidden'>{ticket.passengerSSN}</td>
            <td className='text-center max-lg:hidden'>{ticket.from}</td>
            <td className='text-center max-lg:hidden'>{ticket.to}</td>
            <td className='text-center max-md:hidden'>{ticket.price}</td>
            <td className='text-center'>
              <span>
                {moment(ticket.time + 'Z').format('yyyy-MM-DD _ HH:mm')}
              </span>
            </td>
            <td className='text-center'>
              <div className='flex justify-center items-center'>
                <Link
                  href={`/tickets/${ticket.id}`}
                  className='bg-green-600 p-1 rounded-md mx-1'
                >
                  <MdOutlinePageview className='text-xl' />
                </Link>
                <Link
                  href={`/tickets/edit/${ticket.id}`}
                  className='bg-yellow-600 p-1 rounded-md mx-1 max-md:hidden'
                >
                  <MdOutlineEdit className='text-xl' />
                </Link>
                <Link
                  href={`/tickets/delete/${ticket.id}`}
                  className='bg-red-600 p-1 rounded-md mx-1 max-md:hidden'
                >
                  <MdOutlineDelete className='text-xl' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketsContent;
