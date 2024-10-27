import React, { useState } from 'react';
import rightArrowWhite from "/images/right-arrow-white.png";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_REACT_EMAIL_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        event.target.reset();
      } else {
        toast.error('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Network error! Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
    <Toaster />
    <div id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url('/images/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none`}>
      <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
      <h2 className='text-center text-5xl'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" name="name" required placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/50' />
          <input type="email" name="email" required placeholder='Enter your email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/50' />
        </div>
        <textarea rows="6" name="message" required placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/50'></textarea>
        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:text-white dark:bg-transparent dark:border dark:border-white dark:hover:bg-darkHover/50'> {isSubmitting ? 'Submitting...' : 'Submit now'} {isSubmitting ? "" : <img src={rightArrowWhite} alt="" className='w-4 ' />}</button>
      </form>
    </div>
    </>
  )
}

export default Contact
