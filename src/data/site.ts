import { IMG } from "./images";
import type {
  PressArticle,
  Recognition,
  TeamMember,
  TechnologyPractice,
  TimelineItem,
} from "./types";

export const processTitles = ["Assess", "Prove", "Deploy"] as const;

export const practices: TechnologyPractice[] = [
  {
    slug: "industrial-electrification",
    number: "01",
    title: "Industrial Electrification",
    lines: ["INDUSTRIAL", "ELECTRIFICATION"],
    summary:
      "Replacing fuel-fired process heat with electric and electrochemical systems that existing plants can host.",
    image: IMG.power,
    stat: {
      value: "40%",
      label:
        "Potential process-energy reduction in selected industrial applications",
    },
    applications: [
      "Cement and lime kilns",
      "Steel pre-heating",
      "Chemical process heat",
      "Glass and ceramics",
    ],
    steps: [
      "Map every thermal step and its true energy demand.",
      "Test electric systems against the plant's real load profile.",
      "Install beside existing equipment, without a shutdown.",
    ],
  },
  {
    slug: "process-engineering",
    number: "02",
    title: "Process Engineering",
    lines: ["PROCESS", "ENGINEERING"],
    summary:
      "Designing chemistry, heat and flow together, instead of one unit operation at a time.",
    image: IMG.lab,
    stat: {
      value: "25%",
      label:
        "Illustrative reduction in modelled thermal load per tonne of product",
    },
    applications: [
      "Reactor and kiln redesign",
      "Heat integration",
      "Separation processes",
      "Yield optimisation",
    ],
    steps: [
      "Model the whole line, not only the unit being changed.",
      "Validate the model on a bench-scale rig.",
      "Hand over a design the plant team can operate.",
    ],
  },
  {
    slug: "material-systems",
    number: "03",
    title: "Material Systems",
    lines: ["MATERIAL", "SYSTEMS"],
    summary:
      "Characterising and reformulating industrial materials so lower-carbon routes still meet the specification.",
    image: IMG.concrete,
    stat: {
      value: "3×",
      label: "Illustrative gain in screening speed for candidate formulations",
    },
    applications: [
      "Binder chemistry",
      "Supplementary materials",
      "Recovered by-products",
      "Quality assurance",
    ],
    steps: [
      "Characterise current feedstock and product behaviour.",
      "Run candidate formulations through standard tests.",
      "Qualify the result with the customer's own specification.",
    ],
  },
  {
    slug: "carbon-reduction",
    number: "04",
    title: "Carbon Reduction",
    lines: ["CARBON", "REDUCTION"],
    summary:
      "Targeting the emissions that fuel switching cannot reach, at the point where they form.",
    image: IMG.plant,
    stat: {
      value: "60%",
      label:
        "Illustrative share of process emissions addressable in a portfolio scenario",
    },
    applications: [
      "Process CO₂ capture",
      "Pure-stream recovery",
      "Emission accounting",
      "Offtake planning",
    ],
    steps: [
      "Measure where emissions really originate.",
      "Prove capture at pilot scale with clean data.",
      "Connect the recovered stream to a use or storage route.",
    ],
  },
  {
    slug: "energy-systems",
    number: "05",
    title: "Energy Systems",
    lines: ["ENERGY", "SYSTEMS"],
    summary:
      "Matching industrial demand to clean supply with storage, flexibility and smarter dispatch.",
    image: IMG.wind,
    stat: {
      value: "90%",
      label:
        "Illustrative clean-supply coverage in a modelled demonstration site",
    },
    applications: [
      "On-site renewables",
      "Thermal storage",
      "Grid interconnection",
      "Demand flexibility",
    ],
    steps: [
      "Profile demand hour by hour across a full year.",
      "Simulate supply and storage options against it.",
      "Commission dispatch logic with live plant data.",
    ],
  },
  {
    slug: "industrial-automation",
    number: "06",
    title: "Industrial Automation",
    lines: ["INDUSTRIAL", "AUTOMATION"],
    summary:
      "Control layers that keep new processes stable, safe and observable from the first day.",
    image: IMG.factory,
    stat: {
      value: "15%",
      label: "Illustrative reduction in unplanned downtime in a modelled line",
    },
    applications: [
      "Process control",
      "Condition monitoring",
      "Safety interlocks",
      "Operator dashboards",
    ],
    steps: [
      "Audit existing control architecture and data.",
      "Prove new loops in a simulated environment.",
      "Roll out with operator training and clear fallbacks.",
    ],
  },
  {
    slug: "pilot-and-scale",
    number: "07",
    title: "Pilot & Scale",
    lines: ["PILOT &", "SCALE"],
    summary:
      "Taking an idea from bench to demonstration unit through clear gates and shared data.",
    image: IMG.construction,
    stat: {
      value: "12 mo",
      label: "Illustrative time from pilot design to demonstration start",
    },
    applications: [
      "Skid-mounted pilots",
      "Host-plant integration",
      "Demonstration units",
      "Commercial roll-out",
    ],
    steps: [
      "Agree success criteria with the host plant first.",
      "Run the pilot and publish the results, good or bad.",
      "Scale by repeating a design that has already worked.",
    ],
  },
];

