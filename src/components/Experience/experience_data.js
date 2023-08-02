import calqlogicImage from "../../images/calqlogic.png";
import prudentialImage from "../../images/prudential.jpeg";
import codeNinjasImage from "../../images/code_ninjas.jpeg";

const experience = [
  {
    id: 1,
    image: calqlogicImage,
    name: "CalQLogic Inc.",
    location: "Los Angeles, CA",
    duration: "June 2023 - Present",
    title: "Data Analytics & Machine Learning Intern",
    quote: "TBD",
  },
  {
    id: 2,
    image: prudentialImage,
    name: "Prudential Financial",
    location: "Newark, NJ",
    duration: "August 2021 - August 2022",
    title: "Data Science Intern",
    quote:
    (
      <ul>
        <li>
        • Automated a variety of data-ingestion and cleanup jobs using Python
          scripts (used boto3, spark, and pandas libraries) for substantial amounts of data in a pipeline
        </li>
        <li>
        • Created dynamic data visualizations in Matplotlib, Seaborn, and PowerBI to provide detailed information on
          multiple raw datasets of consumer data for company decisions
        </li>
        <li>
        • Utilized AWS (S3, Athena, Glue) to effectively store, analyze, and
          query large volumes of raw data for efficient data
          processing
        </li>
        <li>
        • Demonstrated adaptability and flexibility in an agile team environment
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    image: codeNinjasImage,
    name: "Code Ninjas",
    location: "Denville, NJ",
    duration: "May 2021 - August 2021",
    title: "Coding Instructor (Code Sensei)",
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
