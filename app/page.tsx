'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Reviews />
      <Gallery />
      <ContactForm />
    </div>
  )
}