const names: [string, string][] = [
  ["Maya Chen", "Chief Executive Officer"],
  ["Daniel Ortiz", "Chief Technology Officer"],
  ["Elena Park", "Head of Process Engineering"],
  ["Marcus Reid", "Industrial Systems"],
  ["Aiko Tanaka", "Electrochemistry"],
  ["Samuel Okoye", "Pilot Operations"],
  ["Lina Haddad", "Materials Science"],
  ["Tomás Reyes", "Automation"],
  ["Priya Nair", "Energy Systems"],
  ["Jonas Weber", "Mechanical Design"],
  ["Sofia Marin", "Data and Modelling"],
  ["Kofi Mensah", "Field Engineering"],
  ["Hana Kim", "Process Safety"],
  ["Rafael Duarte", "Procurement"],
  ["Ingrid Solberg", "Partnerships"],
  ["Omar Farouk", "Quality"],
  ["Nadia Petrova", "Research"],
  ["Ben Carter", "Operations"],
];

export const team: TeamMember[] = names.map(([name, role], i) => ({
  name,
  role,
  image: IMG.p[i],
}));

export const recognitions: Recognition[] = [
  { year: "2026", title: "Industrial Technology Design Award" },
  { year: "2025", title: "Climate Systems Innovation List" },
  { year: "2025", title: "Emerging Industrial Technology" },
];

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "Foundation",
    text: "Two engineers start RURA with a bench rig and a single question about process heat.",
  },
  {
    year: "2023",
    title: "First pilot",
    text: "A skid-mounted unit runs beside a host plant for the first time.",
  },
  {
    year: "2024",
    title: "Industrial validation",
    text: "Long-duration runs show how the system behaves under real feed variability.",
  },
  {
    year: "2025",
    title: "Demonstration phase",
    text: "Detailed design begins for a continuously operating demonstration unit.",
  },
  {
    year: "2026",
    title: "Commercial development",
    text: "Conversations with producers move from studies to deployment plans.",
  },
];

