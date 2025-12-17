'use client'

import Image from 'next/image'
import Link from 'next/link'

// Placeholder images - in production, replace with actual gallery images
const galleryImages = [
  { id: 1, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 1' },
  { id: 2, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 2' },
  { id: 3, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 3' },
  { id: 4, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 4' },
  { id: 5, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 5' },
  { id: 6, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 6' },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">See the quality of our landscaping and tree services</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-primary-dark hover:bg-primary text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

