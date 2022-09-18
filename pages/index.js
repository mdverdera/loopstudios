import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Menu from "@components/Menu";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12 md:px-0">
          {/* Menu/Logo Container */}
          <Menu />
          {/* Mobile Menu */}

          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>
    </>
  );
}
