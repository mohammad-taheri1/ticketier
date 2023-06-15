import BackButton from '@/components/back-button/BackButton';
import BreadCrumb from '@/components/bread-crumb/BreadCrumb';
import GeneralInnerTitle from '@/components/general-inner-title/GeneralInnerTitle';
import { Ticket } from '@/typings/generalTypes';
import { notFound } from 'next/navigation';
import React from 'react';
import DeleteTicket from './components/DeleteTicket';

async function getTicket(id: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${id}`;
  // This is SSR
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}

interface Props {
  params: {
    id: string;
  };
}

const TicketDeletePage = async ({ params }: Props) => {
  const ticket: Ticket = await getTicket(params.id);

  if (!ticket) {
    notFound();
  }

  return (
    <div className='pageGeneralClass'>
      <div className='flex justify-start items-center gap-x-4'>
        <BackButton destination='/tickets' />
        <BreadCrumb
          items={[
            { label: 'Tickets', route: '/tickets' },
            { label: 'Delete', route: '/' },
          ]}
        />
      </div>

      <div>
        <GeneralInnerTitle title='Delete Ticket' />
      </div>

      <DeleteTicket ticket={ticket} />
    </div>
  );
};

export default TicketDeletePage;
