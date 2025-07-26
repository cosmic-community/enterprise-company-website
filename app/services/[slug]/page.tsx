// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.metadata?.service_name || service.title} - Enterprise Company`,
    description: service.metadata?.short_description || `Learn more about our ${service.title} service.`,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const serviceName = service.metadata?.service_name || service.title
  const shortDescription = service.metadata?.short_description || ''
  const detailedDescription = service.metadata?.detailed_description || ''
  const keyFeatures = service.metadata?.key_features || []
  const startingPrice = service.metadata?.starting_price || ''
  const serviceIcon = service.metadata?.service_icon
  const serviceStatus = service.metadata?.service_status

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {serviceStatus && (
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {serviceStatus.value}
                </div>
              )}
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {serviceName}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {shortDescription}
              </p>
              {startingPrice && (
                <div className="mb-8">
                  <p className="text-2xl font-bold text-gray-900">{startingPrice}</p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Get Started
                </button>
                <button className="btn-secondary">
                  Contact Sales
                </button>
              </div>
            </div>
            {serviceIcon && (
              <div className="flex justify-center">
                <img
                  src={`${serviceIcon.imgix_url}?w=500&h=500&fit=crop&auto=format,compress`}
                  alt={serviceName}
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      {detailedDescription && (
        <section className="section-padding">
          <div className="max-w-4xl mx-auto container-padding">
            <div 
              className="prose prose-lg max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: detailedDescription }}
            />
          </div>
        </section>
      )}

      {/* Key Features */}
      {keyFeatures.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to succeed with {serviceName}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started with {serviceName}?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of companies that trust our platform to power their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}