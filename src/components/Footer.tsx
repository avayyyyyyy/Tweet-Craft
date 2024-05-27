import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-transparent border-t border-gray-700 bg-black  w-[80vw] mx-auto ">
        <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href={"https://shubhcodes.vercel.app"}
              className="flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-400 h-fit font-semibold text-lg  text-transparent bg-clip-text sm:justify-start"
            >
              Shubh
              <span className=" bg-gradient-to-br from-green-500 to-green-800 text-transparent bg-clip-text">
                Codes
              </span>
              <Github size={18} className="text-white ml-3" />
            </Link>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
