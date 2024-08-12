import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import profilepic from "../assets/images/profilepic.jpg";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      await emailjs.send(
        "service_qgzwesu",
        "template_y4k93qg",
        templateParams,
        "mhLX5VDyClFAY4gHN"
      );
      setStatus("Email sent successfully!");
    } catch (error) {
      setStatus(`Failed to send email: ${error.text}`);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" contact-title bg-[#f0f2f3] w-full h-96 flex items-center justify-center text-center  ">
        <h1 className="font-brunoAce text-4xl text-[#F83539] ">CONTACT ME</h1>
      </div>
      <div className="flex flex-col md:flex-row  items-center gap-7 md:gap-96">
        <div className="contact-form flex flex-col items-start justify-start  md:pl-44 ">
          <form
            className="flex flex-col w-96 h-auto gap-5 "
            onSubmit={handleSubmit}
          >
            <input
              className="md:w-[50rem] w-full h-20 text-xl font-brunoAce border-b-[1px]  border-gray-300  outline-none"
              type="text"
              id="name"
              placeholder="NAME"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              className="md:w-[50rem] w-full h-20 text-xl font-brunoAce border-b-[1px] border-gray-300  outline-none"
              type="email"
              id="email"
              placeholder="EMAIL ADDRESS"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              className="md:w-[50rem] w-full h-20 text-xl font-brunoAce border-b-[1px] border-gray-300  outline-none"
              type="tel"
              id="phone"
              placeholder="PHONE NUMBER"
              onChange={handleChange}
              value={formData.phone}
              required
            />
            <textarea
              className="md:w-[50rem] w-full h-44 text-xl font-brunoAce border-b-[1px] border-gray-300  outline-none resize-none"
              id="message"
              placeholder="MESSAGE"
              onChange={handleChange}
              value={formData.message}
              required
            />
            <div>
              <ReCAPTCHA
                sitekey="6LeFHB0qAAAAAF1y69vI3hMoM3rxOFWJftKNH8gj" // Replace with your reCAPTCHA site key
                data-type="image"
                onChange={handleRecaptchaChange}
              />
            </div>
            <button className="text-white bg-[#F83539] rounded-lg w-32 h-12 hover:bg-transparent hover:text-[#F83539] hover:border-[#F83539] hover:border-[1px]">
              SEND MESSAGE
            </button>
          </form>
          {status && <p className="font-brunoAce mt-2">{status}</p>}
        </div>
        <div className="profile flex flex-col gap-5 items-center justify-center  md:ml-96 w-72 h-[37rem] rounded-2xl  shadow-2xl bg-[#f0f2f3] ">
          <img
            src={profilepic}
            className="w-40 h-44 rounded-[50%] shadow-2xl "
          />
          <div className="border-b-[1px] border-[#F83539]  h-1 w-44"></div>
          <p className="font-brunoAce text-base ">
            <i className="fa-solid fa-user-pen fa-contact mr-2"></i>
            Mohamed Farrag
          </p>
          <p className="font-brunoAce text-xs">
            <i className="fa-solid fa-briefcase fa-contact mr-2"></i>
            Front End React js
          </p>
          <p className="font-brunoAce text-xs">
            <i className="fa-solid fa-location-dot fa-contact mr-2"></i>
            Damanhour
          </p>
          <div className="flex items-center justify-center gap-1">
            <div className="icon-container flex flex-col gap-2 items-center justify-center">
              <p className="text-hover font-brunoAce text-[#F83539] text-[.5rem]">
                GITHUB
              </p>
              <a
                className=" fa-brands fa-github fs-4  icon-social transition-colors transform hover:scale-105 ease-in-out duration-700 "
                href="https://github.com/mohamedfarrag117"
              ></a>
            </div>

            <div className="icon-container flex flex-col gap-2 items-center justify-center">
              <p className="text-hover font-brunoAce text-[#F83539] text-[.5rem]">
                LINKEDIN
              </p>
              <a
                className="fa-brands fa-linkedin fs-4 icon-social transition-all  hover:scale-105  ease-in-out duration-700 "
                href="https://www.linkedin.com/in/mohamed-farrag-570195233/"
                target="_blank"
              ></a>
            </div>

            <div className="icon-container flex flex-col gap-2 items-center justify-center">
              <p className=" text-hover font-brunoAce text-[#F83539] text-[.5rem]">
                FACEBOOK
              </p>
              <a
                className="fa-brands fa-facebook fs-4 icon-social transition-colors transform hover:scale-105 ease-in-out duration-700 "
                href="https://www.facebook.com/profile.php?id=100007027358185"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
