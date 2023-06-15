import Navbar from '@/components/navbar/Navbar';
import '@/styles//globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Ticketier | DevEmpower',
  description:
    'This is a Tutorial project for Ticketier Next.js Front-end | created by DevEmpower YouTube channel ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-100 min-h-screen'>
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
