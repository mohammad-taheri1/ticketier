import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

interface Props {
  items: {
    label: string;
    route: string;
  }[];
}

const BreadCrumb = ({ items = [] }: Props) => {
  return (
    <div className='flex justify-start items-center gap-x-2 bg-sky-800 text-white px-4 py-1 rounded-lg'>
      <Link href='/'>
        <AiOutlineHome className='text-2xl' />
      </Link>
      {items.map((item, index) => (
        <div key={index} className='space-x-2'>
          <span>/</span>
          {index === items.length - 1 ? (
            <span>{item.label}</span>
          ) : (
            <Link href={item.route}>{item.label}</Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
