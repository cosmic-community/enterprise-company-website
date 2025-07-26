import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TeamSection from '@/components/TeamSection'
import { getServices, getFeaturedTestimonials, getCaseStudies, getTeamMembers } from '@/lib/cosmic'

export default async function HomePage() {
  const [services, testimonials, caseStudies, teamMembers] = await Promise.all([
    getServices(),
    getFeaturedTestimonials(),
    getCaseStudies(),
    getTeamMembers(),
  ])

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection services={services} />
      <TestimonialsSection testimonials={testimonials} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TeamSection teamMembers={teamMembers.slice(0, 3)} />
    </div>
  )
}