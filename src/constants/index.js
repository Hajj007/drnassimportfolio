import {
  medicalresearch,
  stemcells,
  neuroscience,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  /*tailwind,*/
  redux,
  nodejs,
  generalsurgery,
  neurosurgery,
  gym,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  criticalcare,
  traumasurgery,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
 
  {
    title: "Stem Cells",
    icon: stemcells,
  },

  {
    title: "Neurosurgery",
    icon: neurosurgery,
  },

  {
    title: "General Surgery",
    icon: generalsurgery,
  },

  {
    title: "Critical Care",
    icon: criticalcare,
  },

  {
    title: "Trauma Surgery",
    icon: traumasurgery,
  },

  {
    title: "NeuroScience",
    icon: neuroscience,
  },

  {
    title: "Medical Research",
    icon: medicalresearch,
  },

  {
    title: "Gym Owner",
    icon: gym,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  /*{
    name: "Tailwind CSS",
    icon: tailwind,
  },*/
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Surgical Instructor",
    company_name: "University of Blamand",
    icon: shopify,
    iconBg: "#383E56",
    date: "2002 - 2010",
    points: [
      "add your text here asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
    ],
  },
  {
    title: "Neurosurgeon",
    company_name: "Fouad Khoury Hospital",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2014 - Present",
    points: [
      "add your text here asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
    ],
  },
  {
    title: "Neurosurgeon Biotechnologist",
    company_name: "ACE Cells Lab Ltd.",
    icon: meta,
    iconBg: "#383E56",
    date: "2017 - Present",
    points: [
      "add your text here asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
    ],
  },
  {
    title: "Stem Cell Therapeutic Techniques Developer",
    company_name: "ACE Cells Lab Ltd.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Present",
    points: [
      "add your text here asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
      "asdfghjklasdfghjklasdfghjklasdfghjkl",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "When i thought my brother had no chance, Dr Nassim brought him back to life",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I can not thank Dr Nassim and his team for restoring my injured knee.",
    name: "Daniel Fernandez",
    designation: "Foemer football player",
    company:"Portugal national team",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Daniel_Fernandes_2012_%28cropped%29.jpg/220px-Daniel_Fernandes_2012_%28cropped%29.jpg",
  },
  {
    testimonial:
      "add text hereadd text hereadd text hereadd text hereadd text hereadd text hereadd text here!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stem Cells Therapy for Multiple Sclerosis",
    description:
      "Multiple sclerosis (MS) is the most frequent demyelinating disease of the central nervous system (CNS) associated with inflammatory plaques of white matter demyelination, oligodendrocyte destruction, reactive gliosis and axonal degeneration. In this chapter, we first review the pathological process of axonal degeneration in MS and discuss how these changes cause clinical symptoms of MS. We then discuss the pharmacological treatment to improve the clinical symptoms. Finally, we highlight how the autologous hematopoietic stem cell transplantation (AHSCT) can be effective for aggressive MS patients, who fail to respond to drug therapies, and also propose the future challenges of AHSCT.",
    tags: [
     {
        name: "stemcells",
        color: "blue-text-gradient",
      },
      {
        name: "MS",
        color: "green-text-gradient",
      },
      {
        name: "neurology",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://link.springer.com/chapter/10.1007/978-981-15-4370-8_7",
  },
  {
    name: "A case report of congenital glycogen storage liver cirrhosis treated with bone marrow derived stem cells",
    description:
      "Liver cirrhosis represents a state of end-stage failure that is usually fatal. The condition results in liver dysfunction, recurrent ascites, encephalopathy, renal failure, splenomegaly, bleeding, and a poor quality of life in general. With the current severe shortage of donated organs, the only available treatment in the developing countries remains palliative care. We report a case of congenital metabolic liver cirrhosis due to glycogen storage disease diagnosed at age eight. The patient, a male, received bone marrow derived mononuclear cells (BMMC) at age 16 and again at age 17 with significant improvement of his biochemical liver function tests, ascites build-up, asthenia, splenomegaly and quality of life. Furthermore, liver biopsies showed clear reduction of the inflammation and fibrosis from Ishak score dropped from 3 to 1 paralleling the symptomatic improvement of the patient.",
    tags: [
      /*{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },*/
    ],
    image: jobit,
    source_code_link: "https://sci.amegroups.com/article/view/16404/16528",
  },
  {
    name: "Bone marrow derived stem cell therapy for type 2 diabetes mellitus",
    description:
      "Stem Cell Investigation, to add more text to be coherent with the previous two publications  to add more text to be coherent with the previous two publications  to add more text to be coherent with the previous two publications  to add more text to be coherent with the previous two publications  to add more text to be coherent with the previous two publications  to add more text to be coherent with the previous two publications  to add more text to be coherent with the previous two publications  to add more text to be coherent with the previous two publications ",
    tags: [
     /* {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },*/
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
