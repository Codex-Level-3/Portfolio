"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("Message sent");
      }
    } catch (error) {
      console.error("Error sending message", error);
    }
  }
  return (
    <div
      id="contact"
      className="grid sm:grid-cols-2 items-center gap-16 mt-4 mx-auto p-8 bg-[#28293d] text-[#f8fdea] font-[sans-serif] border-b-4 border-b-[#fee9ce]"
    >
      <div>
        <h1 className="text-3xl font-extrabold">Contact Me</h1>
        <p className="text-sm text-gray-400 mt-3">
          I'm always excited to connect and discuss new opportunities, projects,
          or any questions you might have. Whether you have a project in mind or
          just want to network, feel free to reach out. Please fill out the form
          with your details, and I'll get back to you as soon as possible.
          Looking forward to hearing from you!
        </p>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <div className="text-[#007bff] text-sm ml-3">
                <small className="block">Mail</small>
                <strong>nettleslaqwanda@gmail.com</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Stay In Touch!</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <Link href="https://github.com/Laqwanda-Nettles">
                <svg
                  className="text-3xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <mask
                    id="lineMdGithubLoop0"
                    width="24"
                    height="24"
                    x="0"
                    y="0"
                  >
                    <g fill="#fff">
                      <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                      <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                    </g>
                  </mask>
                  <g
                    fill="none"
                    stroke="#007bff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path
                      strokeDasharray="30"
                      strokeDashoffset="30"
                      d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="30;0"
                      />
                    </path>
                    <path strokeDasharray="10" strokeDashoffset="10" d="M9 19">
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.2s"
                        values="10;0"
                      />
                      <animate
                        attributeName="d"
                        dur="3s"
                        repeatCount="indefinite"
                        values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                      />
                    </path>
                  </g>
                  <rect
                    width="8"
                    height="4"
                    x="8"
                    y="11"
                    fill="#007bff"
                    mask="url(#lineMdGithubLoop0)"
                  >
                    <animate
                      attributeName="y"
                      dur="10s"
                      keyTimes="0;0.45;0.46;0.54;0.55;1"
                      repeatCount="indefinite"
                      values="11;11;7;7;11;11"
                    />
                  </rect>
                </svg>
              </Link>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <Link href="https://example.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 511 512"
                >
                  <path
                    d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                    data-original="#000000"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        className="ml-auto space-y-4 flex flex-col justify-center items-center"
      >
        <label className="text-xl text-[#f8fdea]">
          Name:
          <input
            onChange={handleChange}
            value={formData.name}
            name="name"
            type="text"
            placeholder="Name"
            className="w-full text-[#333] rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
        </label>
        <label className="text-xl text-[#f8fdea]">
          Email:
          <input
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="email"
            placeholder="Email"
            className="w-full text-[#333] rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
        </label>
        <label className="text-xl text-[#f8fdea]">
          Message:
          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            placeholder="Message"
            rows="6"
            className="w-full text-[#333] rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#007bff]"
          ></textarea>
        </label>

        <button
          type="submit"
          className="text-white bg-violet-600  hover:bg-violet-700 font-semibold rounded-md text-md px-4 py-3 w-1/2"
        >
          Send
        </button>
      </form>
    </div>
  );
}
