'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Signout from '@/app/[locale]/login/_Component/Signout/Signout';

const navItems = [
  { tab: 'myBooking', label: 'My Booking' },
  { tab: 'allBooking', label: 'All Booking' },
  { tab: 'historyList', label: 'Booking History' },
  { tab: 'uploadFile', label: 'Upload Files' },
  { tab: 'myInfo', label: 'My Details' },
];

const NaviBar = ({ email, avatar }: { email: string; avatar: string }) => {
  const pathname = usePathname();

  return (
    <div>
          <div className="w-[320px] bg-gray-800 text-white p-4 flex flex-col items-center block pb-[350px]">
            <div className="border rounded-full w-[120px] mb-2 overflow-hidden">
              <Image src={avatar} alt="User Avatar" width={120} height={120} />
            </div>
            <h2 className="text-[18px] text-center mb-4">
              Welcome, <span className="font-semibold">{email}</span>
            </h2>
            <ul className="w-full space-y-1">
              {navItems.map(({ tab, label }) => (
                <li key={tab}>
                  <Link
                    href={`/dashboard/${tab}`}
                    className={`block text-center p-2 rounded hover:bg-gray-600 ${
                      pathname.includes(tab) ? 'bg-gray-600' : ''
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="p-2 mt-4 text-center">
                <Signout />
              </li>
            </ul>
        </div>
    </div>
  );
};

export default NaviBar;
