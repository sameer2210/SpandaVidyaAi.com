export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly description: string;
}

export const teamMembers = [
  {
    name: 'Rahul Gupta',
    role: 'CEO & Founder',
    // image: '/rahul.jpeg',
    description:
      'Accomplished senior leader with 20+ years of experience across regulatory governance, legal advisory, aviation operations, technical education. Holds M Tech in Rf and Microwave Engg and Aeronautical Engg from IIT Kanpur and JNTU, Medical Laws from NLSIU and DBRAU, and an MBA',
  },
  {
    name: 'Dilip Parmar',
    role: 'CTO & Co-Founder',
    image: '/dilip.png',
    description:
      'PhD scholar in Electrical Engineering at IIT Kanpur focused on AI-driven healthcare systems, pulse diagnostics, machine learning, and computational research for medical technologies.',
  },
  {
    name: 'Dr. Rakesh Roshan',
    role: 'RF & Sensing Technology Expert',
    image: '/rakesh.jpeg',
    description:
      'RF and EMC specialist with 10+ years of experience in compliance testing, RF systems, and medical device validation, currently managing the NABL-accredited EMC laboratory at IIT Kanpur.',
  },
  {
    name: 'DIG Shri Mahendra Yadav, IPS',
    role: 'Board of Advisors',
    image: '/mahendra.jpeg',
    description:
      'Experienced Senior Leader handling operations, partnerships, and strategic execution for organizational growth and institutional coordination.',
  },
  {
    name: 'Dr. Jyoti Dimri',
    role: 'CVO & Ayurvedic Expert',
    image: '/jyoti.jpeg',
    description:
      'BAMS, Patanjali Ayurvedic Hospital (MHA) with expertise in Ayurvedic healthcare and patient-centered wellness practices.',
  },
  {
    name: 'Sameer Khan',
    role: 'Full Stack Developer',
    image: '/sameer.jpg',
    description:
      'Full Stack Developer contributing to the SpandaVidya AI application and website. Focused on building scalable healthcare platforms, AI-powered diagnostic systems, React, React Native, Node.js, and modern cloud-based solutions that combine artificial intelligence with Ayurveda.',
  },
  {
    name: 'Harsh Bairagi',
    role: 'Full Stack Developer',
    image: '/harsh.jpg',
    description:
      'Full stack developer focused on building scalable AI-powered healthcare platforms, modern web applications, and intelligent diagnostic systems.',
  },
] as const satisfies readonly TeamMember[];
