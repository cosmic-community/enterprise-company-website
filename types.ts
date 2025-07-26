// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
}

// Service object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    detailed_description?: string;
    service_icon?: {
      url: string;
      imgix_url: string;
    };
    key_features?: string[];
    starting_price?: string;
    service_status?: {
      key: string;
      value: string;
    };
  };
}

// Team member object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    job_title?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    department?: {
      key: string;
      value: string;
    };
    linkedin_url?: string;
    twitter_handle?: string;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    customer_title?: string;
    company_name?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    testimonial_quote?: string;
    rating?: {
      key: string;
      value: string;
    };
    featured?: boolean;
  };
}

// Case study object type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    case_study_title?: string;
    client_name?: string;
    client_logo?: {
      url: string;
      imgix_url: string;
    };
    industry?: {
      key: string;
      value: string;
    };
    challenge?: string;
    solution?: string;
    results?: string;
    key_metrics?: Record<string, string>;
    services_used?: Service[];
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Type literals for select-dropdown values
export type ServiceStatus = 'active' | 'coming_soon' | 'beta';
export type Department = 'engineering' | 'design' | 'product' | 'marketing' | 'sales' | 'leadership';
export type Rating = '5' | '4' | '3';
export type Industry = 'technology' | 'ecommerce' | 'fintech' | 'healthcare' | 'education' | 'other';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}