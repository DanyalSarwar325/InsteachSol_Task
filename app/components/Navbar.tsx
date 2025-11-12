"use client";

import Link from "next/link";
import { useState } from "react";
// 👈 Import usePathname to get the current URL path
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // 👈 Get the current path

  // Helper function to determine if a link is active
  const isActive = (href: string) => pathname === href;

  // Base classes for navigation links
  const baseClasses = "hover:text-blue-600 transition duration-150";
  // Active classes for the link that matches the current page
  const activeClasses = "text-blue-600 underline underline-offset-4";

  return (
    // The main nav is fixed at the top
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Customer Support</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black font-medium">
          <Link
            href="/"
            className={`block ${isActive("/") ? activeClasses : "text-black"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/add-ticket"
            // Apply activeClasses if the path matches, otherwise apply baseClasses
            className={isActive("/add-ticket") ? activeClasses : baseClasses}
          >
            Add Ticket
          </Link>

          <Link
            href="/view-tickets"
            className={isActive("/view-tickets") ? activeClasses : baseClasses}
          >
            View Tickets
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
            Try For Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Also updated for active state) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-3 space-y-3">
          <Link
            href="/"
            className={`block ${
              isActive("/") ? activeClasses : "text-gray-700"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/add-ticket"
            className={`block ${
              isActive("/add-ticket") ? activeClasses : "text-gray-700"
            }`}
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Add Ticket
          </Link>

          <Link
            href="/view-tickets"
            className={`block ${
              isActive("/view-tickets") ? activeClasses : "text-gray-700"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            View Tickets
          </Link>

          <hr />

          <button className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            Try For Free
          </button>
        </div>
      )}
    </nav>
  );
}
