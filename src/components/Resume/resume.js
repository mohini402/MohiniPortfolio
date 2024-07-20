import React from "react";
import "./resume.css";

const Resume = () => (
  <div className="animation resumestyle">
    <h1 className="main">RESUME</h1>
    <div>
        <button type="button" className="resumeBtn"><a href="https://drive.google.com/file/d/1ttnexeysYao3MAkHcNz9kPJ8_Kf9a376/view?usp=drive_link">Download CV</a></button>
    </div>
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-list">
        <div className="one">
          <p className="session">2022-23</p>
          <h3>Master's Of Computer Application</h3>
          <p className="college">Raja Balwant Singh Management Technical Campus, Agra</p>
          <p className="college">CGPA: 8.7</p>
        </div>
        <div className="two">
          <p className="session">2019-22</p>
          <h3>Bachelor's Of Computer Application</h3>
          <p className="college">Dr. MPS Group Of Institution College Of Business Studies, Agra</p>
          <p className="college">Percentage: 81%</p>
        </div>

      </div>

      <div className="skills-container">
        <h2>Skills</h2>
        <div className="list-container">
          <ul className="list">
            <li>C/C++ Programming language</li>
            <li>Core Java</li>
            <li>Data Structure</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>

      <div className="certifications-container">
        <h2>Certifications</h2>
        <div className="certificates">
          <ul className="clist">
            <li>
              <a style={{color:'blue'}} href="https://drive.google.com/file/d/1BxoUVqYGBS8-xwiGvZPfmRhq4USL6DHx/view">
                Udemy Web Development Bootcamp Course Certificate
              </a>
            </li>
            <li>
              <a style={{color:'blue'}} href="https://drive.google.com/file/d/1R7PJY_3tPAHzaIawrjxZZvtD3Yrl8vX7/view">
                Problem Solving Certificate From Hackerrank
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
