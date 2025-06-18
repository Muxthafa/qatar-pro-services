"use client";

import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const linkClasses = (href, isMobile = false) =>
    clsx(
      "font-inter-tight-regular transition-colors",
      isMobile ? "block py-2" : "",
      pathname === href
        ? "text-[#DFFF4E]"
        : "text-[#B1B1B1] hover:text-[#DFFF4E]"
    );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1B1B1B] border-b border-[#4B4B4B] z-50">
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          {/* Use Next.js Image component for optimized image loading */}
          <Image
            src="/images/logo.png"
            alt="ITS"
            width={76} // Set width of the image (for Next.js to optimize)
            height={76} // Set height of the image (for Next.js to optimize)
            className="brightness-0 invert sepia hue-rotate-[60deg] saturate-[400%]"
          />
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={linkClasses(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-[#DFFF4E]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1B1B1B] border-t border-[#4B4B4B] px-8 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={linkClasses(item.href, true)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
