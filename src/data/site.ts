/**
 * Single source of truth for site copy. Swapping in final client-approved
 * content means editing this file only — pages read from it.
 */

export const company = {
  name: 'Dynamic Delta Group',
  short: 'Dynamic Delta',
  tagline: 'Quality You Deserve, & Dependability You Can Count On',
  founded: 2005,
  chairman: 'Abdullah Mohammad Abdalla',
  address: 'Office 915, The Metropolis Tower, Business Bay, Dubai, UAE',
  phones: ['+971 4 578 6674', '+971 4 572 6926'],
  email: 'info@dynamicdelta.net',
  hours: 'Mon – Sat · 08:00 – 17:00',
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

/** Photography is placeholder — swap `image` for real project shots. */
export const services = [
  {
    id: 'electromechanical',
    index: '01',
    title: 'Electromechanical Works',
    summary:
      'Full-scope MEP delivery — HVAC, building management systems, fire protection and plumbing, engineered and installed to specification.',
    points: ['HVAC & Chilled Water', 'Building Management Systems', 'Fire Protection', 'Plumbing & Drainage'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'electrical',
    index: '02',
    title: 'Electrical & Power Systems',
    summary:
      'Transmission and distribution up to 132kV, LV switchgear manufacturing, substations and full-cycle commissioning.',
    points: ['MV & HV up to 132kV', 'LV Switchgear Manufacturing', 'Substations & Transformers', 'Testing & Commissioning'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'automation',
    index: '03',
    title: 'Automation Systems',
    summary:
      'PLC, SCADA and distributed control systems that give operators precise, continuous command of plant and building assets.',
    points: ['PLC Programming', 'SCADA Integration', 'Distributed Control', 'ELV & Security Systems'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'lpg',
    index: '04',
    title: 'LPG Distribution',
    summary:
      'Design, installation and maintenance of centralised LPG networks for residential, hospitality and industrial clients.',
    points: ['Centralised Networks', 'Storage & Bulk Supply', 'Safety Certification', 'Scheduled Maintenance'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'interiors',
    index: '05',
    title: 'Interior Design & Fit Out',
    summary:
      'Turnkey interiors from concept through handover — joinery, finishes and services coordinated under one contract.',
    points: ['Concept & Detailing', 'Bespoke Joinery', 'Turnkey Fit Out', 'Snagging & Handover'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'facilities',
    index: '06',
    title: 'Facilities Management',
    summary:
      'Hard and soft FM with planned preventive maintenance, keeping assets performing long after handover.',
    points: ['Planned Preventive Maintenance', 'Reactive Response', 'Asset Lifecycle Planning', 'Energy Optimisation'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'landscaping',
    index: '07',
    title: 'Landscaping & Pools',
    summary:
      'Hard and soft landscaping, water features and swimming pools — engineered, built and maintained in-house.',
    points: ['Soft & Hard Landscaping', 'Swimming Pools', 'Irrigation Systems', 'Water Features'],
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80',
  },
]

export const projects = [
  {
    id: 'metropolis',
    title: 'Metropolis Tower',
    sector: 'Commercial',
    location: 'Business Bay, Dubai',
    year: '2023',
    scope: 'Full MEP Package',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'marina-residences',
    title: 'Marina Residences',
    sector: 'Residential',
    location: 'Dubai Marina',
    year: '2022',
    scope: 'HVAC & Plumbing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'jebel-ali-substation',
    title: 'Jebel Ali Substation',
    sector: 'Industrial',
    location: 'Jebel Ali Free Zone',
    year: '2023',
    scope: '132kV Transmission',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'jumeirah-villas',
    title: 'Jumeirah Villas',
    sector: 'Residential',
    location: 'Jumeirah, Dubai',
    year: '2021',
    scope: 'Landscaping & Pools',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'downtown-fitout',
    title: 'Downtown Corporate Fit Out',
    sector: 'Interiors',
    location: 'Downtown Dubai',
    year: '2024',
    scope: 'Turnkey Interiors',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'hospitality-lpg',
    title: 'Hospitality LPG Network',
    sector: 'Industrial',
    location: 'Deira, Dubai',
    year: '2022',
    scope: 'Centralised LPG',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
  },
]

export const stats = [
  { value: 20, suffix: '+', label: 'Years in the Emirates' },
  { value: 450, suffix: '+', label: 'Projects Delivered' },
  { value: 7, suffix: '', label: 'Specialist Divisions' },
  { value: 132, suffix: 'kV', label: 'Transmission Capability' },
]

export const values = [
  {
    title: 'Accountable & Responsible',
    body: 'We own the outcome. Every commitment on a Dynamic Delta programme is tracked, reported and honoured.',
  },
  {
    title: 'Integrity & Honesty',
    body: 'Transparent pricing, candid reporting and no surprises at handover — the reason clients return to us.',
  },
  {
    title: 'Motivated & Professional',
    body: 'Chartered engineers and certified technicians, continuously trained across every discipline we deliver.',
  },
  {
    title: 'Safety Without Compromise',
    body: 'HSE is not a department. It is the precondition for every hour worked on every site we hold.',
  },
]

export const capabilities = [
  'HVAC',
  'Building Management Systems',
  'Fire Protection',
  'Plumbing',
  'PLC & SCADA',
  '132kV Transmission',
  'LV Switchgear',
  'LPG Distribution',
  'Interior Fit Out',
  'Facilities Management',
  'Landscaping',
  'Swimming Pools',
]
