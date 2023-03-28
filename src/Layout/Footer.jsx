import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-gray-400">&copy; 2023 ZuhrDev, Inc.</div>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-200 ml-4"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 ml-4"
            >
              Help Center
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 ml-4"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 ml-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 ml-4"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 ml-4"
            >
              Ads info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;