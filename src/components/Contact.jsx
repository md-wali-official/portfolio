import React, { useState, useRef } from 'react';
// import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_d9r5j7e';
    const templateId = 'template_jrtsd9i';
    const publicKey = 'DN5sykRJ7DPDhrPHr';

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (response) => {
          toast.success('Email sent successfully!', response);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          toast.error('Error sending email', error);
        }
      );
  };

  return (
    <div className='mt-24 p-2 max-w-[1100px] mx-auto grid md:grid-cols-2 place-items-center' id='contact'>
      <div>
        <div className='text-gray-300 my-3 p-2'>
          <h3 className='md:text-4xl text-2xl font-semibold mb-5'>Let's <span>connect</span></h3>
          <p className='text-justify leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas alias veritatis, iste ab nobis sint optio sunt atque recusandae dolorem ratione tempore repudiandae labore, totam, nulla cumque maiores quasi corporis! Animi, cupiditate dignissimos assumenda sunt, ut iure recusandae distinctio odit iste laborum fugiat accusantium. Omnis pariatur unde culpa minus.</p>
        </div>

        <div className='flex mt-10 items-center gap-7'>
          <div className='bg-[#171717]/40 p-5 rounded-lg text-center'>
            <h3 className='text-2xl md:text-4xl font-semibold text-gray-200'>5 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Projects</p>
          </div>

          <div className='bg-[#171717]/40 p-5 rounded-lg text-center'>
            <h3 className='text-2xl md:text-4xl font-semibold text-gray-200'>2 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Years Experience</p>
          </div>

          <div className='bg-[#171717]/40 p-5 rounded-lg text-center'>
            <h3 className='text-2xl md:text-4xl font-semibold text-gray-200'>30 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Happy Clients</p>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={handleSubmit} className='max-w-6xl p-5 md:p-12' id='form'>
        <input
          type='text'
          id='name'
          placeholder='Your name ....'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        />

        <input
          type='email'
          id='email'
          placeholder='Your email ....'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        />

        <textarea
          id='message'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={4}
          placeholder='Your message ....'
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        />

        <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
