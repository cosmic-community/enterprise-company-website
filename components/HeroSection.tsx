import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Enterprise solutions that <span className="gradient-text">scale with you</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            From APIs to payments to analytics, we provide the robust infrastructure and tools you need to build, scale, and succeed in today's digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Case Studies
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Trusted by thousands of companies worldwide
          </div>
        </div>
      </div>
    </section>
  )
}