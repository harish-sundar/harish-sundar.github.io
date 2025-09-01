import northeasternImage from "../../images/nu_logo.jpeg";
import calqlogicImage from "../../images/calqlogic.png";
import prudentialImage from "../../images/prudential.jpeg";
import codeNinjasImage from "../../images/code_ninjas.jpeg";
import libertyMutualImage from "../../images/liberty_mutual.jpeg"
import tdSecuritiesImage from "../../images/td_securities.png"
import afrlImage from "../../images/afrl.png"

const experience = [
  {
    id: 1,
    image: afrlImage,
    name: "Air Force Research Laboratory",
    location: "Rome, NY",
    duration: "August 2025 - December 2025",
    title: "Machine Learning Engineer Intern",
    quote: (
      <ul>
        <li>
        • Current intern conducting applied machine learning and agentic AI research for the U.S. Air Force
        </li>
      </ul>
    ),
  },
  {
    id: 1,
    image: tdSecuritiesImage,
    name: "TD Securities",
    location: "New York, NY",
    duration: "June 2025 - August 2025",
    title: "Software Engineer Intern",
    quote: (
      <ul>
        <li>
        • Led end-to-end development (from UI/UX design to deployment) of a notice download feature on a corporate lending tracker, enhancing document accessibility and streamlining workflows for 200+ loan operations users
        </li>
        <li>
        • Rewrote select UI components with Mantine library, improving consistency with updated design guidelines
        </li>
        <li>
        • Integrated React front-end with Spring Boot API and wrote unit tests in Jest, achieving 93% code coverage
        </li>
      </ul>
    ),
  },
  {
    id: 1,
    image: libertyMutualImage,
    name: "Liberty Mutual Insurance",
    location: "Boston, MA",
    duration: "July 2024 - December 2024",
    title: "Software Engineer Intern",
    quote: (
      <ul>
        <li>
        • Collaborated on the development of home maintenance resource platforms using TypeScript, React, and Strapi to enhance site reliability and user experience for 12,000+ users
        </li>
        <li>
        • Streamlined Learn page management with StrapiJS and GraphQL optimizations, reducing update time by 75%
        </li>
        <li>
        • Employed Cypress for UI testing automation, reducing testing time by 50%
        </li>
        <li>
        • Facilitated 10+ Agile team stand-up and retrospective meetings, improving sprint velocity and on-time task delivery in JIRA
        </li>
      </ul>
    ),
  },
  {
    id: 1,
    image: northeasternImage,
    name: "Northeastern University",
    location: "Boston, MA",
    duration: "January 2024 - May 2024",
    title: "Teaching Assistant",
    quote: (
      <ul>
        <li>
        • Graded homework and exams for 300+ students in CS 2810: Mathematics of Data Models, offering constructive feedback
        </li>
        <li>
        • Hosted weekly office hours to enhance students' grasp of linear algebraic and statistical applications in machine learning and data science
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    image: calqlogicImage,
    name: "CalQLogic Inc.",
    location: "Los Angeles, CA",
    duration: "June 2023 - August 2023",
    title: "Data Analytics & Machine Learning Engineer Intern",
    quote: (
      <ul>
        <li>
        • Developed a Flask chatbot with GPT-4 and LangChain, enabling natural language SQL queries to generate insights from CSV files within the company’s analytics platform, TriggerWare
        </li>
        <li>
        • Built a TriggerWare database connector, extending query flexibility across data plugins and enabling wider integrations
        </li>
        <li>
        • Implemented a REST API linking OpenAI with the platform, paving the way for future NLP integrations with services like IBM Watson
        </li>
        <li>
        • Worked closely under the CTO, leveraging architectural skills, API integration, and effective teamwork to deliver a successful project
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    image: prudentialImage,
    name: "Prudential Financial",
    location: "Newark, NJ",
    duration: "August 2021 - August 2022",
    title: "Software Engineer Intern",
    quote:
    (
      <ul>
        <li>
          • Automated data ingestion and cleanup with Python (boto3, Spark, pandas) for 77,000+ columns, streamlining pipeline processing
          </li>
        <li>
          • Created interactive dashboards in PowerBI and Tableau to visualize consumer data, driving data-driven business decisions
        </li>
        <li>
          • Leveraged AWS (S3, Athena, Glue) to store, query, and process large datasets for scalable analytics
        </li>
        <li>
          • Collaborated as part of the Data Journey Agile team, adapting quickly to project needs and delivering results
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    image: codeNinjasImage,
    name: "Code Ninjas",
    location: "Denville, NJ",
    duration: "May 2021 - August 2021",
    title: "Coding Instructor",
    quote:
    (
      <ul>
        <li>
        • Tutored 250+ K-8 students on various coding skills in multiple languages, including C#, JavaScript, Python, and Scratch, 
        through an interactive and engaging curriculum
        </li>
        <li>
        • Introduced young students to foundational STEM concepts such as game development and web design through hands-on summer camps and workshops
        </li>
      </ul>
    ),
  },
];

export default experience;
