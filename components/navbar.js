import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import Link from "next/link";
import DarkModeContext from "../context/dark-mode-context";

export default function Navbar({}) {
  let [open, setOpen] = useState(false);
  let { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const downloadPDF = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div
      className={`font-mono sticky top-0 left-0 md:flex w-full pt-3  dark:bg-gray-900 dark:text-white justify-between z-10 h-12  bg-white  drop-shadow-md dark:border-b-2 dark:border-gray-800 `}
    >
      <div className="flex pl-4 gap-10 ">
        <Link href="/" className="text-2xl">
          abu.io
        </Link>
        <div className=" my-2 ">
          {darkMode ? (
            <BsSun
              onClick={() => toggleDarkMode(!darkMode)}
              className=" cursor-pointer text-md transition duration-200 hover:scale-125"
            />
          ) : (
            <BsFillMoonFill
              onClick={() => toggleDarkMode(!darkMode)}
              className=" cursor-pointer text-md transition duration-200 hover:scale-125 "
            />
          )}
        </div>
      </div>
      <div
        className="md:hidden absolute top-0 right-6 text-2xl pt-5"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <AiOutlineClose
            className={` ${darkMode ? "text-white" : " text-black"}`}
          />
        ) : (
          <BiMenu className={` ${darkMode ? "text-white" : "text-black"}`} />
        )}
      </div>

      <ul
        className={`md:flex md:bg-none bg-white text-sm md:static md:justify-end md:p-0 p-3 mt-1 absolute md:gap-y-0 gap-10 dark:bg-gray-900 w-full text-center md:pr-6  ${
          open ? "top-30px " : "top-[-490px]"
        }`}
      >
        <li className="dark:hover:text-teal-600 hover:text-gray-500 hover:cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="dark:hover:text-teal-600 hover:text-gray-500 hover:cursor-pointer md:my-0 my-2">
          <Link href="/projects"> Projects</Link>
        </li>
        <li
          className="dark:hover:text-teal-600 hover:text-gray-500 hover:cursor-pointer md:pb-0 pb-3 drop-shadow-2xl md:border-none dark:border-b-2 dark:border-gray-800"
          onClick={() => downloadPDF()}
        >
          Download Resume
        </li>
      </ul>
    </div>
  );
}
