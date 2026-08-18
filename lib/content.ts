// lib/content.ts — HERR Design Collective landing page
// Source of truth: herr-website-prototype-brief-v2.md (frozen 2026-08-17).
// Copy is VERBATIM. Do not paraphrase, shorten or extend any string.

export interface Cta {
  label: string;
  href: string;
}

const MAILTO = "mailto:antonio.herrera@herrdesigncollective.com";
const bookCta = (subject: string): Cta => ({
  label: "Book a Conversation",
  href: `${MAILTO}?subject=${encodeURIComponent(subject)}`,
});

export interface Pillar {
  name: string;
  tagline: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  attribution: string; // roles only, no full names (privacy footnote)
}

export interface ServiceGroup {
  title: string;
  audience: string;
  description: string;
}

export interface MethodDimension {
  name: string;
  color: string;
}

export interface MethodStep {
  name: string;
  description: string;
  layers?: readonly string[];
  /** Only the PRISM step carries the five dimensions (spectrum bar markers). */
  dimensions?: readonly MethodDimension[];
}

export interface Person {
  name: string;
  role: string;
  portraitId?: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  outcome: string;
  expertise: string[];
}

export interface Partner {
  name: string;
  logoId: string;
  tx?: string;
  scale?: number;
  noFilter?: boolean;
}

export interface PlanStep {
  title: string;
  description: string;
}

