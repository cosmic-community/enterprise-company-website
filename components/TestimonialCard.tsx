import { Testimonial } from '@/types'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const customerName = testimonial.metadata?.customer_name || ''
  const customerTitle = testimonial.metadata?.customer_title || ''
  const companyName = testimonial.metadata?.company_name || ''
  const companyLogo = testimonial.metadata?.company_logo
  const quote = testimonial.metadata?.testimonial_quote || ''
  const rating = testimonial.metadata?.rating

  const ratingValue = rating ? parseInt(rating.key) : 5

  return (
    <div className="card bg-white">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < ratingValue
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Customer Info */}
      <div className="flex items-center gap-4">
        {companyLogo && (
          <img
            src={`${companyLogo.imgix_url}?w=60&h=60&fit=crop&auto=format,compress`}
            alt={`${companyName} logo`}
            width={48}
            height={48}
            className="rounded-lg object-contain"
          />
        )}
        <div>
          <div className="font-semibold text-gray-900">{customerName}</div>
          <div className="text-sm text-gray-600">
            {customerTitle && `${customerTitle}, `}{companyName}
          </div>
        </div>
      </div>
    </div>
  )
}