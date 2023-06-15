import BackButton from '@/components/back-button/BackButton';
import BreadCrumb from '@/components/bread-crumb/BreadCrumb';
import GeneralInnerTitle from '@/components/general-inner-title/GeneralInnerTitle';
import React from 'react';
import CreateTicketForm from './components/CreateTicketForm';

const TicketCreatePage = () => {
  return (
    <div className='pageGeneralClass'>
      <div className='flex justify-start items-center gap-x-4'>
        <BackButton destination='/tickets' />
        <BreadCrumb
          items={[
            { label: 'Tickets', route: '/tickets' },
            { label: 'Create', route: '/' },
          ]}
        />
      </div>

      <div>
        <GeneralInnerTitle title='Create Ticket' />
      </div>

      <CreateTicketForm />
    </div>
  );
};

export default TicketCreatePage;
