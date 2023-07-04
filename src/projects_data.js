import mathgpt from "./images/math_gpt.jpeg";
import mlmvpproject from "./images/ml-mvp-project.png";
import kruskalmaze from "./images/kruskal-maze.png"


const projects = [
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
    },
    {
        name: "NBA MVP Predictor",
        skills: "Python, Machine Learning, Pandas, BS4, Requests, Scikit-learn, Matplotlib, Seaborn",
        description: [
            "• Conducted web scraping and data cleaning on 15,000+ NBA players from 30+ seasons to create a comprehensive database for predictive modeling",
            "• Developed multiple machine learning models, including a RandomForest Regression model with 50 predictors, to predict the NBA MVP standings for the upcoming season with a maximum accuracy of 73%",
            "• Utilized backtesting techniques to evaluate model performance and reduce overfitting for increased accuracy",
            "• Predicted NBA 2023-2024 MVP: Giannis Antetokounmpo",
        ],
        img: mlmvpproject,
        ghlink: "https://github.com/harish-sundar/nba-mvp-predictor",
    },
    {
        name: "Kruskal's Kaverns",
        skills: "Java, Javalib Library",
        description: [
            "• Created a Java application using Kruskal’s algorithm to generate complex random mazes",
            "• Implemented breadth-first search and depth-first search algorithms to solve mazes, enabling users to visualize the path and trace the solution",
            "• Added a user-friendly manual maze-solving feature, allowing users to play and solve the maze themselves",

        ],
        img: kruskalmaze,
        ghlink: "https://github.com/harish-sundar/kruskals-kaverns",
    },

]

export default projects;