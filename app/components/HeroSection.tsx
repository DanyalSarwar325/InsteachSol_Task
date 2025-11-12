"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
           Empower Your Team to Deliver Faster, Smarter Support.
          </h1>
          <p className="text-gray-600 text-lg">
            Easily manage all your customer support tickets from one platform. 
            Create, track, and resolve tickets quickly with a modern, intuitive interface.
          </p>
          <Link 
            href="/add-ticket" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Create Ticket
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-80 md:w-[420px] h-80 md:h-[420px]">
            <Image
              src="/Image.png" // use leading slash for files in `public/`
              alt="Customer Support Image"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
