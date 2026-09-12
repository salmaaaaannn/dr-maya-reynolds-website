export interface NavItem {
  title: string;
  href: string;
}

export const navigationData: NavItem[] = [
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Approach", href: "#approach" },
  { title: "Office", href: "#office" },
  { title: "FAQs", href: "#faqs" },
  { title: "Contact", href: "#contact" },
];

export const heroData = {
  eyebrow: "SANTA MONICA · ADULT THERAPY",
  heading: "Find Your Way Back to Yourself.",
  subtitle:
    "Evidence-based, collaborative therapy for thoughtful, high-achieving adults navigating anxiety, trauma, and burnout. Creating space to slow down, regulate, and heal.",
  primaryCTA: {
    text: "Book a Consultation",
    href: "#contact",
  },
  secondaryCTA: {
    text: "Explore Services →",
    href: "#services",
  },
  image: {
    src: "/images/dr-maya-reynolds.png",
    alt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica",
    width: 1024,
    height: 1536,
  },
};

export const introductionData = {
  eyebrow: "— A Digital Sanctuary",
  heading: "Therapy designed for the person who holds it all together on the outside.",
  leadText:
    "Many of the clients I work with are high-achieving, thoughtful, and self-aware—yet internally feel exhausted, stuck in overthinking, or emotionally on edge.",
  paragraph1:
    "Clients frequently come to therapy feeling functional in their careers and daily obligations, while quietly carrying persistent worry, physical tension, difficulty sleeping, or a constant sense of bracing for something to go wrong.",
  paragraph2:
    "Others are navigating the lingering impact of earlier life experiences that affect their relationships, confidence, or sense of safety. Here, therapy is an intentional, grounding space to slow down, understand your mind and body, and develop sustainable resilience.",
  image: {
    src: "/images/nature-texture.jpg",
    alt: "Serene natural foliage with gentle morning dew",
    width: 1104,
    height: 1632,
  },
};

export const whoIHelpData = {
  eyebrow: "— Who I Work With",
  heading: "Who I Work With",
  description:
    "I provide therapy specifically for adults residing in California who want to move beyond just coping with stress and step into deep, lasting relief.",
  groups: [
    {
      title: "Thoughtful, High-Achieving Adults",
      description:
        "Individuals who appear capable and composed on the surface, but quietly struggle with racing thoughts, high internal standards, and emotional exhaustion.",
      icon: "mind",
    },
    {
      title: "Professionals, Creatives & Entrepreneurs",
      description:
        "Leaders and innovators in fast-paced environments experiencing professional burnout, perfectionism, and a deep disconnect after years of pushing through stress.",
      icon: "spark",
    },
    {
      title: "Adults Healing From Trauma & Past Stress",
      description:
        "Those navigating the ongoing effects of single-incident trauma or long-standing complex patterns from childhood, relationships, and chronic life strain.",
      icon: "shield",
    },
  ],
};

export const servicesData = {
  eyebrow: "— Specialized Services",
  heading: "Therapeutic Services",
  description:
    "Tailored, evidence-based therapy integrating emotional and physiological healing for meaningful, long-term growth.",
  services: [
    {
      id: "anxiety",
      title: "Anxiety & Panic Therapy",
      shortDesc:
        "Support for constant worry, racing thoughts, physical tension, panic sensations, and difficulty resting. Learn to quiet overthinking and regulate your nervous system.",
      highlights: [
        "Quiet racing thoughts and chronic worry",
        "Address physical tension and sleep disruption",
        "Somatic and cognitive regulation tools",
      ],
      ctaText: "Learn More",
      ctaHref: "#contact",
      image: {
        src: "/images/service-anxiety.jpg",
        alt: "Tranquil botanical element with soft sunlight",
        width: 800,
        height: 600,
      },
    },
    {
      id: "trauma",
      title: "Trauma & EMDR Therapy",
      shortDesc:
        "A carefully paced approach to single-incident trauma and complex childhood or relational stress. We prioritize safety, stabilization, and reprocessing painful memories.",
      highlights: [
        "Paced carefully with safety and stabilization first",
        "Reprocess memories using EMDR therapy",
        "Reclaim your sense of security and groundedness",
      ],
      ctaText: "Learn More",
      ctaHref: "#contact",
      image: {
        src: "/images/service-trauma.jpg",
        alt: "Warm wooden surface with peaceful morning shadow",
        width: 800,
        height: 600,
      },
    },
    {
      id: "burnout",
      title: "Burnout & Perfectionism",
      shortDesc:
        "Dedicated space for professionals, creatives, and high achievers feeling disconnected from themselves. Unpack internal pressure and cultivate sustainable ways of working.",
      highlights: [
        "Unpack perfectionism and harsh internal pressure",
        "Recover from prolonged occupational exhaustion",
        "Establish sustainable boundaries and alignment",
      ],
      ctaText: "Learn More",
      ctaHref: "#contact",
      image: {
        src: "/images/service-burnout.jpg",
        alt: "Calm minimalist workspace with natural ceramic and linen",
        width: 800,
        height: 600,
      },
    },
  ],
};

export const quoteBannerData = {
  quote:
    "Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
  author: "Dr. Maya Reynolds, PsyD",
  credentials: "Licensed Clinical Psychologist",
};

