import React from 'react';
import Layout from '../components/Layout';
import ContactFrom from '../components/ContactForm';

const ContactMe: React.FC = () => {
  return (
    <Layout title={'Contact Me'}>
      <h1 className={'text-2xl'}>Contact Me</h1>
      <main className="mt-2">
        <p>
          Thanks for getting to know me better! Please get in touch if you have
          any additional questions or comments.
        </p>
        <br />
        <ContactFrom />
      </main>
    </Layout>
  );
};

export default ContactMe;
