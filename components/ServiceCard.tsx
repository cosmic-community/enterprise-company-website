import { Service } from '@/types'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const serviceName = service.metadata?.service_name || service.title
  const shortDescription = service.metadata?.short_description || ''
  const serviceIcon = service.metadata?.service_icon
  const keyFeatures = service.metadata?.key_features || []
  const startingPrice = service.metadata?.starting_price || ''
  const serviceStatus = service.metadata?.service_status

  return (
    <div className="card group hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        {serviceIcon && (
          <img
            src={`${serviceIcon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={serviceName}
            width={80}
            height={80}
            className="rounded-lg"
          />
        )}
        {serviceStatus && (
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            {serviceStatus.value}
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {serviceName}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {shortDescription}
      </p>

      {keyFeatures.length > 0 && (
        <div className="mb-6">
          <ul className="space-y-2">
            {keyFeatures.slice(0, 3).map((feature: string, index: number) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {startingPrice && (
        <div className="mb-4">
          <p className="text-lg font-bold text-gray-900">{startingPrice}</p>
        </div>
      )}

      <Link 
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}