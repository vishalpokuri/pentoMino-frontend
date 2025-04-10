import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-10 flex justify-center items-center text-white mt-auto">
      Made with ❤️ for{" "}
      <div>
        <Instagram size={20} className="mx-1 px-0.5" />
      </div>
      <a
        href="https://www.instagram.com/the_puzzle_guy/"
        className="!text-gray-200 hover:!text-gray-300 transition-colors duration-200"
        target="_blank"
      >
        the_puzzle_guy
      </a>
    </div>
  );
};

export default Footer;
