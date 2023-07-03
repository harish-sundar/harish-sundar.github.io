import nuLogo from './images/nu_logo.jpeg';
import ccmLogo from './images/ccm_logo.jpeg';
import mcstLogo from './images/mcst_logo.jpeg';

const education = [
    {
        place: "Northeastern University",
        title: "Bachelor of Science in Computer Science, Minor in Mathematics",
        location: "Boston, MA",
        date: "Aug 2022 - May 2026",
        description: [
          "Concentration: Artificial Intelligence",
          "Courses: Object-Oriented Design, Fundamentals of Computer Science I/II, Foundations of Cybersecurity, Discrete Structures, Mathematics of Data Models, Linear Algebra, Introduction to Mathematical Reasoning",
          "Activities: NU Electric Racing Club (Software Subteam), Husky Competitive Programming Club",
          "Dean's List"
        ],
        icon: nuLogo,
    },
    {
        place: "County College of Morris",
        title: "Dual Enrollment, Computer Science",
        location: "Randolph, NJ",
        date: "Aug 2021 - May 2022",
        description: [
          "26 transferrable credits earned",
          "Courses: Data Structures & Algorithms, Computer Architecture & Assembly Language, Analytic Geometry & Calculus I/II, Probability & Statistics, English Composition I/II",
          "Dean's Honor List"
        ],
        icon: ccmLogo,
    },
    {
        place: "Morris County School of Technology",
        title: "High School Diploma, Academy for Computer & Information Sciences",
        location: "Denville, NJ",
        date: "Sept 2018 - Jun 2022",
        description: [
          "Attended a selective vocational high school, specializing in computer & information sciences",
          "Activities: hackMCST Head Director, Co-Founder of MCST Mind Matters, STEM Club President, Academy Peer Leader, National Honor Society, National Technical Honor Society, Robotics Club",
          "Awards: Eagle Scout, Presidential Volunteer Service Award, High Honor Roll"
        ],
        icon: mcstLogo,
    },
];

export default education;