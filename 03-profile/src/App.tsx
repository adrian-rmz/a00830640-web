import React from "react";

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen py-4">
      <h1 className="text-blue-600 text-center text-3xl my-5">
        Adrián Alejandro Ramírez Cruz
      </h1>
      <div className="mx-auto w-4/5 max-w-4xl">
        <section className="bg-white p-5 rounded-lg shadow-md my-5">
          <h2 className="text-blue-600 text-2xl mb-3">Education</h2>
          <p>
            B.S. in Computer Science and Technology, Tecnológico de Monterrey
          </p>
          <p>Academic Talent Scholarship, GPA 4.0/4.0</p>
        </section>
        <section className="bg-white p-5 rounded-lg shadow-md my-5">
          <h2 className="text-blue-600 text-2xl mb-3">Experience</h2>
          <p>
            Software Engineering Internship, Mercedes Benz Trucks (Oct 2022 –
            Oct 2023)
          </p>
          <ul className="list-disc pl-5">
            <li>
              Collaborated with a team of programmers to develop a Python
              algorithm that reads data sheets and generates a fully functional
              CRUD application, resulting in an 80% increase in productivity and
              efficiency.
            </li>
            <li>
              Designed and developed a web application using Jquery, Bootstrap,
              and PostgreSQL that can generate quotes for over 3,000 customers,
              achieving a 35% reduction in quote generation time.
            </li>
          </ul>
          <p>
            Software Engineering Virtual Internship, JPMorgan Chase & Co (Feb
            2022 – Mar 2022)
          </p>
          <ul className="list-disc pl-5">
            <li>
              Created a data analysis system with a stock price data feed using
              Python, resulting in a 40% increase in data accuracy and reduction
              of the processing time.
            </li>
            <li>
              Utilized Perspective, an open-source code for data visualization,
              to develop a visually appealing chart for the trader's dashboard,
              leading to better decision-making and increased profits.
            </li>
          </ul>
        </section>
        <section className="bg-white p-5 rounded-lg shadow-md my-5">
          <h2 className="text-blue-600 text-2xl mb-3">Software Projects</h2>
          <ul className="list-disc pl-5">
            <li>
              Web-Based System with Gamification and Analytics for Service
              Quality Enhancement
            </li>
            <li>FRIDA CV</li>
            <li>Mexican Sign Language Learning App</li>
            <li>
              Autonomous Warehouse Management Simulation with Multi-Agent Robots
            </li>
          </ul>
        </section>
        <section className="bg-white p-5 rounded-lg shadow-md my-5">
          <h2 className="text-blue-600 text-2xl mb-3">
            Leadership & Acknowledgements
          </h2>
          <p>Microsoft Learn Student Ambassador, Beta Milestone</p>
          <p>
            Hack Mty – Achieved 3rd place by implementing generative AI for
            optimizing recruitment processes.
          </p>
        </section>
        <section className="bg-white p-5 rounded-lg shadow-md my-5">
          <h2 className="text-blue-600 text-2xl mb-3">Skills</h2>
          <p>
            Python | JavaScript | C++ | HTML | CSS | SCSS | Bootstrap | jQuery |
            Node.js | Express.js | MySQL | Git & GitHub | Figma | Tailwind CSS |
            MongoDB | React | Azure | Swift | Co-ML
          </p>
        </section>
        <section className="bg-white p-5 rounded-lg shadow-md my-5">
          <h2 className="text-blue-600 text-2xl mb-3">Languages</h2>
          <p>Spanish (Native) | English (B2)</p>
        </section>
        <section className="bg-white p-5 rounded-lg shadow-md my-5 text-center">
          <div className="flex gap-2 justify-center">
            <a href="adrian.rmz.587@gmail.com">adrian.rmz.587@gmail.com</a>
            <span>|</span>
            <a href="+52 951 201 2343">+52 951 201 2343</a>
            <span>|</span>

            <a
              href="https://linkedin.com/in/adrian-rmz"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/adrian-rmz"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
