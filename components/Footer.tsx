import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/agility-property-maintenance-logo.webp"
                alt="Agility Property Maintenance Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-lg font-bold">Agility Property Maintenance</span>
            </div>
            <p className="text-gray-400">
              South Florida's go-to Tree and Landscaping Service. Professional, reliable, and quality work.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">South Florida</p>
            <p className="text-gray-400 mb-4">Serving the entire region</p>
            <a
              href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCupMjKsLCoyYLRSNaiwsEixNDA0TzQ0TUxJS0kztjKoSEs1szRJNTZKSrM0NjBMNvCSSUzPzMksqVQoKMovSC0CMnITM_NKUvMS85JTASkhGwI&q=agility+property+maintenance&rlz=1C5CHFA_enUS1047US1047&oq=agility+property&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyCQgCEEUYORiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDMyNTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&zx=1766007546266&no_sw_cr=1#lrd=0x88d9017a15adfdf3:0xfe694e32bf9301c0,1,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary transition-colors"
            >
              View Google Reviews
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Agility Property Maintenance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

