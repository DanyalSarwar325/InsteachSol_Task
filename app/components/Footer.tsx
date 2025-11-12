"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* 1. Logo & Social Links (Col 1) */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <div className="text-2xl font-bold text-blue-600">
              <Link href="/">Customer Support</Link>
            </div>
            <p className="text-gray-500 text-sm">
              Delivering quick, smart support for all your needs.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <FaFacebook className="w-5 h-5 hover:text-blue-600 transition" />
              <FaTwitter className="w-5 h-5 hover:text-blue-400 transition" />
              <FaInstagram className="w-5 h-5 hover:text-pink-500 transition" />
            </div>
          </div>

          {/* 2. Quick Links (Col 2) */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-ticket" className="text-gray-600 hover:text-blue-600 transition text-sm">
                  New Ticket
                </Link>
              </li>
              <li>
                <Link href="/view-tickets" className="text-gray-600 hover:text-blue-600 transition text-sm">
                  View Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company (Col 3) */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter/Call to Action (Col 4/5 - spans two columns on mobile) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join our mailing list for updates on new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              />
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition text-sm">
                <FaEnvelope className="mr-2" /> Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* --- Separator --- */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Customer Support. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}