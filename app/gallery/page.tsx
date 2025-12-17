'use client'

import Image from 'next/image'

// Placeholder images - in production, replace with actual gallery images
const galleryImages = [
  { id: 1, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 1', category: 'Landscaping' },
  { id: 2, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 2', category: 'Tree Services' },
  { id: 3, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 3', category: 'Landscaping' },
  { id: 4, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 4', category: 'Tree Services' },
  { id: 5, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 5', category: 'Landscaping' },
  { id: 6, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 6', category: 'Tree Services' },
  { id: 7, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 7', category: 'Landscaping' },
  { id: 8, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 8', category: 'Tree Services' },
  { id: 9, src: '/agility-property-maintenance-background.webp', alt: 'Landscaping work 9', category: 'Landscaping' },
]

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600">Showcasing our previous work and transformations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

