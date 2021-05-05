import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactFrom: React.FC = () => {
  const [state, handleSubmit] = useForm('xeqvepvl');

  return (
    <div className="border p-4 rounded">
      {state.succeeded ? (
        <p>Thanks for reaching out! I'll get back to you shortly!</p>
      ) : (
        <form onSubmit={handleSubmit} className={'flex flex-col'}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="w-full mt-2 mb-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              id="email"
              type="email"
              name="email"
              placeholder="What's your email?"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={'flex flex-col'}>
            <label htmlFor="message">Message</label>
            <textarea
              className="w-full mt-2 mb-2 px-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              id="message"
              name="message"
              placeholder="Have a question or just want to say hi?"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className={'flex justify-end p-2'}>
            <button
              title="Submit"
              className={
                'transition-all duration-500 py-2 px-4 cursor-pointer bg-gray-200 hover:bg-gray-400 rounded'
              }
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactFrom;
