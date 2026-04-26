export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavLink {
  label: string
  targetId: string
}

export interface NavigationConfig {
  brandMark: string
  links: NavLink[]
}

export interface HeroConfig {
  wordmarkText: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  descriptionLine1: string
  descriptionLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface PhilosophyConfig {
  eyebrow: string
  title: string
  body: string
  rollingWords: string[]
}

export interface ProjectMeta {
  label: string
  value: string
}

export interface ProjectData {
  id: string
  title: string
  location: string
  year: string
  image: string
  subtitle: string
  meta: ProjectMeta[]
  paragraphs: string[]
}

export interface GalleryConfig {
  sectionLabel: string
  title: string
  projects: ProjectData[]
}

export interface MediumItem {
  cn: string
  en: string
  description: string
}

export interface MediumsConfig {
  sectionLabel: string
  items: MediumItem[]
}

export interface FooterEntry {
  text: string
  href?: string
}

export interface FooterColumn {
  heading: string
  entries: FooterEntry[]
}

export interface FooterConfig {
  visionText: string
  brandName: string
  columns: FooterColumn[]
  copyright: string
  videoPath: string
}

export interface ProjectDetailConfig {
  backLabel: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Elite Care and Support | Compassionate Care Across the UK",
  siteDescription: "Elite Care and Support provides personalised, compassionate home healthcare, specialised care, and elderly care services delivered with dignity across the UK. 15+ years of healthcare excellence.",
}

export const navigationConfig: NavigationConfig = {
  brandMark: "EC",
  links: [
    { label: "Services", targetId: "gallery" },
    { label: "Approach", targetId: "philosophy" },
    { label: "About", targetId: "mediums" },
    { label: "Contact", targetId: "footer" },
  ],
}

export const heroConfig: HeroConfig = {
  wordmarkText: "ELITE CARE\nAND SUPPORT",
  eyebrow: "COMPASSIONATE CARE AGENCY",
  titleLine1: "Care With",
  titleLine2: "Dignity",
  descriptionLine1: "Personalised, compassionate healthcare",
  descriptionLine2: "delivered with dignity across the UK.",
  ctaText: "Our Services",
  ctaTargetId: "gallery",
}

export const philosophyConfig: PhilosophyConfig = {
  eyebrow: "OUR APPROACH",
  title: "Why Elite Care and Support",
  body: "For over 15 years, Elite Care and Support has been at the forefront of compassionate healthcare in the UK. We believe every individual deserves care that honours their dignity, preserves their independence, and enriches their quality of life. Our team of dedicated professionals delivers personalised support tailored to each client's unique needs.",
  rollingWords: ["COMPASSION", "DIGNITY", "RESPECT", "CARE", "EXCELLENCE", "TRUST"],
}

export const galleryConfig: GalleryConfig = {
  sectionLabel: "OUR SERVICES / 004",
  title: "Care Services",
  projects: [
    {
      id: "home-healthcare",
      title: "Home Care",
      location: "Nationwide",
      year: "Core",
      image: "images/project-1.jpg",
      subtitle: "Tailored care in the comfort of your own home",
      meta: [
        { label: "TYPE", value: "Home Healthcare" },
        { label: "FOCUS", value: "Personalised Support" },
        { label: "COVERAGE", value: "Across the UK" },
      ],
      paragraphs: [
        "Our home healthcare service brings professional, compassionate care directly to your doorstep. Whether you need support with daily activities, medication management, or companionship, our trained carers provide personalised assistance that respects your routines and preferences.",
        "We understand that there's no place like home. That's why we work closely with families and healthcare professionals to create bespoke care plans that enable our clients to live independently and comfortably in their own familiar surroundings.",
        "Every carer undergoes rigorous training and background checks, ensuring the highest standards of safety and professionalism. We match carers to clients based on personality, skills, and specific care requirements.",
      ],
    },
    {
      id: "specialised-care",
      title: "Specialist",
      location: "Nationwide",
      year: "Core",
      image: "images/project-2.jpg",
      subtitle: "Medical and non-medical specialist support",
      meta: [
        { label: "TYPE", value: "Specialised Care" },
        { label: "FOCUS", value: "Complex Conditions" },
        { label: "EXPERTISE", value: "Medical & Non-Medical" },
      ],
      paragraphs: [
        "Our specialised care services are designed for individuals with complex medical conditions, disabilities, or recovery needs. We provide both medical and non-medical support, delivered by carers with advanced training in specialist areas.",
        "From dementia care and palliative support to post-operative recovery and neurological conditions, our team has the expertise to manage complex care requirements with sensitivity and clinical competence.",
        "We collaborate with NHS teams, GPs, and specialist consultants to ensure seamless, coordinated care that addresses every aspect of our clients' health and wellbeing.",
      ],
    },
    {
      id: "elderly-care",
      title: "Elderly Care",
      location: "Nationwide",
      year: "Core",
      image: "images/project-3.jpg",
      subtitle: "Comfort, independence and respect for seniors",
      meta: [
        { label: "TYPE", value: "Elderly Care" },
        { label: "FOCUS", value: "Dignity & Independence" },
        { label: "APPROACH", value: "Person-Centred" },
      ],
      paragraphs: [
        "Our elderly care services are built on a foundation of respect, compassion, and understanding. We recognise that ageing brings unique challenges, and we're dedicated to helping seniors maintain their independence, dignity, and quality of life.",
        "From assistance with personal care and mobility to companionship and household support, our carers provide sensitive, attentive service that honours each individual's life story and preferences.",
        "We take time to build meaningful relationships with our clients, understanding that trust and familiarity are essential components of exceptional elderly care.",
      ],
    },
    {
      id: "live-in-care",
      title: "Live-in Care",
      location: "Nationwide",
      year: "Core",
      image: "images/project-4.jpg",
      subtitle: "Continuous support around the clock",
      meta: [
        { label: "TYPE", value: "Live-in Care" },
        { label: "FOCUS", value: "24/7 Support" },
        { label: "COVERAGE", value: "Round the Clock" },
      ],
      paragraphs: [
        "Our live-in care service provides continuous, around-the-clock support for those who need comprehensive assistance. A dedicated carer lives with you in your home, ensuring help is always available whenever it's needed.",
        "This service is ideal for individuals with advanced care needs, those recovering from serious illness or surgery, or anyone who simply feels more secure knowing a trained professional is always present.",
        "Live-in care offers a genuine alternative to residential care homes, allowing clients to remain in their beloved homes while receiving the full support they need. Our carers become trusted companions, not just support workers.",
      ],
    },
  ],
}

export const mediumsConfig: MediumsConfig = {
  sectionLabel: "WHAT WE OFFER",
  items: [
    {
      cn: "Personal",
      en: "PERSONAL CARE",
      description: "Assistance with bathing, dressing, grooming, and personal hygiene delivered with sensitivity and respect for your dignity.",
    },
    {
      cn: "Respite",
      en: "RESPITE CARE",
      description: "Temporary relief for family carers, providing professional care so primary caregivers can rest and recharge.",
    },
    {
      cn: "Dementia",
      en: "DEMENTIA CARE",
      description: "Specialist support for individuals living with dementia, focusing on familiar routines, comfort, and meaningful engagement.",
    },
    {
      cn: "Palliative",
      en: "PALLIATIVE CARE",
      description: "Compassionate end-of-life care that prioritises comfort, dignity, and quality of life for both clients and their families.",
    },
    {
      cn: "Companionship",
      en: "COMPANIONSHIP",
      description: "Friendly social interaction, emotional support, and assistance with activities to reduce isolation and enhance wellbeing.",
    },
  ],
}

export const footerConfig: FooterConfig = {
  visionText: "For over 15 years, Elite Care and Support has been transforming lives through compassionate, personalised healthcare. We believe everyone deserves to live with dignity, independence, and comfort in their own home. Our commitment to excellence drives everything we do.",
  brandName: "Elite Care and Support",
  columns: [
    {
      heading: "SERVICES",
      entries: [
        { text: "Home Healthcare", href: "#gallery" },
        { text: "Specialised Care", href: "#gallery" },
        { text: "Elderly Care", href: "#gallery" },
        { text: "Live-in Care", href: "#gallery" },
      ],
    },
    {
      heading: "COMPANY",
      entries: [
        { text: "About Us", href: "#philosophy" },
        { text: "Our Approach", href: "#philosophy" },
        { text: "Leadership", href: "#mediums" },
        { text: "Careers", href: "#" },
      ],
    },
    {
      heading: "CONTACT",
      entries: [
        { text: "office@elitecas.co.uk", href: "mailto:office@elitecas.co.uk" },
        { text: "The Work Place\nHeighington Lane\nAycliffe Business Park\nNewton Aycliffe\nCounty Durham, DL5 6AH\nUnited Kingdom" },
      ],
    },
  ],
  copyright: "© 2026 Elite Care and Support — Compassionate Healthcare",
  videoPath: "",
}

export const projectDetailConfig: ProjectDetailConfig = {
  backLabel: "← Back",
}

export function getProjectById(id: string): ProjectData | undefined {
  return galleryConfig.projects.find((p) => p.id === id)
}
