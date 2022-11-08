import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pratt@prattparedes.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mr-[-20px]">
        Contact
      </h3>
      <div className="flex flex-col sm:space-y-10 mt-20">
        <h4 className="text-[22px] sm:text-4xl font-semibold text-center my-[12px]">
          I have just what you need.{" "}
          <span className="decoration-[#BC4123] underline">Let's Talk.</span>
        </h4>
        <div className="space-y-5 max-w-[100%] sm:max-w-none">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#BC4123] h-7 w-7 animate-pulse" />
            <p className="text-[20px] sm:text-2xl">+51 933185756</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#BC4123] h-7 w-7 animate-pulse" />
            <p className="text-[20px] sm:text-2xl">pratt@prattparedes.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#BC4123] h-7 w-7 animate-pulse" />
            <p className="text-[16px] sm:text-2xl">San Juan de Lurigancho, Lima.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 sm:w-fit mx-auto">
            <div className="flex space-x-2">
              <input {...register('name')} placeholder="Name" className="contactInput w-[50%]" type="text" />
              <input
              {...register('email')}
                placeholder="Email"
                className="contactInput w-[50%]"
                type="email"
              />
            </div>

            <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

            <textarea {...register('message')} placeholder="Message" className="contactInput" />
            <button
              type="submit"
              className="bg-[#BC4123] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
