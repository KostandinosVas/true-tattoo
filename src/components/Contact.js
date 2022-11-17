import React, {useState} from 'react';
// import contact data
import { contactData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
// import { FiTarget } from 'react-icons/fi';

const Contact = () => {
  // destructure contact data
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')


const handleName = (e) => {
  setName(e.target.value)
}
const handleEmail = (e) => {
  setEmail(e.target.value)
}
const handleMessage = (e) => {
  setMessage(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  alert("Thanks for the comments")
}

const handleClearForm = () => {
  setEmail("")
  setName("")
  setMessage("")
}
  
  const { title, info, form } = contactData;
  return (
    <section name="contact" className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1'
          >
            {/* title */}
            <h2 className='h2 max-w-[490px]'>{title}</h2>
            {/* info items */}
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              {info.map((item, index) => {
                // destructure item
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  // item
                  <div key={index}>
                    {/* title */}
                    <div className='font-primary uppercase font-medium text-xl mb-3'>
                      {title}
                    </div>
                    {/* subtitle */}
                    <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
                      {subtitle}
                    </div>
                    {/* address, phone & email */}
                    <div className='flex flex-col gap-y-3 mb-8'>
                      {/* address */}
                      <div className='flex items-center gap-[10px]'>
                       <a href='https://goo.gl/maps/KuvQKbopshMmBy9YA'
                      target="_blank" rel="noreferrer"> <div>{address.icon}</div></a>
                        <div className='font-medium'>{address.name}</div>
                      </div>
                      {/* phone */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{phone.icon}</div>
                        <div className='font-medium'>{phone.number}</div>
                      </div>
                      {/* email */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{email.icon}</div>
                        <div className='font-medium'>{email.address}</div>
                      </div>
                    </div>
                    {/* link */}
                    <a
                      className='font-medium border-b border-dark pb-[5px]'
                      href='https://goo.gl/maps/KuvQKbopshMmBy9YA'
                      target="_blank" rel="noreferrer"
                    >
                      {link}
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 xl:pl-[40px] flex justify-center items-center '
          >
            <form onSubmit={handleSubmit}
             className='flex flex-col gap-y-10 w-full'>
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                type='text' value={name}
                onChange={handleName}
                placeholder={form.name}
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                type='email'  value={email}
                onChange={handleEmail}
                placeholder={form.email}
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]'
                type='textarea' value={message}
                onChange={handleMessage}
                placeholder={form.message}
              />
              <button
              onClick={handleClearForm}
               type='submit'
              className='self-start btn btn-sm btn-dark'>
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
