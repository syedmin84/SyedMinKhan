import React from 'react';
import ProjectCard from "./ProjectCard";

export default function ProjectContainer() {

  const projectData = [
    {
      number: "01",
      title: "Quiz App",
      description: "A quiz app built with HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js. It has a responsive UI and supports multiple categories. Users can create, update, and delete quizzes. Users can also take quizzes and view their results.",
      imageUrl: "quiz-app.jpg",
      liveLink: "#",
      sourceCodeLink: "#",
      technologies: ["html", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      number: "02",
      title: "Signup and Login Form",
      description: "A signup and login form built with react.js and Tailwind CSS. It has a responsive UI and supports user authentication. Users can sign up, log in, and log out. Users can also view their profile.",
      imageUrl: "form.jpg",
      liveLink: "#",
      sourceCodeLink: "#",
      technologies: ["html", "CSS3", "JavaScript", "Tailwind CSS", "React", "Redux"]
    },
    {
      number: "03",
      title: "Todo App",
      description: "A todo app built with React, Redux, Node.js, Express.js, and MongoDB. It has a responsive UI and supports user authentication. Users can create, update, and delete todos. Users can also mark todos as completed. filter todos by category is on the progress.",
      imageUrl: "todo.png",
      liveLink: "#",
      sourceCodeLink: "#",
      technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
    },
    {
      number: "04",
      title: "Simple Calculator",
      description: "A simple calculator built with Next.js and Tailwind CSS. It has a responsive UI and supports basic arithmetic operations.",
      imageUrl: "calculator.png",
      liveLink: "#",
      sourceCodeLink: "#",
      technologies: ["html", "CSS3", "JavaScript", "Tailwind CSS", "React", "Redux"]
     
    }
  ];

  return (
    <section id="projects-section" className="w-full max-w-[1130px] mx-auto mt-25 lg:mt-30">
      <div className="px-12 xl:px-0">
        <h2 className="text-[#eaedff] text-[26px] sm:text-4xl lg:text-5xl font-bold pb-4 sm:pb-8 relative z-10">
          Here are some of My Projects
        </h2>
        <p className="text-[#ffffff9c] sm:text-[#eaedff] text[15px] sm:text-[18px] md:text-[22px] pb-8 relative z-10">
          Have a look at some of the projects I have worked on.
        </p>
      </div>

      <section className="md:mt-6 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 px-6 sm:px-16 md:px-32 lg:px-8 xl:px-0">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            number={project.number}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveLink={project.liveLink}
            sourceCodeLink={project.sourceCodeLink}
            technologies={project.technologies}
          />
        ))}
      </section>
    </section>
  );
}
