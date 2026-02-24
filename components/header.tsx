"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-midnight/95 backdrop-blur-md shadow-lg shadow-midnight/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10">
              {/* Stylized White Tree icon */}
              <svg
                viewBox="0 0 40 40"
                className="h-full w-full text-gold transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
              >
                <path d="M20 2C20 2 18 8 18 12C18 14 19 16 20 18C21 16 22 14 22 12C22 8 20 2 20 2Z" />
                <path d="M20 18C20 18 14 20 12 24C10 28 12 32 14 34C14 30 16 26 20 24C24 26 26 30 26 34C28 32 30 28 28 24C26 20 20 18 20 18Z" />
                <path d="M20 24L20 38" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M14 32C14 32 16 30 20 30C24 30 26 32 26 32" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold tracking-wide text-parchment">
                White Tree Systems
              </span>
              <span className="font-serif text-xs tracking-widest text-gold/80 uppercase">
                SAP Consultancy of Gondor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="font-serif text-parchment/80 hover:text-gold transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="font-serif text-parchment/80 hover:text-gold transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
            <a
              href="https://www.sap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-parchment/80 hover:text-gold transition-colors duration-300 relative group"
            >
              SAP Partner
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
            <Link
              href="/#contact"
              className="btn-gold text-sm px-6 py-2.5"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-parchment p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-midnight/98 backdrop-blur-lg border-t border-gold/20 animate-fade-in">
            <div className="flex flex-col p-6 gap-4">
              <Link
                href="/services"
                className="font-serif text-parchment/80 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="font-serif text-parchment/80 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="https://www.sap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-parchment/80 hover:text-gold transition-colors py-2"
              >
                SAP Partner
              </a>
              <Link
                href="/#contact"
                className="btn-gold text-sm px-6 py-3 text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
