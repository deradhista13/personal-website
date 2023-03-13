import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-white text-black-content mt-40 border-t-2">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <AiFillLinkedin size={30} />
        </a>
        <a>
          <AiFillGithub size={30} />
        </a>
        <a>
          <AiOutlineWhatsApp size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
