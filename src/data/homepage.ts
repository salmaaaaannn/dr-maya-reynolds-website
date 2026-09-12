export interface NavFolderItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href?: string;
  folder?: NavFolderItem[];
}

export const navigationData: NavItem[] = [
  {
    title: "About",
    href: "/therapists-newbury-park",
  },
  {
    title: "Our Team",
    folder: [
      { title: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
      { title: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
      { title: "Heather Williams-Baumgart, AMFT", href: "/heather-williams-baumgart" },
      { title: "Michaela Gorospe, AMFT", href: "/michaela-gorospe" },
      { title: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
      { title: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
      { title: "Andrea Watkins, APCC", href: "/andrea-watkins" },
      { title: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
      { title: "Chad Flores, AMFT", href: "/chad-flores" },
    ],
  },
  {
    title: "Specialties",
    folder: [
      { title: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
      { title: "Trauma", href: "/trauma-counseling-newbury-park" },
      { title: "Special Needs Parenting", href: "/counseling-special-needs-parents-newbury-park" },
      { title: "Couples", href: "/couples-therapy" },
      { title: "Children & Teens", href: "/children-and-teens" },
      { title: "Anxiety & Depression", href: "/anxiety-depression" },
      { title: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
    ],
  },
  {
    title: "Methods",
    folder: [
      { title: "EMDR", href: "/emdr-therapy-newbury-park" },
      { title: "Brainspotting", href: "/brainspotting" },
      { title: "Somatic Therapy", href: "/somatic-therapy" },
      { title: "Parts Work Therapy", href: "/parts-work-therapy" },
    ],
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const heroData = {
  eyebrow: "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA",
  headingPrefix: "Rebuild your foundation on solid ground and finally begin to ",
  headingHighlight: "thrive",
  headingSuffix: ".",
  subtitle: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
  buttonText: "Book an Appointment",
  buttonHref: "/contact",
  leftImage: {
    src: "/images/hero-left.jpg",
    alt: "family therapy",
    width: 1365,
    height: 1246,
  },
  rightImage: {
    src: "/images/hero-right.jpg",
    alt: "child therapy",
    width: 1365,
    height: 1246,
  },
};

export const introductionData = {
  heading: "You’re holding onto hope that life can be better than it is right now.",
  leadText: "At Conejo Valley Family Counseling we want to make that hope a reality.",
  paragraph1:
    "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
  paragraph2:
    "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
  image: {
    src: "/images/hope.jpg",
    alt: "Sandy beach with gentle ocean waves and a cloudy sky.",
    width: 1104,
    height: 1632,
  },
};

export const whoWeHelpData = {
  headingPrefix: "Who we ",
  headingHighlight: "help",
  cards: [
    {
      title: "Adults",
      href: null,
      description:
        "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
      image: {
        src: "/images/who-we-help-adults.jpg",
        alt: "Two people sitting on a log at the beach, facing a lake with mountains in the background.",
        width: 1104,
        height: 1632,
      },
    },
    {
      title: "Couples",
      href: "/couples-therapy",
      description:
        "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
      image: {
        src: "/images/who-we-help-couples.jpg",
        alt: "A couple embracing on the beach, with both wearing casual summer clothing and smiling at each other. The ocean is in the background.",
        width: 1104,
        height: 1632,
      },
    },
    {
      title: "Children & Teens",
      href: "/children-and-teens",
      isChildrenLink: true, // only Children links to /children-and-teens
      description:
        "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
      image: {
        src: "/images/who-we-help-children.jpg",
        alt: "A boy carrying a girl on a beach with waves in the background.",
        width: 1105,
        height: 1683,
      },
    },
  ],
};

export const quoteBannerData = {
  quote: "You deserve a place where your story is heard, valued, and understood.",
  italicQuote: "Nothing will be too heavy for us to carry together.",
  backgroundImage: "/images/quote-banner.png",
};

export const expertiseData = {
  headingPrefix: "Our areas of ",
  headingHighlight: "expertise",
  items: [
    { name: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
    { name: "Trauma", href: "/trauma-counseling-newbury-park" },
    { name: "Family conflict", href: null },
    { name: "Special needs parenting", href: "/counseling-special-needs-parents-newbury-park" },
    { name: "Depression", href: "/anxiety-depression" },
    { name: "marriage", href: "/couples-therapy" },
    { name: "anxiety", href: "/anxiety-depression" },
    { name: "relationships", href: null },
    { name: "children", href: "/children-and-teens" },
    { name: "teens", href: "/children-and-teens" },
    { name: "intimacy & connection", href: "/couples-therapy" },
    { name: "…and more.", href: null },
  ],
};

export const howWeWorkData = {
  eyebrow: "HOW WE WORK",
  heading: "We’re here to make a difference.",
  leadParagraph:
    "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
  paragraph1:
    "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
  paragraph2:
    "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
  buttonText: "Learn more about us",
  buttonHref: "/therapists-newbury-park",
  image: {
    src: "/images/how-we-work.jpg",
    alt: "A woman and a child in white dresses dancing on a sandy beach with tall grasses and a distant building in the background during sunset.",
    width: 1104,
    height: 1632,
  },
};

export const imageQuoteSectionData = {
  headingPrefix: "Honoring where you’ve been ",
  headingHighlight: "&",
  headingSuffix: " helping shape where you’re headed.",
  image: {
    src: "/images/shaping-future.jpg",
    alt: "Family of four standing on a beach, holding hands, facing the ocean at sunset.",
    width: 2096,
    height: 1296,
  },
};

export const specialtiesData = {
  headingPrefix: "Our ",
  headingHighlight: "specialties",
  headingSuffix: " include…",
  cards: [
    {
      title: "Trauma",
      description:
        "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
      buttonText: "Learn more",
      buttonHref: "/trauma-counseling-newbury-park",
    },
    {
      title: "Dissociation",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
      buttonText: "Learn more",
      buttonHref: "/dissociative-identity-disorder-therapist-newbury-park",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
      buttonText: "Learn more",
      buttonHref: "/emdr-therapy-newbury-park",
    },
    {
      title: "Special Needs Parenting",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
      buttonText: "Learn more",
      buttonHref: "/counseling-special-needs-parents-newbury-park",
    },
  ],
};

export const appointmentCTAData = {
  eyebrow: "SCHEDULE AN APPOINTMENT",
  headingPrefix: "Find a therapist who is the right fit for ",
  headingHighlight: "you",
  headingSuffix: ".",
  paragraph1:
    "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
  paragraph2: "Click the button below to schedule an appointment.",
  buttonText: "Book now",
  buttonHref: "/contact",
  leftImage: {
    src: "/images/appointment-left.jpg",
    alt: "A person picking up seashells on a sandy beach.",
    width: 2096,
    height: 1296,
  },
  rightImage: {
    src: "/images/appointment-right.jpg",
    alt: "A person in a striped dress pointing at shells on the sandy beach, with a child in blue shorts standing barefoot nearby.",
    width: 2096,
    height: 1296,
  },
};

export const footerData = {
  logo: {
    src: "/images/logo.png",
    alt: "Conejo Valley Family Counseling",
    width: 3007,
    height: 878,
  },
  officeDesc:
    "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
  navigateLinks: [
    { title: "Home", href: "/home" },
    { title: "About", href: "/therapists-newbury-park" },
    { title: "FAQs", href: "/faqs" },
    { title: "Contact", href: "/contact" },
  ],
  contactInfo: {
    addressLines: [
      "925 Broadbeck Dr",
      "Suites 200 and 225",
      "Newbury Park, CA 91320",
    ],
    email: "info@conejovalleycounseling.com",
    emailHref: "mailto:info@conejovalleycounseling.com?",
    phone: "805.242.3120",
    phoneHref: "tel:8052423120",
    serviceArea: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
  },
  teamMembers: [
    { name: "Jennifer Anderson", href: "/jennifer-anderson" },
    { name: "Heather Williams-Baumgart", href: "/heather-williams-baumgart" },
    { name: "Autumn Bodily", href: "/autumn-bodily" },
    { name: "Michaela Gorospe", href: "/michaela-gorospe" },
    { name: "Candace Bletscher", href: "/candace-bletscher" },
    { name: "Samantha Johnson", href: "/samantha-johnson" },
    { name: "Andrea Watkins", href: "/andrea-watkins" },
    { name: "Rosa Gomez", href: "/rosa-gomez" },
    { name: "Chad Flores", href: "/chad-flores" },
  ],
  legalLinks: [
    { title: "Terms", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Disclaimer", href: "/disclaimer" },
    { title: "Website by Walker Strategy Co.", href: "https://walkerstrategyco.com" },
  ],
};
