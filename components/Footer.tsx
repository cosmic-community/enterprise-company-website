import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'API Platform', href: '/services/api-platform' },
      { name: 'Payment Processing', href: '/services/payment-processing' },
      { name: 'Analytics Dashboard', href: '/services/analytics-dashboard' },
    ],
    Company: [
      { name: 'About', href: '/team' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Careers', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Status', href: '#' },
    ],
    Legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-bold text-xl mb-4 inline-block">
              Enterprise Co
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future of enterprise technology with robust, scalable solutions.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Enterprise Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}