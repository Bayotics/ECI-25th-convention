"use client"

import { Button } from "@/components/ui/button"

interface TopBarProps {
  isScrolled: boolean
}

export function TopBar({ isScrolled }: TopBarProps) {
  return (
    <div
      className={`bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 ${
        isScrolled ? "fixed top-0 z-50 w-full" : ""
      }`}
    >
      <div className="container mx-auto flex justify-center items-center text-sm">
        <div className="flex items-center space-x-4">
          <span>ECI@25: Bridging Generations, Building Communities | Newark, NJ | Sept 18-21, 2025</span>
          {/* <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
            Register
          </Button> */}
        </div>
      </div>
    </div>
  )
}
