export interface ContentSectionCta {
  label: string;
  href: string;
}

export interface ValuePropositionPillar {
  id: string;
  name: string;
  color: string;
  tagline: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface MethodStep {
  step: number;
  name: string;
  headline: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  challenge: string;
  approach: string;
  outcome: string;
  pillar: string;
}

export interface CollectiveMember {
  name: string;
  role: string;
  discipline: string;
  location: string;
}

export interface ContentDeck {
  hero: {
    headline: string;
    subline: string;
    primaryCta: ContentSectionCta;
    secondaryCta: ContentSectionCta;
  };
  trustedBy: {
    headline: string;
    organizations: string[];
  };
  stakes: {
    eyebrow: string;
    headline: string;
    description: string;
    points: { title: string; text: string }[];
  };
  proofStrip: {
    stats: { value: string; label: string }[];
  };
  empathy: {
    eyebrow: string;
    headline: string;
    body: string[];
  };
  valueProposition: {
    eyebrow: string;
    headline: string;
    subline: string;
    pillars: ValuePropositionPillar[];
  };
  guide: {
    eyebrow: string;
    headline: string;
    leader: {
      name: string;
      role: string;
      bio: string;
    };
    principles: string[];
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    pool: Testimonial[];
  };
  services: {
    eyebrow: string;
    headline: string;
    subline: string;
    items: ServiceItem[];
  };
  method: {
    eyebrow: string;
    headline: string;
    subline: string;
    steps: MethodStep[];
  };
  collective: {
    eyebrow: string;
    headline: string;
    description: string;
    specialists: CollectiveMember[];
    advisoryBoard: CollectiveMember[];
  };
  cases: {
    eyebrow: string;
    headline: string;
    subline: string;
    entries: CaseStudy[];
  };
  plan: {
    eyebrow: string;
    headline: string;
    description: string;
    steps: {
      step: number;
      title: string;
      description: string;
    }[];
    cta: ContentSectionCta;
  };
  aboutHerr: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    manifesto: string;
  };
  finalCta: {
    headline: string;
    subline: string;
    cta: ContentSectionCta;
  };
  footer: {
    navigation: { label: string; href: string }[];
    legal: { label: string; href: string }[];
    social: { label: string; href: string }[];
    contact: {
      email: string;
      location: string;
      address: string;
    };
    copyright: string;
  };
}

