import Link from "next/link";

const Menu = () => {
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
      </nav>
    </>
  );
};

export default Menu;
