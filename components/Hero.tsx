'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/agility-property-maintenance-background.webp"
          alt="Landscaping background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          South Florida&apos;s go-to Tree and Landscaping Service
        </h1>
        
        {/* 5 Star Rating and Book Now Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-3 text-xl font-semibold">5.0</span>
          </div>

          <Link
            href="#contact"
            className="bg-primary-dark hover:bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center text-white animate-bounce">
        <p className="text-sm mb-2 opacity-90">Scroll down to see reviews</p>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  )
}

