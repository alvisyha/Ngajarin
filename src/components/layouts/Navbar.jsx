import navItems from "../../data/navItems";
import logo from "../../assets/images/logo.png";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Button from "../elements/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isOpen = () => {
    setOpen(!open);
  };

  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handlleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handlleScroll);
  }, []);

  return (
    <div
      className={`bg-indigo-600 fixed z-10 top-0 mx-auto w-full ${
        shadow ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="container md:justify-center md:flex mx-auto justify-between items-center py-5 px-3">
        <img src={logo} alt="" className="flex w-28" />
        <div
          className="text-2xl text-white cursor-pointer absolute right-8  top-6 md:hidden"
          onClick={isOpen}
        >
          {open ? <FaXmark /> : <FaBars />}
        </div>
        <ul
          className={`mx-auto md:flex gap-4 items-center md:my-0 md:space-x-8 my-6 text-center text-md -z-99 text-white ${
            open ? "show" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <li className="py-2" key={item.id}>
              {item.link}
            </li>
          ))}
          <div
            className={`flex mx-auto justify-center mt-4 gap-3 items-center ${
              open ? "show" : "hidden"
            }`}
          >
            <Button
              path=""
              classname="bg-[#B84F5C] px-6 py-2 text-md rounded-full text-white hover:bg-red-500"
            >
              Daftar
            </Button>
            <Button
              path=""
              classname="bg-[#FF8800] px-6 py-2 text-md rounded-full  hover:bg-yellow-700"
            >
              Masuk
            </Button>
          </div>
        </ul>
        <div className="md:flex hidden gap-4">
          <Button
            path=""
            classname="bg-[#B84F5C] px-6 py-2 text-md rounded-full text-white hover:bg-red-500"
          >
            Daftar
          </Button>
          <Button
            path=""
            classname="bg-[#FF8800] px-6 py-2 text-md rounded-full  hover:bg-yellow-700"
          >
            Masuk
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
