"use client";

import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import Image from "next/image";

// Icons
import userIcon from "@/public/images/icon/user-balck-icon.svg";
import emailIcon from "@/public/images/icon/sms-balck-icon.svg";
import phoneIcon from "@/public/images/icon/call-icon02.svg";
import uploadIcon from "@/public/images/icon/upload-icon.svg";
import listIcon from "@/public/images/icon/list-icon.svg";
import messageIcon from "@/public/images/icon/messages-icon.svg";
import arrowIcon from "@/public/images/icon/rotate-arrow-black02.svg";

export default function ContactForm() {
  const [, forceUpdate] = useState(0);

  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage",
      autoForceUpdate: { forceUpdate },
    })
  );

  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null as File | null,
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForms((prev) => ({ ...prev, [name]: value }));
    validator.current.showMessageFor(name);
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForms((prev) => ({ ...prev, file }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (validator.current.allValid()) {
      console.log("✅ Form submitted:", forms);
      alert("Form submitted successfully!");

      setForms({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        file: null,
      });

      validator.current.hideMessages();
      forceUpdate((n) => n + 1);
    } else {
      validator.current.showMessages();
      forceUpdate((n) => n + 1);
    }
  };

  return (
    <form onSubmit={submitHandler} className="xb-contact-input-form" noValidate>
      <div className="row mt-none-20">

        {/* Name */}
        <div className="col-lg-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-name"
              name="name"
              type="text"
              value={forms.name}
              onChange={changeHandler}
            />
            <label htmlFor="author-name">Your Name*</label>
            <Image src={userIcon} alt="user" />
          </div>
          {validator.current.message("name", forms.name, "required|alpha_space")}
        </div>

        {/* Email */}
        <div className="col-lg-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-email"
              name="email"
              type="email"
              value={forms.email}
              onChange={changeHandler}
            />
            <label htmlFor="author-email">Email Address*</label>
            <Image src={emailIcon} alt="email" />
          </div>
          {validator.current.message("email", forms.email, "required|email")}
        </div>

        {/* Phone */}
        <div className="col-lg-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-phone"
              name="phone"
              type="tel"
              value={forms.phone}
              onChange={changeHandler}
            />
            <label htmlFor="author-phone">Contact No*</label>
            <Image src={phoneIcon} alt="phone" />
          </div>
          {validator.current.message("phone", forms.phone, "required|min:7")}
        </div>

        {/* File Upload */}
        <div className="col-lg-6 mt-20">
          <div className="xb-input-field xb-select-file">
            <input type="file" name="file" onChange={fileHandler} />
            <Image src={uploadIcon} alt="upload" />
            <span>{forms.file ? forms.file.name : "Attach file..."}</span>
          </div>
        </div>

        {/* Select */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-select-field">
            <select
              name="service"
              value={forms.service}
              onChange={changeHandler}
              required
              className="nice-select"
            >
              <option value="">Select Service*</option>
              <option value="AI - marketing">AI - marketing</option>
              <option value="AI consulting">AI consulting</option>
              <option value="AI chatbot virtual">AI chatbot virtual</option>
            </select>
            <Image src={listIcon} alt="list" />
          </div>
          {validator.current.message("service", forms.service, "required")}
        </div>

        {/* Message */}
        <div className="col-lg-12 mt-20">
          <div className="xb-input-field xb-massage-field">
            <textarea
              id="massage"
              name="message"
              value={forms.message}
              onChange={changeHandler}
            />
            <label htmlFor="massage">Your Message..</label>
            <Image src={messageIcon} alt="message" />
          </div>
          {validator.current.message("message", forms.message, "required")}
        </div>
      </div>

      {/* Submit */}
      <div className="form-submit-btn mt-35">
        <button type="submit" className="thm-btn form-btn">
          Submit Here
          <span className="xb-icon">
            <Image src={arrowIcon} alt="arrow" />
            <Image src={arrowIcon} alt="arrow" />
          </span>
        </button>
      </div>
    </form>
  );
}