export const articles: PressArticle[] = [
  {
    slug: "first-industrial-electrification-pilot",
    category: "News",
    date: "2026-09-30",
    featured: true,
    title: "RURA completes first industrial electrification pilot",
    excerpt:
      "A host-plant pilot tested electric process heat under real production conditions.",
    quote:
      "Industrial transition starts with systems that can actually be deployed.",
    body: [
      "The pilot ran beside normal production, measuring how electric heat responds to changing feed and load.",
      "Results will shape the demonstration design, including controls and maintenance access.",
    ],
    image: IMG.plant,
  },
  {
    slug: "climate-systems-innovation-list",
    category: "Recognition",
    date: "2026-08-26",
    featured: true,
    title: "RURA named to the Climate Systems Innovation List",
    excerpt:
      "A fictional listing for a fictional company, created for this portfolio design study.",
    quote: "Recognition matters less than the plant that keeps running.",
    body: [
      "This recognition is invented for the portfolio and does not reflect a real award.",
      "It exists to show how an editorial recognition story could be laid out.",
    ],
    image: IMG.tower,
  },
  {
    slug: "demonstration-facility-engineering",
    category: "Projects",
    date: "2026-08-02",
    featured: true,
    title: "Demonstration facility moves into engineering",
    excerpt:
      "Detailed design starts for a unit sized to prove continuous operation.",
    quote:
      "A demonstration is only convincing if it runs for months, not days.",
    body: [
      "Engineering teams are working through layout, utilities and interfaces with a host site.",
      "The facility is planned to prove reliability rather than short campaigns.",
    ],
    image: IMG.construction,
  },
  {
    slug: "process-heat-research-note",
    category: "Research",
    date: "2026-07-14",
    title: "Research note: modelling process heat at plant scale",
    excerpt: "A short note on how RURA frames and tests thermal models.",
    quote: "A model is a claim. We test it before we trust it.",
    body: [
      "The note explains the boundaries and assumptions behind RURA's thermal models.",
      "It invites partners to challenge the numbers before pilots begin.",
    ],
    image: IMG.lab3,
  },
  {
    slug: "materials-testing-programme",
    category: "Projects",
    date: "2026-06-24",
    title: "Materials testing programme adds new feedstocks",
    excerpt:
      "More feedstock types enter the test matrix to map how composition affects results.",
    quote: "Every plant's raw material is a little different.",
    body: [
      "The programme compares sources across purity and particle size.",
      "Data feeds directly into models used for plant sizing.",
    ],
    image: IMG.site,
  },
  {
    slug: "industrial-roundtable-retrofit",
    category: "Industry",
    date: "2026-06-05",
    title: "RURA hosts industrial roundtable on retrofit pathways",
    excerpt:
      "Operators and engineers compare notes on adding new systems to old plants.",
    quote:
      "Retrofit is not a compromise. For most of industry, it is the only route.",
    body: [
      "Participants discussed shutdown windows, safety cases and the cost of downtime.",
      "A summary of open questions will be shared with attendees.",
    ],
    image: IMG.worker,
  },
  {
    slug: "industrial-technology-design-award",
    category: "Recognition",
    date: "2026-05-19",
    title: "Industrial Technology Design Award for the RURA identity",
    excerpt:
      "Another fictional honour, included to demonstrate the recognition layout.",
    quote: "Good design is a form of engineering discipline.",
    body: [
      "This award does not exist; it is placeholder content for the portfolio.",
      "It shows how recognition can be told with large type and little else.",
    ],
    image: IMG.factory,
  },
  {
    slug: "automation-partnership-pilot-control",
    category: "News",
    date: "2026-04-30",
    title: "Automation partnership targets stable pilot control",
    excerpt:
      "A joint effort on control layers for new electrified process steps.",
    quote: "Stability is the feature nobody notices until it is missing.",
    body: [
      "The work covers loop tuning, interlocks and operator interfaces.",
      "Early tests focus on how controls behave when feed quality drifts.",
    ],
    image: IMG.lab2,
  },
  {
    slug: "energy-systems-study-demo-site",
    category: "Research",
    date: "2026-04-09",
    title: "Energy systems study maps clean supply at the demo site",
    excerpt:
      "A year of hourly data shows where storage and flexibility matter most.",
    quote: "Clean power is only useful if it arrives when the plant needs it.",
    body: [
      "The study combines demand profiles with modelled renewable supply.",
      "It identifies the hours where storage changes the answer.",
    ],
    image: IMG.solar,
  },
  {
    slug: "manufacturing-after-carbon-outlook",
    category: "Industry",
    date: "2026-03-18",
    title: "Industry outlook: manufacturing after carbon",
    excerpt:
      "An editorial look at how heavy industry could change over the next decade.",
    quote: "The plants that matter most are the ones already built.",
    body: [
      "The outlook considers process emissions, energy supply and the pace of retrofit.",
      "It is fictional commentary written for the RURA portfolio project.",
    ],
    image: IMG.crane,
  },
];
