import { NAVBAR_LINKS } from '@/constants';
import Link from 'next/link';

import Image from 'next/image';
import Button from '../elements/button/button';
type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <p className="font-bold text-2xl text-green-50">LocalLoop</p>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAVBAR_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type='button'
          label='Login'
          href='/login'
        >
        </Button>
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden"
      />
    </nav>
  );
}
