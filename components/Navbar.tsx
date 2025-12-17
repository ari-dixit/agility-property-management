'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/agility-property-maintenance-logo.webp"
              alt="Agility Property Maintenance Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link href="/" className="text-gray-700 hover:text-primary-dark transition-colors font-medium py-2">
              Home
            </Link> */}
            <Link href="/services" className="text-gray-700 hover:text-primary-dark transition-colors font-medium py-2">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-primary-dark transition-colors font-medium py-2">
              Gallery
            </Link>
            <Link 
              href="/#contact" 
              className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-primary-dark transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block text-gray-700 hover:text-primary-dark transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/gallery" 
              className="block text-gray-700 hover:text-primary-dark transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/#contact" 
              className="block bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

