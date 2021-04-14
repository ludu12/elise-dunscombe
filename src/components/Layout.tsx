import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BurgerMenuButton from './BurgerMenuButton';
import NavLink from './NavLink';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MobileNavMenu: React.FC<{ open: boolean }> = (props) => {
  const [open, setOpen] = React.useState<boolean>(props.open);
  React.useEffect(() => {
    setTimeout(() => setOpen(props.open), 0);
  }, [props.open]);
  return (
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
        <NavLink href={'/about'} text={'About Me'} />
        <NavLink href={'/resume'} text={'Resume'} />
        <NavLink href={'/portfolio'} text={'Portfolio'} />
        <NavLink href={'/experience'} text={'Experience'} />
      </nav>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="bg-white py-4">
          <div className="py-4 border-b-2 border-gray-100">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="text-2xl">ELISE DUNSCOMBE</a>
              </Link>
              <nav className={'transition-all duration-500 hidden md:flex'}>
                <NavLink href={'/about'} text={'About Me'} />
                <NavLink href={'/resume'} text={'Resume'} />
                <NavLink href={'/portfolio'} text={'Portfolio'} />
                <NavLink href={'/experience'} text={'Experience'} />
              </nav>
              <div className={'transition-all duration-500 md:hidden z-50'}>
                <BurgerMenuButton onClick={() => setOpen(!open)} open={open} />
              </div>
            </div>
          </div>
        </header>
        <div
          className={`absolute top-0 left-0 w-full ${
            open ? 'visible' : 'hidden'
          }`}
        >
          <MobileNavMenu open={open} />
        </div>
        {props.children}
        <footer className={'flex py-4'}>
          <div
            className={
              'border-t-2 py-4 border-gray-100 w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-56 lg:gap-96'
            }
          >
            <div>
              <h1 className={'text-2xl'}>ELISE DUNSCOMBE</h1>
              <div className="grid grid-cols-6 gap-1 text-xl pt-4">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className={'grid grid-cols-2 md:text-right'}>
              <NavLink href={'/about'} text={'About Me'} disablePadding />
              <NavLink href={'/resume'} text={'Resume'} disablePadding />
              <NavLink href={'/portfolio'} text={'Portfolio'} disablePadding />
              <NavLink
                href={'/experience'}
                text={'Experience'}
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
