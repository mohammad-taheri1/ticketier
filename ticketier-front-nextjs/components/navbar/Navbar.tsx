import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { MdAirplaneTicket } from 'react-icons/md';

// I use Dynamic data for my Navbar menu
// It is a better approach
const menuItems = [
  { id: 1, label: 'Home', route: '/', icon: <AiOutlineHome /> },
  { id: 2, label: 'Tickets', route: '/tickets', icon: <MdAirplaneTicket /> },
];

const Navbar = () => {
  return (
    <div className='bg-gray-100 flex justify-between items-center p-2 md:p-4 lg:px-8 lg:py-4 text-2xl'>
      <div>
        <Link href='/'>Ticketier</Link>
      </div>
      <div className='flex items-center gap-x-4'>
        {menuItems.map((item) => (
          <Link key={item.id} href={item.route}>
            <span className='max-md:hidden'>{item.label}</span>
            <span className='md:hidden text-3xl'>{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
