# Cloud Security Interactive Tool

Welcome to the Cloud Security Interactive Tool, an application designed to help users understand and apply the 14 security principles outlined by the National Cyber Security Centre (NCSC). This tool is a part of a Bachelor thesis project aimed at enhancing cloud security knowledge.

## Live Demo

You can access the live application [here](https://bachelorarbeit-delta.vercel.app).

## Features

- **Interactive Learning:** Users can explore and learn about the 14 NCSC security principles through interactive scenarios and quizzes.
- **User-Friendly Interface:** The application is built with React and features a clean and intuitive design using MUI components.
- **Responsive Design:** The tool is optimized for both desktop and mobile devices.
- **Detailed Feedback:** After each quiz, users receive detailed feedback on their answers, including explanations and correct answers.

## Installation

To run the application locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/FlorianChocholka/Bachelorarbeit.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd ReactApp
    ```
3. **Install the dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    ```bash
    npm start
    ```

## Project Structure

The project is structured into several key components:

- **Home Page:** Introduction to the application with links to the different scenarios.
- **Scenario Pages:** Each of the 14 NCSC security principles has its own page with specific scenarios.
    - Scenario 1: Protection of data in transit
    - Scenario 2: Protection of data at rest
    - Scenario 3: User separation
    - Scenario 4: Governance framework
    - Scenario 5: Operational security
    - Scenario 6: Personnel security
    - Scenario 7: Secure development
    - Scenario 8: Supply chain security
    - Scenario 9: Secure user management
    - Scenario 10: Identity and authentication
    - Scenario 11: Interface protection
    - Scenario 12: Secure service management
    - Scenario 13: Audit information and security alerts
    - Scenario 14: Secure user behavior
- **Result Page:** Summary of user inputs and feedback on decisions made during the scenarios.

## Development

### Tools and Technologies

- **React:** JavaScript library for building user interfaces.
- **MUI:** React component library for faster and easier web development.
- **Vercel:** Platform for deploying web applications.

### Implementation Steps

1. **Setting up the React App:** The project was initialized using Create React App. Dependencies and libraries were installed to support the development.
2. **Development of Scenarios:** Each of the 14 principles was implemented as a separate scenario component with interactive elements managed by React states and props.
3. **Navigation:** The app uses MUI cards for easy navigation between scenarios without a traditional menu bar.
4. **State Management:** React state management was used to handle the app's current state and user inputs.

### Testing and Deployment

- **Testing:** Extensive testing was conducted to identify and fix display and logic errors.
- **Deployment:** The app is deployed on Vercel, linked to a GitHub repository. Every push triggers a new build and deployment pipeline.
