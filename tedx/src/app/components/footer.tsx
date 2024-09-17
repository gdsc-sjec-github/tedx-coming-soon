'use client'
import React, { useState } from 'react';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <footer className="text-white py-6 mt-auto relative">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Tedx Sjec. All rights reserved.</p>
        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
          <li>
            <a onClick={openModal} className="cursor-pointer">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="white" d="M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19"/>
              </svg>
              <style jsx>{`
                .icon {
                  transition: fill 0.3s;
                }

                .icon:hover path {
                  fill: red;
                }
              `}</style>
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="white" fillRule="evenodd" d="M12 2c-2.716 0-3.056.012-4.123.06c-1.064.049-1.791.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772a4.9 4.9 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465c1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.772-1.153a4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772a4.9 4.9 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2m0 1.802c2.67 0 2.986.01 4.04.058c.976.045 1.505.207 1.858.344c.466.182.8.399 1.15.748c.35.35.566.684.748 1.15c.136.353.3.882.344 1.857c.048 1.055.058 1.37.058 4.041c0 2.67-.01 2.986-.058 4.04c-.045.976-.208 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.684.566-1.15.748c-.353.136-.882.3-1.857.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.987-.01-4.04-.058c-.976-.045-1.505-.208-1.858-.344a3.1 3.1 0 0 1-1.15-.748a3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857c-.048-1.055-.058-1.37-.058-4.041c0-2.67.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858c.182-.466.399-.8.748-1.15c.35-.35.684-.566 1.15-.748c.353-.137.882-.3 1.857-.344c1.055-.048 1.37-.058 4.041-.058m0 11.531a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1 0 6.666m0-8.468a5.135 5.135 0 1 0 0 10.27a5.135 5.135 0 0 0 0-10.27m6.538-.203a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0"/>
              </svg>
              <style jsx>{`
                .icon {
                  transition: fill 0.3s;
                }

                .icon:hover path {
                  fill: red;
                }
              `}</style>
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="white" fillRule="evenodd" d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.8 7.8 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.3 6.3 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z" clipRule="evenodd"/>
              </svg>
              <style jsx>{`
                .icon {
                  transition: fill 0.3s;
                }

                .icon:hover path {
                  fill: red;
                }
              `}</style>
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="white" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/>
              </svg>
              <style jsx>{`
                .icon {
                  transition: fill 0.3s;
                }

                .icon:hover path {
                  fill: red;
                }
              `}</style>
            </a>
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
          <div className="relative z-60 bg-white rounded-lg max-w-screen-sm w-full" onClick={e => e.stopPropagation()}>
           
            <iframe className='rounded-xl w-full h-60' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.952117493349!2d74.89609701057077!3d12.910799087346417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba359dfac132663%3A0xa7bf228838232d32!2sSt%20Joseph%20Engineering%20College!5e0!3m2!1sen!2sin!4v1726594963441!5m2!1sen!2sin" loading="lazy"></iframe>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;









    