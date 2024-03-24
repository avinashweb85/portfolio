import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="WEATHER APP"
          des="A weather app in JavaScript allows users to retrieve and display weather information for a specified location. The app typically interfaces with a weather data provider API to obtain real-time weather data, which is then presented to the user in a user-friendly format."
          src={projectOne}
          url="https://avinashweb85.github.io/weather-app/"
          gitUrl="https://github.com/avinashweb85/weather-app"
        />
        <ProjectsCard
          title="QUIZ APP"
          des="A quiz app in JavaScript allows users to take quizzes on various topics and receive feedback on their answers. These apps typically present users with a series of questions, allow them to select answers, and then evaluate their responses to provide a score or feedback."
          src={projectTwo}
          url="https://avinashweb85.github.io/quiz/"
          gitUrl="https://github.com/avinashweb85/quiz"
        />
        <ProjectsCard
          title="TO-DO LIST"
          des="A ToDo list in React provides a user-friendly interface for organizing tasks with features like adding, updating, and deleting tasks. It leverages React's state management and component reusability to create a responsive and efficient task management system."
          src={projectThree}
          url="https://avinashweb85.github.io/todolist/"
          gitUrl="https://github.com/avinashweb85/todolist"
        />
        <ProjectsCard
          title="RAG-AND-DROP"
          des="HTML/CSS drag and drop functionality empowers users to seamlessly rearrange elements on a webpage using mouse interactions, enhancing usability and interactivity without external libraries. This is achieved through HTML's draggable attribute and CSS styling for visual cues."
          src={projectThree}
          url="https://avinashweb85.github.io/DRAG-AND-DROP/"
          gitUrl="https://github.com/avinashweb85/DRAG-AND-DROP"
        />
      </div>
    </section>
  );
}

export default Projects