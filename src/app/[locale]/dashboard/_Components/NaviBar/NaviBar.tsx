'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Signout from '@/app/[locale]/login/_Component/Signout/Signout';
import { useEffect, useState } from 'react';

const navItems = [
  { tab: 'myBooking', label: 'My Booking' },
  { tab: 'allBooking', label: 'All Booking' },
  { tab: 'historyList', label: 'Booking History' },
  { tab: 'uploadFile', label: 'Upload Files' },
  { tab: 'myInfo', label: 'My Details' },
  { tab: 'management', label: 'Management' },
  { tab: 'myFinance', label: 'My Finance' },
];

const NaviBar = ({ email }: { email: string }) => {
  const [user, setUser] = useState<{ avatar: string } | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/auth/user?email=${email}`);
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();
        setUser(data);  // Assuming the user object contains an avatar property
      } catch (err) {
        console.error(err);
      }
    };

    if (email) {
      fetchUser();
    }
  }, [email]);

  return (
    <div>
      <div className="w-[320px] bg-gray-800 text-white p-4 flex flex-col items-center block pb-[350px]">
        <div className="border rounded-full w-[120px] mb-2 overflow-hidden">
          {user?.avatar ? (
            <Image src={user.avatar} alt="User Avatar" width={120} height={120} />
          ) : (
            <div className="flex items-center justify-center w-[120px] h-[120px] bg-gray-500 rounded-full">
              <span className="text-white">No Avatar</span>
            </div>
          )}
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
