// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.metadata?.case_study_title || caseStudy.title} - Enterprise Company`,
    description: `Learn how ${caseStudy.metadata?.client_name || 'our client'} achieved success with our enterprise solutions.`,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = caseStudy.metadata?.case_study_title || caseStudy.title
  const clientName = caseStudy.metadata?.client_name || ''
  const clientLogo = caseStudy.metadata?.client_logo
  const industry = caseStudy.metadata?.industry
  const challenge = caseStudy.metadata?.challenge || ''
  const solution = caseStudy.metadata?.solution || ''
  const results = caseStudy.metadata?.results || ''
  const keyMetrics = caseStudy.metadata?.key_metrics || {}
  const servicesUsed = caseStudy.metadata?.services_used || []
  const featuredImage = caseStudy.metadata?.featured_image

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {industry && (
                <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {industry.value}
                </div>
              )}
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              {clientLogo && (
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={`${clientLogo.imgix_url}?w=120&h=60&fit=crop&auto=format,compress`}
                    alt={`${clientName} logo`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                  <div className="text-gray-600">
                    <p className="font-medium">{clientName}</p>
                  </div>
                </div>
              )}
            </div>
            {featuredImage && (
              <div className="flex justify-center">
                <img
                  src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                  alt={title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      {Object.keys(keyMetrics).length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Results at a Glance
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(keyMetrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {value}
                  </div>
                  <div className="text-gray-600 font-medium capitalize">
                    {key.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge, Solution, Results */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="space-y-16">
            {/* Challenge */}
            {challenge && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: challenge }}
                />
              </div>
            )}

            {/* Solution */}
            {solution && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: solution }}
                />
              </div>
            )}

            {/* Results */}
            {results && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: results }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Used */}
      {servicesUsed.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Services Used
              </h2>
              <p className="text-xl text-gray-600">
                The solutions that powered this success story
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesUsed.map((service: any) => (
                <div key={service.id} className="card">
                  {service.metadata?.service_icon && (
                    <img
                      src={`${service.metadata.service_icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.metadata?.service_name || service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.metadata?.short_description || ''}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
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
            Ready to achieve similar results?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how our enterprise solutions can help your business scale and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Get Started
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