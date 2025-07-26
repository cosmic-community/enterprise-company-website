import { CaseStudy } from '@/types'
import CaseStudyCard from './CaseStudyCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  if (caseStudies.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real results from real customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies use our platform to scale their operations and achieve remarkable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.slice(0, 2).map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}