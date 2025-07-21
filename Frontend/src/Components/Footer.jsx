import React from "react";
import {FaInstagram, FaLinkedinIn,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e9f1f7] text-[#333] pt-12 pb-6 px-6 mt-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-xl font-semibold mb-2">SparkNate</h4>
          <p className="italic text-emerald-600 mb-4">A small spark can ignite hope.</p>
          <p className="text-gray-700">
            Building trust through verified fundraising. We focus on impact, clarity, and compassion.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/">Home</a></li>
            <li><a href="/donate">Campaigns</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
             <a href="https://github.com/vikas011" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vikas-k-95o" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://www.linkedin.com/in/vikas-k-95o" className="text-gray-700 hover:text-blue-800 text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} SparkNate. All rights reserved. <br />
        
        
      </div>
    </footer>
  );
};

export default Footer;