export const CONTENT = {
  hero: {
    headline: "Moving people, brands and organisations forward.",
    subline:
      "We build the relationships and design the structures that make business transformation tangible.",
    cta: bookCta("Conversation with HERR Design Collective"),
  },

  trustedBy: {
    label: "Trusted by partners from",
    partners: [
      {
        name: "SWISS",
        logoId: "swiss",
        tx: "e_replace_color:0E0D0C:20:FFFFFF/e_replace_color:F2EFE9:60:CC0000",
        noFilter: true,
      },
      { name: "SIX", logoId: "six" },
      { name: "CSL Behring", logoId: "csl-behring", tx: "e_make_transparent:20" },
      { name: "TEDxZurich", logoId: "tedxzurich" },
      { name: "ABB", logoId: "abb" },
      { name: "FIFA", logoId: "fifa" },
      { name: "UNITED NATIONS", logoId: "united-nations" },
      { name: "ZHdK", logoId: "zhdk", tx: "e_trim", scale: 1.5 },
    ] as Partner[],
  },

  stakes: {
    headline: "What happens when transformation stays on paper?",
    body: "Most transformation efforts fail not because the strategy is wrong, but because no one designed the moments where people were meant to experience it. Without that, change becomes a memo nobody reads, a rebrand nobody believes, a workshop nobody remembers by Monday.",
  },

  proofStrip: {
    body: "Our work has supported the growth of individuals, aligned teams and reshaped brand experiences that move organisations forward. HERR Design Collective works at the intersection of relationships, creativity, strategy, communication and design execution.",
    transition: "See how, below.",
  },

  empathy: {
    quote: "3 days of design can save you 3 months of meetings.",
    attribution: "Marty Neumeier",
    statement:
      "You know the frustration of a plan that reads well in the boardroom and dies the moment it meets real people. You've felt the quiet cost of a transformation project that looked finished on paper and never truly landed. We close the gap between strategy, people and execution. We understand it because we have watched it happen too many times, and it is exactly what we are here to close.",
  },

  valueProposition: {
    headline: "Discover how we make transformation tangible",
    subheadline:
      "We design the relationship architecture that makes people flourish.",
    pillars: [
      {
        name: "Connecting the Dots",
        tagline: "Building bridges, not silos",
        description:
          "We naturally build bridges between management, boards and teams to provide a sense of comfort and stability in the face of uncertainty.",
      },
      {
        name: "Individual Solutions",
        tagline: "Built around who you are",
        description:
          "We notice the unique strengths in your business and people, and draw on them to build something genuinely productive.",
      },
      {
        name: "Design Strategy",
        tagline: "Clarity before commitment",
        description:
          "We provide you with access to the knowledge and experience that empower you to make credible and well-informed decisions.",
      },
      {
        name: "Creative Execution",
        tagline: "Flexibility under pressure",
        description:
          "When facing complex situations, we allow our creative flexibility to realign your resources and your people into the most productive configuration possible.",
      },
      {
        name: "Positivity",
        tagline: "Momentum that lasts",
        description:
          "We share our energy and optimism generously, lightening what defines you and those around you. We design how you celebrate what you achieve.",
      },
    ] as Pillar[],
  },

  guide: {
    subLabel: "Relationship Architect · Designer · Mentor",
    heading: "Antonio built his own transformation architecture for more than 8 years. He is certain that everyone can design and build their own.",
    body: "Partnering with executives, entrepreneurs and high-profile individuals that want create, raise and communicate value that comes from transforming human potential into business results.",
    cta: {
      label: "Meet Antonio Herrera",
      href: "mailto:antonio.herrera@herrdesigncollective.com?subject=Meet%20Antonio%20Herrera",
    } as Cta,
    secondaryCta: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/antonioherreragd/",
    } as Cta,
    portraitId: "herr-antonio-herrera",
  },

  testimonials: [
    {
      quote:
        "Working with Antonio was inspiring once again. He creates the emotionally necessary, positive atmosphere, brings people together and guides them toward the shared goal. When people lose their way, he brings everyone back on track, connects individuals with their work and ensures that a group of strong individual thinkers works toward one goal so that, in a relatively short time, a result emerges that includes everyone's ideas, structured so clearly that a new concept takes shape. At the start of a workshop there are many ideas and fragments side by side, each still incomplete. By the end there is a concept that covers nearly every aspect and brings the relevant points together.",
      attribution: "Investor, Zurich",
    },
    {
      quote:
        "The connection between psychology, empathic design and entrepreneurial thinking created a methodical framework that concretely developed each participant's business concept. Antonio immerses himself in every situation and sparks creativity and new solutions.",
      attribution: "Creative Business Design, Group Mentorship, ZHdK, 10 Participants",
    },
    {
      quote:
        "Mr. Herrera brought every project entrusted to him to a successful conclusion, on time and within budget. Even with complex challenges, he consistently identified the core of the problem and knew how to develop innovative solutions. Even as new business developments brought shifting requirements, he always kept the bigger picture in view and skilfully set the right priorities.",
      attribution: "Board Member, Zurich",
    },
    {
      quote:
        "Outstanding knowledge and above-average experience in design and communication strategy. He coordinates tasks and projects with exceptional efficiency, flexibility and focus. He maintains an excellent communication style at all times and treats colleagues with respect, even in difficult situations.",
      attribution: "Senior Marketing Manager, Entrepreneurship & Education",
    },
    {
      quote:
        "What impressed me was how Antonio Herrera repeatedly manages, in a very short time, to turn specialists who have never worked together and come from very different fields into a team that pursues a shared goal and pushes each other to top performance.",
      attribution: "Business Owner, Zurich",
    },
    {
      quote:
        "Working together was extraordinarily constructive. Antonio showed me a path and developed a concrete strategy to approach my relationships. What touched me most was the clarity he brought: detached from the past, focused on what truly matters now. I have a new foundation to keep building on.",
      attribution: "Executive, Board Member, Finance",
    },
    {
      quote:
        "Everything we did together was solid. Antonio structured my thinking, brought out my potential and showed me how to turn creativity into something real and tangible. The way he thinks and works is human intelligence at its best.",
      attribution: "HNW Young Professional, Higher Education",
    },
  ] as Testimonial[],

  services: {
    sectionName: "Creative Business Design Services",
    headline: "Explore how we can work together",
    groups: [
      {
        title: "Consulting & Facilitation",
        audience: "For companies and consulting partners navigating transformation.",
        description:
          "Creative and strategy workshop facilitation, leadership offsites, change communication design, team building, development and integration, stakeholder alignment.",
      },
      {
        title: "Brand & Experience Design",
        audience: "For companies and founders building what people see, feel and remember.",
        description:
          "Brand identity, event design, spatial and interior design for brand-critical environments and websites.",
      },
      {
        title: "Mentorship & Education",
        audience: "For individuals, companies and institutions investing in people.",
        description:
          "Executive mentoring, lectures and programmes in Creative Business Design, design thinking and creative strategy.",
      },
    ] as ServiceGroup[],
    individualServices: {
      heading: "Individual Services",
      items: [
        {
          title: "1:1 Partnership",
          description:
            "We leverage your insights, profile and background into unique qualities to provide you with highly personalised guidance, genuine encouragement, and tailored resources that empower you to reach your absolute best.",
        },
        {
          title: "People Focus",
          description:
            "We act as dynamic conductors for your advisors, peers or teams, combining infectious optimism while naturally aligning each member's unique strengths and flexibly coordinating resources to drive highly efficient, productive results.",
        },
        {
          title: "Business Focus",
          description:
            "We connect your business network, sharing valuable insights and experiences while fostering an optimistic, unified environment that helps everyone see how their contributions fit into a meaningful, larger purpose.",
        },
      ],
      cta: bookCta("Individual Services Inquiry"),
    },
  },

  method: {
    headline: "Curated and proprietary methodology to structure lasting change.",
    intro:
      "Creative Business Design is the framework behind HERR Design Collective, delivering a layered process moving from deep human understanding to strategic execution.",
    steps: [
      {
        name: "Research.",
        description:
          "Understanding the real context: people, culture, market and constraints.",
      },
      {
        name: "Gallup CliftonStrengths.",
        description:
          "A psychometric assessment that identifies a person's natural patterns of thinking, feeling and behaving, used early to understand the people at the centre of the work.",
      },
      {
        name: "KOMPATH Method.",
        description:
          "Proprietary framework rooted in empathy-led communication and work process design, a method for relationship building, productivity and agile collaboration across five layers.",
        layers: ["Awareness", "Values", "Empathy", "Communication", "Action"],
      },
      {
        name: "PRISM Method.",
        description:
          "Proprietary framework for aligning and integrating an individual or business vision among core personal and professional dimensions, focusing on people and strategic direction.",
        dimensions: [
          { name: "Identity", color: "#C16170" },
          { name: "Relationships", color: "#A98AC4" },
          { name: "Work", color: "#E0BB52" },
          { name: "Spaces", color: "#8FB694" },
          { name: "Leadership", color: "#7B9AC4" },
        ],
      },
      {
        name: "Design Thinking & Co-Creation.",
        description:
          "Human-centred approach to problem-solving, focused on deeply understanding human needs, challenging assumptions and creating practical, innovative solutions with the people who will live them.",
      },
      {
        name: "Strategic Design.",
        description:
          "Translate goals into systems, services, products and structures that are coherent, human-centred and operationally sound, bridging high-level strategy and concrete execution.",
      },
    ] as MethodStep[],
  },

  collective: {
    heading: "Collective empathy and expertise",
    body: [
      "From HR and software development to art curation and architecture, we bring the right specialists into every engagement, collaborating and co-creating so your vision is built with real depth.",
      "HERR Design Collective is a Creative Business Design practice where strategy, relationships and design converge to move organisations, brands and people forward.",
    ],
    specialists: [
      {
        name: "Egezon Kaloshi",
        role: "HR Business Partner, UK",
        portraitId: "herr-egezon-kaloshi",
      },
      {
        name: "Jenna Rinderknecht",
        role: "Designer, CH",
        portraitId: "herr-jenna-rinderknecht",
      },
      {
        name: "Luis Pinto",
        role: "Software Developer, CL",
        portraitId: "herr-luis-pinto",
      },
      {
        name: "Lara Sutter",
        role: "Art Curator, CH",
        portraitId: "herr-lara-sutter",
      },
      {
        name: "Danilo Anchora",
        role: "Architect, CH",
        portraitId: "herr-danilo-anchora",
      },
    ] as Person[],
    advisoryBoard: [
      {
        name: "Dr. Caroline Whitfield",
        role: "International Entrepreneurship, UK",
        portraitId: "herr-caroline-whitfield",
      },
      {
        name: "Stefan Kopp",
        role: "Finance, CH",
        portraitId: "herr-stefan-kopp",
      },
      {
        name: "Dr. Norbert Diaz de Arce",
        role: "Art & Music, DE",
        portraitId: "herr-norbert-diaz-de-arce",
      },
      {
        name: "Angeles Torres",
        role: "Human Development, USA",
        portraitId: "herr-angeles-torres",
      },
      {
        name: "Leopoldo Benitez",
        role: "Economics, VE",
        portraitId: "herr-leopoldo-benitez",
      },
    ] as Person[],
  },

  cases: {
    headline: "Selected Case Studies",
    entries: [
      {
        title: "Event Brand & Integration Workshop for TEDxZurich",
        description:
          "Event brand identity design and identity direction: typography system, colour world, stage backdrop, Instagram filter, digital-to-tangible installation, plus a team workshop.",
        outcome:
          "two identity cycles delivered for the annual event, team transition supported",
        expertise: ["Brand Strategy, Identity", "Event Production", "Facilitation"],
      },
      {
        title: "Two Concept Directions for a Financial Institution's Employee Gala",
        description:
          "Engaged as art director by an international events agency for a gala in Lucerne. Two complete concept directions, guest journeys, venue strategy across three locations, full visual direction.",
        outcome: "two gala dinner concepts developed to reward employees",
        expertise: ["Employee Engagement", "Event Concept", "Creative Production"],
      },
      {
        title: "Brand and Launch System for a Digital Marketplace",
        description:
          "Name and brand identity in use today, high-fidelity funnel website, certification and onboarding systems with form automation and a supporting business case.",
        outcome:
          "platform launched, 140+ provider onboardings, 82 certification responses",
        expertise: ["Branding", "Service Design", "Workshop Facilitation"],
      },
      {
        title: "Communication Programme for an IT Company",
        description:
          "Communication programme for an IT company navigating structural change: stakeholder workshops, communication strategy, a brand value pyramid and the first implementation stage.",
        outcome: "brand communication strategy delivered",
        expertise: [
          "Corporate Communications",
          "Stakeholder Consulting",
          "Workshop Facilitation",
        ],
      },
      {
        title: "An Award Event, Designed to Scale",
        description:
          "Event design and organisation for an employer award. Assembled the supplier network and scoped a multi-year collaboration with structured work packages.",
        outcome: "multi-year framework, venue and partner network secured",
        expertise: [
          "Corporate Event Design & Organisation",
          "Branding",
          "Web Design",
          "Strategic Partnership Building",
        ],
      },
    ] as CaseStudy[],
    footnote:
      "We do not share detailed information about our partners in order to protect their privacy. Case studies and testimonials are communicated in a way that does not reveal confidential information. Upon request, we are glad to provide professional references.",
  },

  plan: {
    headline: "Getting started is simple.",
    subheadline:
      "Working with us takes three steps, and none of them requires you to change how you already work.",
    steps: [
      {
        title: "Start a Conversation",
        description:
          "We begin with a short call to understand where you are, what's at stake and what a good outcome looks like for you.",
      },
      {
        title: "We Design the Path",
        description:
          "Together we shape the right approach, whether that's a single workshop, a brand engagement or an ongoing mentorship, matched to your goals and timeline.",
      },
      {
        title: "We Build It Together",
        description:
          "We move into delivery, staying close throughout, so the result isn't just handed over. It's lived.",
      },
    ] as PlanStep[],
    cta: bookCta("Conversation with HERR Design Collective"),
  },

  aboutHerr: {
    headline: "About HERR Design Collective",
    paragraphs: [
      "HERR Design Collective is a Zurich-based design consultancy and Creative Business Design practice working at the intersection of strategy, relationships and design. Founded by Antonio Herrera, the collective supports executives, entrepreneurs and organisations who need business transformation to move beyond the strategy document and become something people actually experience and adopt.",
      "Unlike traditional management consultancies, which typically stop at the level of plans, frameworks and recommendations, HERR Design Collective focuses on the layer where transformation is felt: designed activities, workshops, leadership offsites, brand identity design, event design and the physical or digital spaces where change gets communicated and lived. The practice is built on a proprietary and renowned methodology. It begins with in-depth research and a Gallup CliftonStrengths assessment, understanding both the context and the people within it. From there it moves through the KOMPATH Method, rooted in empathy-led communication and work process design, and into the PRISM Method, a framework for aligning people, relationships and strategic direction. It continues through design thinking and co-creation and into strategic design execution.",
      "This approach draws on Antonio's background in design, business, psychology and communication, alongside more than a decade of experience delivering projects for entrepreneurs, executives, founders, investors and high-profile individuals. HERR Design Collective works with a network of specialists and an advisory board spanning HR, software development, art curation, architecture, international entrepreneurship, finance and economics, so every engagement draws on the right expertise rather than a single generalist perspective.",
      "Services are organised into three groupings. Consulting and Facilitation serves companies and consulting partners navigating transformation. Brand and Experience Design serves organisations building what people see, feel and remember. Mentorship and Education serves individuals and institutions investing in people.",
      "Clients typically come to HERR Design Collective when a change management or transformation initiative risks staying theoretical, when a rebrand needs to be more than a new logo, when a leadership team needs a facilitated space to align, or when a founder wants to build a business with intention rather than by accident. The practice works fluently in English, German and Spanish, serving clients across Switzerland and internationally.",
    ],
  },

  finalCta: {
    headline: "Ready to make your transformation real?",
    body: "Whether you are leading a change initiative, building a brand or shaping the next chapter of your business, the first step is a conversation.",
    cta: bookCta("Conversation with HERR Design Collective"),
  },

  footer: {
    navigation: [
      { label: "Method", href: "#method" },
      { label: "Services", href: "#services" },
      { label: "Cases", href: "#cases" },
      { label: "Collective", href: "#collective" },
    ],
    pages: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Imprint", href: "/imprint" },
    ],
    social: [{ label: "LinkedIn", href: "#" /* TODO: LinkedIn URL */ }],
    contact: {
      email: "contact@herrdesigncollective.com",
      location: "Zurich, Switzerland",
    },
    copyright: "© 2026 HERR Design Collective GmbH",
  },
} as const;

export type Content = typeof CONTENT;
