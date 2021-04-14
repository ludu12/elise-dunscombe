import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  text: string;
  href: string;
  disablePadding?: boolean;
  emoji?: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const router = useRouter();

  // /page/path => ["", "page", "path"]
  const paths = router.asPath.split('/').map(decodeURI);
  const root = paths.slice(0, 2).join('/');
  const isActive = props.href === root;

  return (
    <Link href={props.href} passHref>
      <a
        className={`hover:underline ${isActive ? 'text-indigo-600' : ''} ${
          props.disablePadding ? '' : 'p-4'
        }`}
      >
        {props.text}
      </a>
    </Link>
  );
};

export default NavLink;
