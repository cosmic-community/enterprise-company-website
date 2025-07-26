import { TeamMember } from '@/types'
import TeamMemberCard from './TeamMemberCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  if (teamMembers.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a diverse group of passionate individuals working together to build the future of enterprise technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/team" className="btn-primary">
            Meet the Full Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}