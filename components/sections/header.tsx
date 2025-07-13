"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  isScrolled: boolean
}

export function Header({ isScrolled }: HeaderProps) {
  return (
    <header
      className={`bg-white shadow-sm py-4 px-8 ${isScrolled ? "fixed z-40 w-full shadow-lg" : ""}`}
      style={isScrolled ? { top: "33px" } : {}}
    >
      <div className="container mx-auto px-4">
        {/* Logo and Language Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-36 flex items-center justify-center">
              <img
                src="/images/eci-logo.png"
                alt="Eko Club International 25th Anniversary Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
                ECI@25
              </h1>
              <p className="text-sm text-gray-600">25th International Convention</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" className="bg-pink-500 hover:bg-pink-600 text-white text-xl">
              Register Now
            </Button>
          </div>
        </div>

        {/* Navigation Menu Row */}
        <nav className="flex justify-start">
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium text-xl">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-purple-600 font-medium text-xl">
                About <ChevronDown className="ml-1 h-5 w-5" />
              </button>
            </div>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium text-xl">
              Agenda
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium text-xl">
              Speakers
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium text-xl">
              Venue
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium text-xl">
              Sponsors
            </Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium text-xl">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
