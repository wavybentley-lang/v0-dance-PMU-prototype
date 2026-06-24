import {
  CalendarCheck,
  Eye,
  Gift,
  Palette,
  RefreshCcw,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ProcessStep = {
  title: string
  description: string
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

/**
 * PITCH-DEMO TEMPLATE CONFIG
 * Every business-specific value lives here so the site can be re-skinned per prospect.
 * Bracketed values like [Business Name] / [Price] are intentional fill-in placeholders.
 * bookingUrl is a placeholder anchor ("#") — do NOT wire it to a real scheduler in this pass.
 */
export const brand = {
  name: "[Business Name]",
  shortName: "[Business Name]",
  artistNames: "[Artist Name(s)]",
  tagline: "[Artist Name(s)]",
  logo: "",
  bookingUrl: "#",
  phone: "[Phone Number]",
  phoneHref: "#",
  whatsappHref: "#",
  email: "[Email Address]",
  emailHref: "#",
  instagram: "[Instagram Handle]",
  instagramHref: "#",
  facebookHref: "#",
  mapsHref: "#",
  // Placeholder map embed — searches a generic city/state query, not a real address (per global constraint #3)
  mapEmbedQuery: "[City, State]",
  mapsEmbedUrl: "https://maps.google.com/maps?q=United%20States&z=4&output=embed",
  primaryLocation: "[Street Address]",
  secondaryLocation: "[City], [State] [ZIP]",
  cityLine: "",
  hours: "By appointment only",
  copyright: "\u00A9 2026 [Business Name]",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "About" },
  { href: "#corsi", label: "Services" },
  { href: "#orari", label: "How It Works" },
  { href: "#prezzi", label: "Pricing" },
  { href: "#gallery", label: "Results" },
  { href: "#contatti", label: "Contact" },
]

export const stats = [
  { number: "5.0", label: "AVERAGE RATING" },
  { number: "200+", label: "HAPPY CLIENTS" },
  { number: "3", label: "SIGNATURE SERVICES" },
  { number: "100%", label: "CUSTOMIZED LOOKS" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Permanent Makeup",
    courses: [
      {
        title: "Powder Brows / Ombr\u00E9 Brows",
        age: "Starting at [Price]",
        description: "Soft, shaded brows for a polished, natural look that lasts.",
        image: "/imperial ballet/danzaclassica.jpg",
        Icon: Sparkles,
      },
      {
        title: "Microblading / Nano Brows",
        age: "Starting at [Price]",
        description: "Hair-stroke effect for fuller-looking, naturally defined brows.",
        image: "/imperial ballet/danzaclassicaperbambini.jpg",
        Icon: Wand2,
      },
      {
        title: "Lip Blush",
        age: "Starting at [Price]",
        description: "Enhances lip color, shape, and symmetry with a soft, natural tint.",
        image: "/imperial ballet/pilates.jpg",
        Icon: Palette,
      },
    ],
  },
]

export const featuredGalleryPhotos: { src: string; alt: string }[] = [
  { src: "/centro danza/nostrimomenti.jpg", alt: "Healed permanent makeup result" },
  { src: "/centro danza/nostrimomenti1.jpg", alt: "Natural healed brow result" },
  { src: "/centro danza/nostrimomenti3.jpg", alt: "Healed lip blush result" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
]

export const howItWorksSteps: ProcessStep[] = [
  { title: "Consultation", description: "We talk through your goals, review your features, and answer every question before anything begins." },
  { title: "Custom Shape & Color Mapping", description: "Your artist maps a shape and selects pigment tones tailored to your face and skin tone." },
  { title: "Procedure", description: "The treatment is performed with care, precision, and a focus on comfort throughout." },
  { title: "Healing & Aftercare", description: "You receive clear aftercare guidance to protect your results as they settle and heal." },
  { title: "Touch-Up Appointment", description: "A follow-up visit perfects color and shape for long-lasting, beautiful healed results." },
]

// Placeholder copy — final legal/contraindication language should be reviewed by the client before launch.
export const contraindicationsNote =
  "Permanent makeup may not be suitable for everyone. Pregnancy, certain medications, and some skin conditions may require a modified plan \u2014 we'll review this together during your consultation."

export const scheduleContactInfo = {
  address: "[Street Address], [City], [State] [ZIP]",
  phone: "[Phone Number]",
}

export type PricingCard = {
  Icon: LucideIcon
  title: string
  price: string
  description: string
}

export const pricingCards: PricingCard[] = [
  { Icon: Sparkles, title: "Brows", price: "Starting at [Price]", description: "Powder, ombr\u00E9, microblading, and combo brow techniques tailored to your shape." },
  { Icon: Palette, title: "Lip Blush", price: "Starting at [Price]", description: "Soft, natural lip tint that enhances color, shape, and symmetry." },
  { Icon: Eye, title: "Eyeliner / Lash Enhancement", price: "Starting at [Price]", description: "Subtle definition along the lash line for brighter, fuller-looking eyes." },
  { Icon: RefreshCcw, title: "Touch-Ups", price: "Starting at [Price]", description: "Keep your results looking fresh with periodic color boosts." },
  { Icon: Wand2, title: "Corrections", price: "Consultation Required", description: "Color correction and reshaping of previous permanent makeup." },
]

export const pricingHighlights = [
  { Icon: CalendarCheck, title: "Deposit Required to Book", description: "A deposit secures your appointment and is applied toward your service total. (Placeholder \u2014 confirm with client.)" },
  { Icon: Gift, title: "Touch-Up Included", description: "Your initial service may include a complimentary perfecting touch-up. (Placeholder \u2014 confirm with client.)" },
]
