import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const Index: React.FC = () => {
  return (
    <Layout title={'Home'}>
      <h1 className={'text-2xl'}>About Me</h1>
      <main className="mt-2">
        <div className="md:flex md:flex-row-reverse">
          <div className="flex-1 md:ml-2 relative">
            <Image
              priority
              src="/images/about/IMG_2336.PNG"
              alt="Picture of the author"
              width={1125}
              height={1683}
              layout="intrinsic"
            />
          </div>
          <div className="flex-1 md:mr-2 md:p-0 pt-4">
            <p>
              My name is Elise Dunscombe and I’m a recent grad from the
              University of Iowa. I received a BBA in Marketing on the Retail
              Management Track. I’m an energetic, outgoing individual with
              strong interpersonal skills and enjoy working in teams. I think of
              myself as a self-starter and a strategic thinker and always keep a
              positive attitude.
            </p>
            <br />
            <p>
              At the moment, I work remotely for The Iowa Children’s Museum in
              Coralville, IA as a Marketing and Communications Associate. In
              this role, I wear many hats. I manage our website on WordPress and
              our social media channels. I create engaging graphics on Canva and
              Adobe InDesign. I also work on sending out e-newsletters and
              various email blasts every month on Constant Contact. Each day
              comes with different responsibilities. Working at a non-profit has
              taught me to be flexible and to be able to pick up slack wherever
              needed.
            </p>
            <br />
            <p>
              n my free time, I enjoy reading new books, catching up with
              friends, trying different foods, and spending time outdoors. I
              also really enjoy travelling and seeing new places! I’m a very
              go-with-the-flow kind of person who always aims to keep positive
              and make the most out of life.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
