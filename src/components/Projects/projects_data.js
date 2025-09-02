import mathgpt from "../../images/math_gpt.jpeg";
import mlmvpproject from "../../images/ml-mvp-project.png";
import kruskalmaze from "../../images/kruskal-maze.png"
import reversi from "../../images/reversi.png";
import ai_poker from "../../images/poker_project.jpeg"

const projects = [
    {
        name: "Heads-Up Texas Hold’em AI Agents",
        skills: "Python, PyTorch, Pandas, Matplotlib, Git, LaTeX",
        description: [
            "• Benchmarked DQN, CFR, and Bayesian poker agents against seven different opponent archetypes (bluff-heavy, cautious, random, etc) over 10,000+ games",
            "• Built a Pandas/Matplotlib pipeline to track profit, fold rate, and showdown win rate with publication-quality plots",
            "• Co-authored a 13-page LaTeX paper on project design and key insights on agent adaptability and exploitability",
        ],
        img: ai_poker,
        ghlink: "https://github.com/harish-sundar/ai-poker-project",
        newslink: "https://drive.google.com/file/d/1caAylmmx84nxa4RDArKGU217ujcZHue4/view?usp=sharing"
    },
    {
        name: "MathGPT",
        skills: "Python, Flask, API Integration, OpenAI API, HTML, CSS",
        description: [
            "• Developed a Flask web application to offer personalized tutoring services in mathematics",
            "• Integrated OpenAI API (GPT-3.5 model) to provide customized feedback for each prompt based on the Socratic method of teaching, ensuring a tailored and effective learning experience for users",
            "• Achieved fourth place in the Dream Hack 2023 hackathon hosted by Harvard University",
            "• Featured in Khoury News (newsletter for Northeastern's CS department)",
        ],
        img: mathgpt,
        ghlink: "https://github.com/harish-sundar/mathsGPT",
        newslink: "https://www.khoury.northeastern.edu/mathgpt-first-year-students-build-ai-powered-math-tutor-at-harvard-hackathon/",
    },
    {
        name: "NBA MVP Predictor",
        skills: "Python, Machine Learning, Pandas, BS4, Requests, Scikit-learn, Matplotlib, Seaborn",
        description: [
            "• Conducted web scraping and data cleaning on 15,000+ NBA players from 30+ seasons to create a comprehensive database for predictive modeling",
            "• Developed multiple machine learning models, including a RandomForest Regression model with 50 predictors, to predict the NBA MVP standings for the upcoming season with a maximum accuracy of 73%",
            "• Utilized backtesting techniques to evaluate model performance and reduce overfitting for increased accuracy",
        ],
        img: mlmvpproject,
        ghlink: "https://github.com/harish-sundar/nba-mvp-predictor",
    },
    {
        name: "Reversi",
        skills: "Java, Java Swing",
        description: [
            "• Developed a Java Swing application for the classic game Reversi, following the MVC architecture to separate UI, logic, and data",
            "• Engineered three levels of computerized players, implementing game strategies for optimized decision-making",
            "• Designed gameplay functionality for both square and hexagonal boards using abstraction",
            "• Thoroughly tested gameplay mechanics and UI components to ensure reliability",
            "• Source code available upon request",
        ],
        img: reversi,
    },
    {
        name: "Kruskal's Kaverns",
        skills: "Java, Javalib Library",
        description: [
            "• Created a Java application using Kruskal’s algorithm to generate complex random mazes and the javalib library to generate complex random mazes with a visual UI",
            "• Implemented breadth-first search and depth-first search algorithms to solve mazes, enabling users to visualize the path and trace the solution",
            "• Added a user-friendly manual maze-solving feature, allowing users to play and solve the maze themselves",
        ],
        img: kruskalmaze,
        ghlink: "https://github.com/harish-sundar/kruskals-kaverns",
    },

]

export default projects;
