import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import { TeamMember } from '@/types'

export const metadata = {
  title: 'Team - Enterprise Company',
  description: 'Meet the talented team behind our enterprise solutions. Leaders in engineering, design, product, and customer success.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  // Group team members by department
  const departmentGroups = teamMembers.reduce((acc, member) => {
    const dept = member.metadata?.department?.value || 'Other'
    if (!acc[dept]) {
      acc[dept] = []
    }
    acc[dept].push(member)
    return acc
  }, {} as Record<string, TeamMember[]>)

  const departmentOrder = ['Leadership', 'Engineering', 'Design', 'Product', 'Marketing', 'Sales']
  const sortedDepartments = departmentOrder.filter(dept => departmentGroups[dept])
  const otherDepartments = Object.keys(departmentGroups).filter(dept => !departmentOrder.includes(dept))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a diverse group of passionate individuals working together to build the future of enterprise technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members by Department */}
      {[...sortedDepartments, ...otherDepartments].map((department) => {
        const membersInDepartment = departmentGroups[department]
        if (!membersInDepartment) return null
        
        return (
          <section key={department} className="section-padding">
            <div className="max-w-7xl mx-auto container-padding">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                {department}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {membersInDepartment.map((member: TeamMember) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}