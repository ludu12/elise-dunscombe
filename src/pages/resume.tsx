import React from 'react';
import Layout from '../components/Layout';

const Resume: React.FC = () => {
  return (
    <Layout title={'Resume'}>
      <h1 className={'text-2xl'}>Resume</h1>
      <main className="mt-2">
        <div className={'flex justify-center'}>
          <div className="w-full md:h-screen h-96">
            <iframe
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1Fv8NZPvYeQ10ohhhG3-HabZM_t7--x55/preview"
            ></iframe>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Resume;
