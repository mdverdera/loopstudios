import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  const menuItems = [
    {
      href: "/about",
      title: "About",
    },
    {
      href: "#",
      title: "Careers",
    },
    {
      href: "#",
      title: "Events",
    },
    {
      href: "#",
      title: "Products",
    },
    {
      href: "#",
      title: "Support",
    },
  ];

  return (
    <>
      <nav className="flex items-center justify-between font-bold text-white ">
        {/* Logo */}
        <Link href={"/"} passHref>
          <picture>
            <img src="/img/logo.svg" alt="logo" />
          </picture>
        </Link>
        {/* Menu */}
        <div className="hidden h-10 font-alata md:flex md:space-x-8">
          {menuItems.map(({ href, title }) => (
            <div className="group" key={title}>
              <Link href={href}>
                <a>{title}</a>
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          ))}
        </div>
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            type="button"
            className={`${
              isOpen && "open"
            } z-40 block hamburger md:hidden focus:outline-none`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 bottom-0 left-0 ${
          isOpen ? "flex" : "hidden"
        }  flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black md:hidden`}
      >
        <Link href={"#"} className="hover:text-pink-500">
          <a>About</a>
        </Link>
        <Link href={"#"} className="hover:text-pink-500">
          <a>Careers</a>
        </Link>
        <Link href={"#"} className="hover:text-pink-500">
          <a>Events</a>
        </Link>
        <Link href={"#"} className="hover:text-pink-500">
          <a>Products</a>
        </Link>
        <Link href={"#"} className="hover:text-pink-500">
          <a>Support</a>
        </Link>
      </div>
    </>
  );
};

export default Menu;
