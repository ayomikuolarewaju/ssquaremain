"use client";
import React, { useActionState } from "react";
import Image from "../../node_modules/next/image";
import fb from "/images/fb-icon.png";
import ig from "/images/instagram-icon.png";
import tw from "/images/twitter-icon.png";
import { formServer } from "../formserver/action";

function Footer() {
  const [message, formAction, isPending] = useActionState(formServer, null);
  return (
    <div>
      <div className="bg-[#420606] mx-auto w-full md:h-[400px] p-[50px] px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 md:flex gap-x-10 justify-between text-white gap-3 items-start">
        <div className="flex flex-col md:w-1/4 gap-y-5 ">
          <h4 className="text-[20px]">ADDRESS</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
        </div>

        <div className="flex flex-col md:w-1/4 gap-y-5">
          <h4 className="text-[20px]">QUICK LINKS</h4>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:w-1/4 gap-y-5">
          <h4 className="text-[20px]">Newsletter</h4>
          <form
            action={formAction}
            method="POST"
            className="flex flex-col gap-y-5"
          >
            <input
              className="p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D]"
              type="text"
              placeholder="Enter Your Full Name"
              name="fullname"
            />
            <input
              className="p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D]"
              type="text"
              placeholder="Enter Your Email"
              name="email"
            />
            <input
              className="p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D]"
              type="text"
              placeholder="Phone"
              name="phone"
            />
            <div className="p-3 rounded-lg bg-[#B3973D] text-white ring-2 ring-[#B3973D]">
              <button type="submit">Subscribe</button>
            </div>
            <p className="font-bold text-center text-[15px] capitalize text-white">
              {isPending ? "Loading..." : message}
            </p>
          </form>
        </div>

        <div className="flex flex-row md:w-1/4 pt-5">
          <ul className="flex gap-x-5">
            <li>
              <a href="#">
                <Image alt="fb" src={fb} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image alt="tw" src={tw} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image alt="ig" src={ig} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#B3973D] mx-auto w-full h-[20px] p-[20px] px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 flex justify-center text-white gap-3 items-center">
        <p className="md:text-[15px] text-[10px]">
          Copyright 2025 All Right Reserved By <a href="/"> Verscom</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
