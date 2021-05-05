import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BurgerMenuButton from './BurgerMenuButton';
import NavLink from './NavLink';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MobileNavMenu: React.FC<{ open: boolean }> = (props) => {
  // Hack for delayed open
  const [open, setOpen] = React.useState<boolean>(props.open);
  React.useEffect(() => {
    setTimeout(() => setOpen(props.open), 5);
  }, [props.open]);

  return (
    <div
      className={`transition-all duration-500 absolute top-0 left-0 w-full z-40 ${
        props.open ? 'visible' : 'hidden'
      }`}
    >
      <div
        className={`transition-all duration-500 ease-in-out bg-white overflow-hidden ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <nav
          className={
            'flex flex-col items-center text-center w-full h-screen pt-32'
          }
        >
          <NavLink href={'/'} text={'About Me'} />
          <NavLink href={'/resume'} text={'Resume'} />
          <NavLink href={'/canva'} text={'Canva'} />
          <NavLink href={'/contact-me'} text={'Contact Me'} />
        </nav>
      </div>
    </div>
  );
};

const Layout: React.FC<{ title: string }> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <Head>
        <title>{`Elise Dunscombe - ${props.title}`}</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div className={`max-w-7xl mx-auto px-4 w-full ${open ? 'fixed' : ''}`}>
        <header className="bg-white py-4">
          <div className="py-4 border-b-2 border-gray-100">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="text-2xl font-bold">ELISE DUNSCOMBE</a>
              </Link>
              <nav className={'hidden md:flex'}>
                <NavLink href={'/'} text={'About Me'} />
                <NavLink href={'/resume'} text={'Resume'} />
                <NavLink href={'/canva'} text={'Canva'} />
                <NavLink href={'/contact-me'} text={'Contact Me'} />
              </nav>
              <div className={'md:hidden z-50'}>
                <BurgerMenuButton onClick={() => setOpen(!open)} open={open} />
              </div>
            </div>
          </div>
        </header>
        <MobileNavMenu open={open} />
        {props.children}
        <footer className={'flex py-4'}>
          <div
            className={
              'border-t-2 py-4 border-gray-100 w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-56 lg:gap-96'
            }
          >
            <div>
              <h1 className={'text-2xl font-bold'}>ELISE DUNSCOMBE</h1>
              <div className="grid grid-cols-6 gap-1 text-xl pt-4">
                <a
                  href="https://www.facebook.com/elise.dunscombe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/elisedunscombe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/elise-dunscombe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className={'grid grid-cols-2 md:text-right pr-4'}>
              <NavLink href={'/'} text={'About Me'} disablePadding />
              <NavLink href={'/resume'} text={'Resume'} disablePadding />
              <NavLink href={'/canva'} text={'Canva'} disablePadding />
              <NavLink
                href={'/contact-me'}
                text={'Contact Me'}
                disablePadding
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Layout;
