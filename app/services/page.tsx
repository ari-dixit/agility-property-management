'use client'

import { TreePine, Sprout, Scissors, Trash2, Leaf, Wrench } from 'lucide-react'
import Link from 'next/link'

const treeServices = [
  {
    icon: TreePine,
    title: 'Tree Removal',
    description: 'Safe and efficient tree removal services for trees that are dead, diseased, or pose a hazard to your property.',
  },
  {
    icon: Scissors,
    title: 'Tree Trimming & Pruning',
    description: 'Professional tree trimming and pruning to maintain tree health, shape, and safety. We follow industry best practices.',
  },
  {
    icon: Trash2,
    title: 'Stump Grinding',
    description: 'Complete stump removal and grinding services to clear your property and prepare for new landscaping.',
  },
  {
    icon: Leaf,
    title: 'Tree Health Assessment',
    description: 'Expert evaluation of your trees to identify diseases, pests, and structural issues before they become problems.',
  },
]

const landscapingServices = [
  {
    icon: Sprout,
    title: 'Landscape Design',
    description: 'Custom landscape design services to create beautiful, functional outdoor spaces that match your vision and lifestyle.',
  },
  {
    icon: Leaf,
    title: 'Installation',
    description: 'Professional installation of plants, trees, shrubs, sod, and hardscaping elements for your property.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Regular maintenance services including mowing, edging, fertilizing, mulching, and seasonal cleanup.',
  },
  {
    icon: Sprout,
    title: 'Irrigation Systems',
    description: 'Design, installation, and repair of irrigation systems to keep your landscape healthy and beautiful year-round.',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive tree and landscaping services for residential and commercial properties throughout South Florida
          </p>
        </div>
      </div>

      {/* Tree Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tree Services</h2>
            <p className="text-xl text-gray-600">
              Expert tree care services to keep your trees healthy and your property safe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treeServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary-light/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Landscaping Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Landscaping Services</h2>
            <p className="text-xl text-gray-600">
              Transform your outdoor space with our professional landscaping services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {landscapingServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary-light/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and quote
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-primary-dark font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

