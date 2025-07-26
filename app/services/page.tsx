import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import { Service } from '@/types'

export const metadata = {
  title: 'Services - Enterprise Company',
  description: 'Explore our comprehensive suite of enterprise solutions including API Platform, Payment Processing, and Analytics Dashboard.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Powerful tools and services designed to scale with your business. From APIs to payments to analytics, we provide the infrastructure you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}