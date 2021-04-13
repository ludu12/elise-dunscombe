import React from 'react';
import Head from 'next/head';

const Layout: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <Head>
        <title>{`Elise Dunscombe - ${props.title}`}</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white pt-4">
          <div className=" border-b-2 border-gray-100"></div>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
