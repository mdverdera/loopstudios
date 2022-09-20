import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Menu from "@components/Menu";
import Items, { itemsImageSource } from "@components/Items";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const imagesForTopContainer: itemsImageSource[] = [
    {
      desktop: "/img/desktop/image-deep-earth.jpg",
      mobile: "/img/mobile/image-deep-earth.jpg",
      title: "deep earth",
    },
    {
      desktop: "/img/desktop/image-night-arcade.jpg",
      mobile: "/img/mobile/image-night-arcade.jpg",
      title: "night arcade",
    },
    {
      desktop: "/img/desktop/image-soccer-team.jpg",
      mobile: "/img/mobile/image-soccer-team.jpg",
      title: "soccer team vr",
    },
    {
      desktop: "/img/desktop/image-grid.jpg",
      mobile: "/img/mobile/image-grid.jpg",
      title: "the grid",
    },
  ];

  const imagesForBottomContainer: itemsImageSource[] = [
    {
      desktop: "/img/desktop/image-from-above.jpg",
      mobile: "/img/mobile/image-from-above.jpg",
      title: "from up above vr",
    },
    {
      desktop: "/img/desktop/image-pocket-borealis.jpg",
      mobile: "/img/mobile/image-pocket-borealis.jpg",
      title: "pocket borealis",
    },
    {
      desktop: "/img/desktop/image-curiosity.jpg",
      mobile: "/img/mobile/image-curiosity.jpg",
      title: "the curiosity",
    },
    {
      desktop: "/img/desktop/image-fisheye.jpg",
      mobile: "/img/mobile/image-fisheye.jpg",
      title: "make it fisheye",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* Menu/Logo Container */}
          <Menu />
          {/* Mobile Menu */}

          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>

      {/* Feature Section  */}
      <section id="feature">
        {/* Feature Container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          <picture>
            <img src="/img/desktop/image-interactive.jpg" alt="interactive" />
          </picture>

          {/* Text Container */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>

            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* Creations Section */}
      <section id="creations">
        {/* Creations Container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/* Creations Header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button className="hidden btn md:block">See All</button>
          </div>
          {/* Items Container 1 */}
          <div className="item-container">
            {/* Items */}
            {imagesForTopContainer.map(({ desktop, mobile, title }) => (
              <Items
                key={uuidv4()}
                desktop={desktop}
                mobile={mobile}
                title={title}
              />
            ))}
          </div>
          {/* Items Container 2 */}
          <div className="item-container mt-10">
            {/* Items */}
            {imagesForBottomContainer.map(({ desktop, mobile, title }) => (
              <Items
                key={uuidv4()}
                desktop={desktop}
                mobile={mobile}
                title={title}
              />
            ))}
          </div>
          {/* Bottom Button */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        {/* Container */}
        <div className="container max-w-6xl py-10 mx-auto">
          {/* Footer flex container */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* Menu and Logo Container */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* Logo */}
              <div className="h-8">
                <picture>
                  <img
                    src="/img/logo.svg"
                    alt="logo"
                    className="w-44 md:scroll-ml-32"
                  />
                </picture>
              </div>

              {/* Menu Container */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* Item 1 */}
                <div className="h-10 group">
                  <Link href="#">
                    <a>About</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 2 */}
                <div className="h-10 group">
                  <Link href="#">
                    <a>Careers</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 3 */}
                <div className="h-10 group">
                  <Link href="#">
                    <a>Events</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 4 */}
                <div className="h-10 group">
                  <Link href="#">
                    <a>Products</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 5 */}
                <div className="h-10 group">
                  <Link href="#">
                    <a>Support</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/* Social and Copy Container */}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500 ">
              {/* Icons Container */}
              <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                {/* Icon 1 */}
                <div className="h-8 group">
                  <Link href={"#"} passHref>
                    <picture>
                      <img
                        src="/img/icon-facebook.svg"
                        alt="facebook"
                        className="h-6"
                      />
                    </picture>
                  </Link>
                </div>

                {/* Icon 2 */}
                <div className="h-8 group">
                  <Link href={"#"} passHref>
                    <picture>
                      <img
                        src="/img/icon-twitter.svg"
                        alt="twitter"
                        className="h-6"
                      />
                    </picture>
                  </Link>
                </div>

                {/* Icon 1 */}
                <div className="h-8 group">
                  <Link href={"#"} passHref>
                    <picture>
                      <img
                        src="/img/icon-pinterest.svg"
                        alt="pinterest"
                        className="h-6"
                      />
                    </picture>
                  </Link>
                </div>

                {/* Icon 1 */}
                <div className="h-8 group">
                  <Link href={"#"} passHref>
                    <picture>
                      <img
                        src="/img/icon-instagram.svg"
                        alt="instagram"
                        className="h-6"
                      />
                    </picture>
                  </Link>
                </div>
              </div>

              {/* Copyright Container */}
              <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