export const aboutData = {
  eyebrow: "— About Me",
  heading: "A Therapist Who Truly Listens",
  credentials: "Licensed Clinical Psychologist",
  location: "Santa Monica, California",
  bioParagraphs: [
    "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
    "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.",
    "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives.",
  ],
  verbatimQuote:
    "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
  image: {
    src: "/images/dr-maya-reynolds.png",
    alt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist",
    width: 1024,
    height: 1536,
  },
};

export const approachData = {
  eyebrow: "— How I Work",
  heading: "A Grounded, Integrated Approach",
  description:
    "Sessions are structured enough to feel supportive and safe, while leaving generous space for depth, reflection, and physiological regulation.",
  modalities: [
    {
      title: "Cognitive-Behavioral Therapy (CBT)",
      description:
        "Identify and gently challenge automatic thoughts, unhelpful internal narratives, and cycles that reinforce worry or overwhelm.",
    },
    {
      title: "EMDR Therapy",
      description:
        "An evidence-based method to help process and desensitize painful memories, allowing the nervous system to find lasting relief from trauma.",
    },
    {
      title: "Mindfulness-Based Practices",
      description:
        "Cultivate present-moment awareness, mental spaciousness, and tools to step out of spiral overthinking into centered clarity.",
    },
    {
      title: "Body-Oriented (Somatic) Techniques",
      description:
        "Understand and release tension stored in the body, recognizing physiological warning cues and restoring nervous system balance.",
    },
  ],
};

export const officeData = {
  eyebrow: "— Our Office",
  heading: "A Calm Space for Healing",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  locationBadge: "Santa Monica, California",
  description:
    "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease the moment they arrive.",
  formatNote:
    "I offer both in-person therapy sessions from this Santa Monica space and secure telehealth appointments for clients located throughout California.",
  badges: [
    { label: "Santa Monica, California", type: "location" },
    { label: "In-Person Sessions", type: "in-person" },
    { label: "California Telehealth", type: "telehealth" },
  ],
  whatToExpect: [
    {
      title: "Quiet & Private Sanctuary",
      description: "An uncluttered, intentional space designed to help you slow down and feel at ease immediately.",
    },
    {
      title: "Warm Natural Light",
      description: "Comfortable, serene surroundings that support calm nervous system regulation.",
    },
    {
      title: "Collaborative Care",
      description: "A secure therapeutic space where you are respected, understood, and actively involved.",
    },
  ],
  images: [
    {
      src: "/images/office1.jpeg",
      alt: "Quiet and private therapy office with natural light and comfortable seating in Santa Monica",
      width: 1500,
      height: 1125,
    },
    {
      src: "/images/office2.jpeg",
      alt: "Comfortable, uncluttered therapy environment with gentle morning light",
      width: 1500,
      height: 1125,
    },
    {
      src: "/images/office-detail-auth.jpeg",
      alt: "Soft natural textures and serene counseling setting",
      width: 900,
      height: 900,
    },
  ],
  cta: {
    text: "Schedule a Consultation",
    href: "#contact",
  },
};

export const faqData = {
  eyebrow: "— Frequently Asked Questions",
  heading: "Frequently Asked Questions",
  description:
    "Helpful information about working together, session formats, and what to expect in therapy.",
  faqs: [
    {
      question: "Who does Dr. Maya Reynolds work with?",
      answer:
        "Dr. Maya works exclusively with adults. Her practice primarily supports high-achieving, thoughtful, and self-aware individuals—such as professionals, creatives, and entrepreneurs—who are navigating anxiety, panic, trauma, burnout, and perfectionism.",
    },
    {
      question: "What therapeutic modalities does Dr. Maya utilize?",
      answer:
        "Dr. Maya integrates evidence-based approaches including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented (somatic) techniques.",
    },
    {
      question: "Are in-person sessions available?",
      answer:
        "Yes. Dr. Maya offers in-person therapy sessions from her private, quiet office located at 123th Street 45 W, Santa Monica, CA 90401.",
    },
    {
      question: "Do you offer virtual therapy / telehealth?",
      answer:
        "Yes. Secure telehealth sessions are available for adult clients located anywhere in the state of California.",
    },
    {
      question: "How is trauma addressed in your practice?",
      answer:
        "Trauma work is approached with great care and pacing. Whether addressing single-incident trauma or complex patterns from earlier life experiences, the focus is first on establishing safety, stabilization, and nervous system regulation before moving into deeper reprocessing.",
    },
    {
      question: "How do I schedule an initial consultation?",
      answer:
        "You can reach out through the contact form below or book an initial consultation to discuss what you're experiencing, ask any questions, and see if working together feels like the right fit.",
    },
  ],
};

export const appointmentCTAData = {
  eyebrow: "— Begin Your Care",
  heading: "Ready to step into a calmer, more grounded space?",
  paragraph:
    "If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—let's connect.",
  buttonText: "Schedule a Consultation",
  buttonHref: "#contact",
  locationNote: "In-Person in Santa Monica, CA & Telehealth Across California",
};

export const footerData = {
  brandName: "Dr. Maya Reynolds, PsyD",
  tagline: "Licensed Clinical Psychologist",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  telehealthNote: "In-Person Sessions in Santa Monica & Telehealth Across California",
  links: [
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Approach", href: "#approach" },
    { title: "Office", href: "#office" },
    { title: "FAQs", href: "#faqs" },
    { title: "Contact", href: "#contact" },
  ],
  disclaimer:
    "The information provided on this site is for educational purposes and does not constitute formal medical or psychological advice. Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist practicing in Santa Monica, California.",
};