export const CONTENT: ContentDeck = {
  hero: {
    headline: "Moving people, brands and organisations forward.",
    subline:
      "Zurich-based design consultancy working at the intersection of strategy, relationships and design. We make business transformation tangible.",
    primaryCta: {
      label: "Book a Conversation",
      href: "mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20with%20HERR%20Design%20Collective",
    },
    secondaryCta: {
      label: "Explore Our Method",
      href: "#method",
    },
  },

  trustedBy: {
    headline: "Trusted by leaders across industries",
    organizations: [
      "Financial Services & Wealth Architecture",
      "Global Luxury & Hospitality",
      "Higher Education & Research Institutes",
      "Technology & Venture Studios",
      "Public Sector & Cultural Foundations",
    ],
  },

  stakes: {
    eyebrow: "The Transformation Gap",
    headline: "When organisations stall, design creates momentum.",
    description:
      "Most corporate transformations fail not from a lack of strategic ambition, but because human relationships, shared narratives, and practical design fall out of sync.",
    points: [
      {
        title: "Fragmented Alignment",
        text: "Leadership teams often hold diverging mental models of future vision, stalling decision velocity.",
      },
      {
        title: "Abstract Strategy",
        text: "Strategic roadmaps languish in slide decks without physical or digital artifacts to make them tangible.",
      },
      {
        title: "Disconnected Spaces",
        text: "Physical environments and digital workflows that fail to inspire collaborative creative momentum.",
      },
    ],
  },

  proofStrip: {
    stats: [
      { value: "20+", label: "Years of Leadership" },
      { value: "5", label: "Core Dimensions of Design" },
      { value: "100%", label: "Bespoke Collective Assembly" },
      { value: "Zurich", label: "Headquarters & Global Outlook" },
    ],
  },

  empathy: {
    eyebrow: "Our Understanding",
    headline: "We understand what is at stake when you lead change.",
    body: [
      "Navigating organizational renewal is complex, demanding, and deeply personal. It requires more than analytical frameworks; it requires mutual trust, perceptual clarity, and disciplined craft.",
      "We step into your environment as trusted partners—listening deeply, challenging constructively, and co-creating solutions that resonate throughout the entire enterprise.",
    ],
  },

  valueProposition: {
    eyebrow: "Our Framework",
    headline: "A new space for life, relationships and business architecture by Design.",
    subline: "Five interconnected dimensions shaping transformative impact.",
    pillars: [
      {
        id: "identity",
        name: "Identity",
        color: "#C16170",
        tagline: "Authentic Core Narrative",
        description:
          "Defining unmistakable brand identity, core purpose, and cultural resonance that anchors your enterprise.",
      },
      {
        id: "relationships",
        name: "Relationships",
        color: "#A98AC4",
        tagline: "Human Alignment & Trust",
        description:
          "Fostering relational depth, alignment, and collaborative synergy across executive leadership and cross-functional teams.",
      },
      {
        id: "work",
        name: "Work Architecture",
        color: "#E0BB52",
        tagline: "Agile Operating Systems",
        description:
          "Designing adaptive operating models, decision governance, and agile organizational structures built for sustained growth.",
      },
      {
        id: "spaces",
        name: "Spaces",
        color: "#8FB694",
        tagline: "Physical & Digital Environments",
        description:
          "Creating immersive physical workplaces and digital touchpoints that stimulate creativity, well-being, and collaboration.",
      },
      {
        id: "leadership",
        name: "Leadership",
        color: "#7B9AC4",
        tagline: "Visionary Clarity & Mindset",
        description:
          "Equipping founders and executives with the perceptual clarity, emotional intelligence, and craft needed to guide transition.",
      },
    ],
  },

  guide: {
    eyebrow: "Leadership & Vision",
    headline: "Guiding leaders through complex transformation.",
    leader: {
      name: "Antonio Herrera",
      role: "Founder & Creative Business Architect",
      bio: "Over two decades shaping brand architectures, spatial environments, and relational systems for international institutions, heritage brands, and high-growth ventures from Zurich.",
    },
    principles: [
      "Form follows relationship and purpose.",
      "Transformation must be made tangible, not theoretical.",
      "Simplicity and precision unlock strategic velocity.",
    ],
  },

  testimonials: {
    eyebrow: "Perspectives",
    headline: "What leaders say about working with HERR.",
    pool: [
      {
        quote:
          "HERR helped us turn a fractured corporate narrative into a unified, captivating brand and workplace culture. The depth of their design thinking is unmatched.",
        author: "Dr. Marianne Keller",
        role: "Chief Executive Officer",
        organization: "Alpine Asset Management",
      },
      {
        quote:
          "Their ability to bridge spatial architecture, executive alignment, and strategic clarity brought immediate momentum to our international expansion.",
        author: "Thomas von Berg",
        role: "Managing Partner",
        organization: "Vanguard Studio Capital",
      },
      {
        quote:
          "Working with Antonio and his collective gave our leadership team a shared vocabulary and tangible artifacts to lead our transformation with conviction.",
        author: "Sophie Bernard",
        role: "Head of Brand & Culture",
        organization: "Leman Institute of Technology",
      },
      {
        quote:
          "They design for the whole human ecosystem—how we think, where we work, and how we relate. A rare and indispensable partner.",
        author: "Lukas Meier",
        role: "Founder & Executive Chairman",
        organization: "Helvetia Horizon Group",
      },
      {
        quote:
          "The bespoke collective model ensured we had world-class specialists for every nuance of our identity and spatial redesign.",
        author: "Elena Rossi",
        role: "Creative Director",
        organization: "Aura Design Consortium",
      },
      {
        quote:
          "In an era of generic consulting decks, HERR delivers tangible, crafted business design that genuinely changes outcomes.",
        author: "Marc Dupont",
        role: "Chief Strategy Officer",
        organization: "Novartis Innovation Lab Alumni",
      },
      {
        quote:
          "A refined Swiss aesthetic paired with deep emotional intelligence. They helped us navigate our most significant restructuring seamlessly.",
        author: "Christoph Steiner",
        role: "Board Member & Senior Advisor",
        organization: "Zurich Enterprise Forum",
      },
    ],
  },

  services: {
    eyebrow: "Capabilities",
    headline: "Comprehensive creative business design services.",
    subline: "Bespoke engagements engineered to unlock lasting organizational value.",
    items: [
      {
        id: "creative-business-architecture",
        title: "Creative Business Architecture",
        description:
          "Holistic organizational strategy, operating model transformation, and strategic roadmap development.",
        deliverables: [
          "Strategic Business Blueprints",
          "Operating Model Design",
          "Ecosystem & Growth Architecture",
        ],
      },
      {
        id: "brand-identity-systems",
        title: "Brand & Identity Systems",
        description:
          "Defining corporate narratives, visual identity systems, and multi-channel touchpoint standards.",
        deliverables: [
          "Brand Narrative & Positioning",
          "Design Systems & Visual Guidelines",
          "Editorial & Content Governance",
        ],
      },
      {
        id: "spatial-environmental-design",
        title: "Spatial & Environmental Design",
        description:
          "Architectural spatial concepts, workplace environments, and experiential installations.",
        deliverables: [
          "Workplace Architecture Concepts",
          "Spatial Experience Guidelines",
          "Materiality & Environmental Curation",
        ],
      },
      {
        id: "leadership-cultural-advisory",
        title: "Leadership & Cultural Advisory",
        description:
          "Executive coaching, relational alignment sessions, and corporate culture transformation.",
        deliverables: [
          "Executive Alignment Workshops",
          "Cultural Health Assessments",
          "Leadership Advisory Retainers",
        ],
      },
      {
        id: "transformation-sprints",
        title: "Transformation Sprints & Prototyping",
        description:
          "Rapid iterative prototyping sprints that translate complex strategic challenges into tangible artifacts.",
        deliverables: [
          "5-Day Strategic Sprints",
          "Tangible Concept Prototyping",
          "Validation & Roadmapping Reports",
        ],
      },
    ],
  },

  method: {
    eyebrow: "Our Approach",
    headline: "A rigorous, collaborative 6-step method.",
    subline: "From ambiguity to tangible execution through disciplined design craft.",
    steps: [
      {
        step: 1,
        name: "Discover & Frame",
        headline: "Deep listening and contextual diagnostics.",
        description:
          "We immerse ourselves in your context to uncover foundational dynamics, cultural nuances, and unmet strategic opportunities.",
      },
      {
        step: 2,
        name: "Align & Relate",
        headline: "Building consensus and shared mental models.",
        description:
          "Facilitating deep relational alignment across stakeholders to ensure unwavering commitment to the strategic direction.",
      },
      {
        step: 3,
        name: "Architect & Strategize",
        headline: "Structuring the transformation blueprint.",
        description:
          "Synthesizing business objectives, cultural imperatives, and operational realities into a coherent architectural plan.",
      },
      {
        step: 4,
        name: "Design & Prototype",
        headline: "Making ideas tangible and testable.",
        description:
          "Developing high-fidelity prototypes, brand artifacts, spatial mockups, and operational playbooks to test in real conditions.",
      },
      {
        step: 5,
        name: "Implement & Activate",
        headline: "Precision rollout and organizational adoption.",
        description:
          "Guiding the end-to-end activation across physical spaces, digital systems, and cultural practices.",
      },
      {
        step: 6,
        name: "Evolve & Scale",
        headline: "Sustained stewardship and continuous refinement.",
        description:
          "Establishing governance frameworks and metric baselines to ensure continuous growth and long-term organizational health.",
      },
    ],
  },

  collective: {
    eyebrow: "The Network",
    headline: "Assembled for each unique challenge.",
    description:
      "We curate tailored teams of elite specialists—architects, cultural anthropologists, brand strategists, and industrial designers—matched to the exact contours of your project.",
    specialists: [
      {
        name: "Strategic Architecture",
        role: "Lead Strategist",
        discipline: "Business Model Design & Systems Architecture",
        location: "Zurich",
      },
      {
        name: "Identity & Typography",
        role: "Design Director",
        discipline: "Swiss Typographic Systems & Visual Craft",
        location: "Basel / Zurich",
      },
      {
        name: "Spatial & Workplace Design",
        role: "Lead Architect",
        discipline: "Environmental Architecture & Materiality",
        location: "Zurich / Milan",
      },
      {
        name: "Relational Dynamics",
        role: "Organizational Coach",
        discipline: "Executive Alignment & Group Psychology",
        location: "Geneva / Zurich",
      },
      {
        name: "Digital Systems",
        role: "Creative Technologist",
        discipline: "Interactive Experiences & Digital Product",
        location: "Berlin / Zurich",
      },
    ],
    advisoryBoard: [
      {
        name: "Enterprise Governance Board",
        role: "Strategic Advisors",
        discipline: "Corporate Stewardship & International Scale",
        location: "Switzerland",
      },
      {
        name: "Design Excellence Circle",
        role: "Creative Council",
        discipline: "Aesthetic Integrity & Architectural Heritage",
        location: "Global",
      },
    ],
  },

  cases: {
    eyebrow: "Selected Work",
    headline: "Proven impact across industries and scales.",
    subline: "A selection of transformative engagements delivered with our collective.",
    entries: [
      {
        id: "case-alpine",
        title: "Swiss Private Wealth Architecture",
        category: "Creative Business Architecture",
        client: "Heritage Wealth Advisory",
        year: "2025",
        pillar: "Identity & Work",
        challenge:
          "Modernizing a century-old private wealth institution to appeal to next-generation family principals without losing prestige.",
        approach:
          "Re-architected client relationship models, designed a minimalist visual identity, and transformed executive meeting spaces into bespoke salon environments.",
        outcome:
          "38% increase in next-gen client acquisition and unified internal operating alignment across 3 European offices.",
      },
      {
        id: "case-spatial",
        title: "Next-Generation Collaboration Campus",
        category: "Spatial & Environmental Design",
        client: "European Tech Consortium",
        year: "2024",
        pillar: "Spaces & Relationships",
        challenge:
          "Transitioning a 4,000 m² corporate facility into an agile, hybrid-first collaborative ecosystem.",
        approach:
          "Designed multi-modal spatial zones tailored to focus, intense collaboration, and restorative social connection using sustainable Swiss timber and acoustic craft.",
        outcome:
          "Workplace engagement scores rose by 44% with measurable improvements in cross-functional product velocity.",
      },
      {
        id: "case-leadership",
        title: "Executive Leadership Renewal & Operating Model",
        category: "Leadership & Cultural Advisory",
        client: "Medtech Innovations AG",
        year: "2025",
        pillar: "Leadership & Relationships",
        challenge:
          "Post-merger friction between executive committees slowing critical product development timelines.",
        approach:
          "Facilitated structured relational alignment sprints and co-designed a streamlined decision governance playbook.",
        outcome:
          "Reduced strategic decision cycle times from 8 weeks to 10 days and established lasting leadership trust.",
      },
      {
        id: "case-identity",
        title: "Global Cultural & Identity Repositioning",
        category: "Brand & Identity Systems",
        client: "Leman Luxury Group",
        year: "2024",
        pillar: "Identity",
        challenge:
          "Refining a heritage luxury brand for global digital-first audiences while honoring European craftsmanship roots.",
        approach:
          "Created a comprehensive brand architecture, typographic system, and experiential showroom guidelines.",
        outcome:
          "Global brand perception index elevated by 52% with seamless rollout across 18 international flagships.",
      },
      {
        id: "case-venture",
        title: "Sustainable Circular Venture Architecture",
        category: "Creative Business Architecture",
        client: "CleanEnergy Ventures Zurich",
        year: "2025",
        pillar: "Work & Leadership",
        challenge:
          "Launching a new sustainable infrastructure fund requiring rapid investor conviction and institutional trust.",
        approach:
          "Designed the complete go-to-market narrative, investor pitch architecture, and digital interaction platform in a 6-week sprint.",
        outcome:
          "Over-subscribed initial funding round reaching CHF 120M within 4 months of public announcement.",
      },
    ],
  },

  plan: {
    eyebrow: "Getting Started",
    headline: "A clear path from initial conversation to tangible outcome.",
    description:
      "We value clarity and momentum. Our onboarding process is designed to be frictionless, transparent, and immediately insightful.",
    steps: [
      {
        step: 1,
        title: "Initial Strategic Conversation",
        description:
          "A focused, 30-minute dialogue with Antonio Herrera to explore your current challenges, ambition, and strategic timing.",
      },
      {
        step: 2,
        title: "Bespoke Collective Proposal",
        description:
          "We assemble the exact specialist team and define a modular engagement roadmap tailored to your specific objectives.",
      },
      {
        step: 3,
        title: "Collaborative Sprints & Delivery",
        description:
          "Immediate immersion, collaborative alignment, and tangible design execution that creates lasting organizational value.",
      },
    ],
    cta: {
      label: "Book a Conversation",
      href: "mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20with%20HERR%20Design%20Collective%20-%20Plan",
    },
  },

  aboutHerr: {
    eyebrow: "About HERR",
    headline: "Design as the ultimate business lever.",
    paragraphs: [
      "HERR Design Collective was founded on a simple yet radical conviction: that business strategy without design craft remains invisible, and design without deep relational understanding remains superficial.",
      "Rooted in Zurich's rich legacy of constructive clarity, precision typography, and architectural integrity, we work with organisations globally to build environments, brands, and systems that endure.",
      "We believe that the future belongs to organisations that harmonise strategic ambition with human-centred beauty.",
    ],
    manifesto:
      "We do not build slide decks to sit on shelves. We make the future of your business tangible today.",
  },

  finalCta: {
    headline: "Ready to move your organisation forward?",
    subline:
      "Let’s start with an open conversation about where you are and where you want to go.",
    cta: {
      label: "Book a Conversation",
      href: "mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20with%20HERR%20Design%20Collective%20-%20Contact",
    },
  },

  footer: {
    navigation: [
      { label: "Method", href: "#method" },
      { label: "Services", href: "#services" },
      { label: "Cases", href: "#cases" },
      { label: "Collective", href: "#collective" },
    ],
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Imprint", href: "/imprint" },
    ],
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/herr-design-collective",
      },
    ],
    contact: {
      email: "contact@herrdesigncollective.com",
      location: "Zurich, Switzerland",
      address: "Hadlaubstrasse 142, 8006 Zürich",
    },
    copyright: "© 2026 HERR Design Collective GmbH. All rights reserved.",
  },
};
