import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BurgerMenuButton from './BurgerMenuButton';

const Layout: React.FC<{ title: string }> = (props) => {

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <Head>
        <title>{`Elise Dunscombe - ${props.title}`}</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="dist/hamburgers.css" rel="stylesheet"/>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="bg-white pt-4">
          <div className='border-b-2 border-gray-100'>
            <nav className="py-4">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <a className="text-2xl">ELISE DUNSCOMBE</a>
                </Link>
                <div className={'sm:hidden'}>
                  <BurgerMenuButton onClick={() => setOpen(!open)} open={open}/>
                </div>
              </div>
            </nav>
          </div>

          {/*<nav id="site-menu"*/}
          {/*     className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900">*/}
          {/*  <div*/}
          {/*    className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">*/}
          {/*    <a href="#" className="no-underline py-1">*/}
          {/*      <h1 className="font-bold text-lg tracking-widest">LOGO</h1>*/}
          {/*    </a>*/}
          {/*    <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button"*/}
          {/*            onClick="navToggle();">*/}
          {/*      <span className="hamburger__top-bun"></span>*/}
          {/*      <span className="hamburger__bottom-bun"></span>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*  <div id="menu"*/}
          {/*       className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">*/}
          {/*    <a*/}
          {/*      className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"*/}
          {/*      href="https://ttntm.me/blog/tailwind-responsive-menu/" target="_blank">About</a>*/}
          {/*    <a*/}
          {/*      className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"*/}
          {/*      href="#bottom">Features</a>*/}
          {/*  </div>*/}
          {/*</nav>*/}
        </header>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
