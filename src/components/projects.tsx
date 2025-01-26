import React from 'react';
import '../style/projects.css'; // Ensure the path is correct
import Cards from './cards';

const Projects = () => {
  return (
    <section className='project-section' id='projects'>
      <div className="heading2">PROJECTS</div>
      <div className='project'>
        {/* Ensure that the image paths are correct and placed in the 'public/images' directory */}
        <Cards 
          imageSrc='/images/cal.avif' 
          nameCall='CALCULATOR' 
          paragraph='A command-line interface calculator that performs basic arithmetic operations, including addition, subtraction, multiplication, and division.'
        />

        <Cards 
          imageSrc='/images/atm.png' 
          nameCall='ATM' 
          paragraph='This project is a command-line interface (CLI) ATM simulator built with TypeScript and Inquirer.js, offering a virtual banking experience.'
        />

        <Cards 
          imageSrc='/images/todo.jpg' 
          nameCall='TODO APP' 
          paragraph='This project is a command-line interface (CLI) to-do list application built with TypeScript and Inquirer.js, enabling users to effectively manage their tasks.'
        />

        <Cards 
          imageSrc='/images/stop.jpg' 
          nameCall='COUNTDOWN' 
          paragraph='This command-line interface (CLI) countdown timer application, developed with TypeScript and Inquirer.js, is designed to help users effectively manage and track their time.'
        />

        <Cards 
          imageSrc='/images/game.jpg' 
          nameCall='ADVENTURE GAME' 
          paragraph='This project is a command-line interface (CLI) adventure game developed with TypeScript and Inquirer.js, providing a text-based interactive experience for players.'
        />

        <Cards 
          imageSrc='/images/quiz.jpg' 
          nameCall='Quiz App' 
          paragraph='A command-line interface calculator that performs basic arithmetic operations, including addition, subtraction, multiplication, and division.'
        />

        <Cards 
          imageSrc='/images/stm.png' 
          nameCall='STUDENT MANAGEMENT' 
          paragraph='This project is a command-line interface Student management system developed using TypeScript and Inquirer.js, providing a text-based interactive experience for managing student records.'
        />

        <Cards 
          imageSrc='/images/cc.png' 
          nameCall='CURRENCY CONVERTER' 
          paragraph='This project is a command-line interface (CLI) currency converter built with TypeScript and Inquirer.js, offering an interactive text-based experience for currency conversion.'
        />

        <Cards 
          imageSrc='/images/word.png' 
          nameCall='WORD COUNTER' 
          paragraph='This project is a command-line interface (CLI) word counter developed with TypeScript and Inquirer.js, providing an interactive text-based experience for counting words.'
        />
      </div>
    </section>
  );
}

export default Projects;
