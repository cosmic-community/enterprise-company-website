import { TeamMember } from '@/types'
import { Linkedin, Twitter } from 'lucide-react'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { metadata } = member

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Profile Photo */}
      {metadata?.profile_photo?.imgix_url && (
        <div className="mb-4">
          <img
            src={`${metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={metadata?.full_name || 'Team member photo'}
            className="w-20 h-20 rounded-full mx-auto object-cover"
          />
        </div>
      )}

      {/* Member Info */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {metadata?.full_name || member.title}
        </h3>
        
        {metadata?.job_title && (
          <p className="text-primary-600 font-medium mb-2">
            {metadata.job_title}
          </p>
        )}

        {metadata?.department?.value && (
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-4">
            {metadata.department.value}
          </span>
        )}

        {/* Bio */}
        {metadata?.bio && (
          <div 
            className="text-gray-600 text-sm leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: metadata.bio }}
          />
        )}

        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          {metadata?.linkedin_url && (
            <a
              href={metadata.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              aria-label={`${metadata?.full_name || member.title}'s LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          
          {metadata?.twitter_handle && (
            <a
              href={`https://twitter.com/${metadata.twitter_handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              aria-label={`${metadata?.full_name || member.title}'s Twitter`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}