import khouryImage from "../../images/khourypic.png";
import calqlogicImage from "../../images/calqlogic.png";
import prudentialImage from "../../images/prudential.jpeg";
import codeNinjasImage from "../../images/code_ninjas.jpeg";

const experience = [
  {
    id: 1,
    image: khouryImage,
    name: "Khoury College of Computer Sciences",
    location: "Boston, MA",
    duration: "January 2024 - Present",
    title: "Teaching Assistant",
    quote: (
      <ul>
        <li>
        • Grading homework and exams for 300+ students in CS 2810: Mathematics of Data Models, offering constructive feedback
        </li>
        <li>
        • Hosting weekly office hours to enhance students' grasp of linear algebraic and statistical applications in machine learning and data science
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
    title: "Data Analytics & Machine Learning Intern",
    quote: (
      <ul>
        <li>
        • Developed a full-stack Flask web application utilizing NLP by integrating the GPT-3.5 LLM and LangChain framework to analyze user-provided CSV files and queries, streamlining data comprehension
        </li>
        <li>
        • Implemented a REST API to craft a TriggerWare connector to the OpenAI API, facilitating seamless communication and data processing between components
        </li>
        <li>
        • Worked closely under the CTO, leveraging architectural skills, API integration, and effective teamwork to ensure project success
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
    title: "Software Engineering Intern",
    quote:
    (
      <ul>
        <li>
        • Automated various data-ingestion and cleanup jobs using Python (boto3, spark, and pandas libraries)
          for substantial amounts of data in a pipeline
        </li>
        <li>
        • Created dynamic data visualizations in Matplotlib, Seaborn, and PowerBI to provide detailed information on
          multiple datasets of consumer data, enhancing data-driven decision making 
        </li>
        <li>
        • Utilized AWS (S3, Athena, Glue) to effectively store, analyze, and
          query raw data for efficient data
          processing
        </li>
        <li>
        • Showcased adaptability as a contributing member of the Data Journey agile team
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
