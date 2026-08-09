import React, {useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";
import emailjs from '@emailjs/browser';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
const Contact = () => {

  // Send Email
  const formRef = useRef()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_j0v4y5h', 'template_tvuqpyd', formRef.current, {
                publicKey: 'NIRbnv1lNl6ULxIlU',
            })
            .then(
                () => {
                    setError(false)
                    setIsLoading(false); 
                    setSuccess(true)
                    const nameInput = document.getElementsByName('name')[0];
                    const emailInput = document.getElementsByName('email')[0];
                    const messageInput = document.getElementsByName('message')[0];
            
                    nameInput.value = '';
                    emailInput.value = '';
                    messageInput.value = '';
                },
                (error) => {
                    setError(true)
                    setErrMsg('An error occurred while sending the message!!!')
                    setIsLoading(false); 
                    setSuccess(false)
                },
                
            );
    };
  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center h-fit py-1">
              Address:
            </span>
         <span className="text-sm md:text-lg text-justify">  Deutschland, Hamburg, Himmelstraße 10, 22299</span>
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +49 16 098 194 130
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center py-1">
              Email:
            </span>
          <span className="text-sm md:text-lg"> Raheef@almahfoud.de</span>
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        {success ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
    Your message was sent successfully.
          </p>
        ) :
          error ? (
          <p className="text-center text-base font-titleFont p-20 text-red-600">
            {errMsg}
          </p>
        )
        : (
          <form
            id="form"
           ref={formRef} onSubmit={sendEmail}
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <input
                type='text' placeholder='Name' name='name' required 
                className={` border-zinc-600 focus-visible:border-designColor rounded-md
                 w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                // className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
              />
              <input
                type='email' placeholder='Email' name='email' required
                className={` border-zinc-600 focus-visible:border-designColor  rounded-md  w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
              />
            </div>
            <textarea
              rows='4' placeholder='Message' name='message' required
              className={`border-zinc-600 focus-visible:border-designColor w-full  rounded-md bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
            ></textarea>
            <button
             type='submit'  aria-label="submit"
              className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              {isLoading?AiOutlineLoading3Quarters:<span className="flex flex-row gap-4 items-center justify-center"><FiSend /> Send Message{" "}</span>}              
            </button>

          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
