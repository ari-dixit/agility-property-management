'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

interface Review {
  author: string
  rating: number
  text: string
  time: string
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Since Google doesn't provide a public API for reviews, we'll use placeholder data
    // In production, you would need to use a service like Google Places API or scrape reviews
    // For now, we'll use sample reviews that match typical Google review format
    
    // Simulate API call
    setTimeout(() => {
      setReviews([
        {
          author: 'John Smith',
          rating: 5,
          text: 'Excellent service! The team was professional, punctual, and did an amazing job with our landscaping. Highly recommend!',
          time: '2 weeks ago'
        },
        {
          author: 'Maria Garcia',
          rating: 5,
          text: 'Agility Property Maintenance transformed our yard. The tree trimming was done perfectly and the landscaping looks beautiful. Great value for the money.',
          time: '1 month ago'
        },
        {
          author: 'Robert Johnson',
          rating: 5,
          text: 'Outstanding work! They removed several large trees safely and efficiently. The crew was respectful of our property and cleaned up everything afterward.',
          time: '3 weeks ago'
        },
        {
          author: 'Sarah Williams',
          rating: 5,
          text: 'Professional, reliable, and affordable. They did a complete landscape redesign and it exceeded our expectations. Will definitely use them again!',
          time: '1 month ago'
        },
        {
          author: 'Michael Brown',
          rating: 5,
          text: 'Best landscaping company in South Florida! Quick response, fair pricing, and exceptional quality. Our neighbors are asking who did our yard!',
          time: '2 months ago'
        },
        {
          author: 'Jennifer Davis',
          rating: 5,
          text: 'Amazing experience from start to finish. They helped us plan the perfect landscape design and executed it flawlessly. Couldn\'t be happier!',
          time: '3 weeks ago'
        }
      ])
      setLoading(false)
    }, 500)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-dark"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCupMjKsLCoyYLRSNaiwsEixNDA0TzQ0TUxJS0kztjKoSEs1szRJNTZKSrM0NjBMNvCSSUzPzMksqVQoKMovSC0CMnITM_NKUvMS85JTASkhGwI&q=agility+property+maintenance&rlz=1C5CHFA_enUS1047US1047&oq=agility+property&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyCQgCEEUYORiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDMyNTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&zx=1766007546266&no_sw_cr=1#lrd=0x88d9017a15adfdf3:0xfe694e32bf9301c0,1,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary-dark hover:text-primary font-semibold text-lg"
          >
            Read More Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}

