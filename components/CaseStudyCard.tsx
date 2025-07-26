import { CaseStudy } from '@/types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const title = caseStudy.metadata?.case_study_title || caseStudy.title
  const clientName = caseStudy.metadata?.client_name || ''
  const clientLogo = caseStudy.metadata?.client_logo
  const industry = caseStudy.metadata?.industry
  const featuredImage = caseStudy.metadata?.featured_image
  const keyMetrics = caseStudy.metadata?.key_metrics || {}

  // Get the first 2 key metrics to display
  const topMetrics = Object.entries(keyMetrics).slice(0, 2)

  return (
    <div className="card group hover:shadow-lg transition-all duration-300">
      {featuredImage && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={title}
            width={600}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        {clientLogo && (
          <img
            src={`${clientLogo.imgix_url}?w=120&h=60&fit=contain&auto=format,compress`}
            alt={`${clientName} logo`}
            width={120}
            height={60}
            className="object-contain"
          />
        )}
        {industry && (
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
            {industry.value}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {topMetrics.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {topMetrics.map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold gradient-text">
                {value}
              </div>
              <div className="text-sm text-gray-600 capitalize">
                {key.replace(/_/g, ' ')}
              </div>
            </div>
          ))}
        </div>
      )}

      <Link 
        href={`/case-studies/${caseStudy.slug}`}
        className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200"
      >
        Read case study <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}