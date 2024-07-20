import React from "react";
import "./project.css";
import tic from "./tic.png";
import blog from "./blog.png";
import hotel from "./hotel.png";
import whiteboard from "./whiteboard.png";

const Practice = () => {
  return (
    <div className="animation">
      <h1
        style={{
          marginTop: "8rem",
          paddingLeft: "1rem",
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "sans-serif",
        }}
      >
        PROJECTS
      </h1>
      <section>
        <div id="project4div">
          <div className="paragraph">
            <h2 className="pName">Whiteboard</h2>
            <div className="paracontainer4">
              <p className="p4description">
                The purpose of a whiteboard is to visualize thoughts, concepts,
                write down ideas, explain and teach.We have some authentication
                check only those who are already registered in our system can
                enter into the whiteboard and if they are not then they need to
                sign up.{" "}
              </p>
              <p style={{ marginTop: "0.3rem" }}>
                Our whiteboard consists of many features like shapes, line,
                upload images from the web, pen, sticky notes, different color,
                undo and redo option, save document.
              </p>
            </div>
            <br />
            <div className="requirement4">
              <h4>Required knowledge of:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Mongo DB</li>
                <li>Express</li>
                <li>Node JS</li>
              </ul>
            </div>
            <img className="img4" src={whiteboard} alt="whiteboard"></img>
          </div>
        </div>

        <div id="project2div">
          <div className="paragraph">
            <h2 className="pName">Blog Website</h2>
            <div className="paracontainer2">
              <p className="p2description">
                This project allow you to easily create, edit, and delete your
                content. Our user-friendly platform empowers you to manage your
                posts effortlessly.
              </p>
            </div>
            <br />

            <div className="requirement2">
              <h4>Required knowledge of:</h4>
              <ul>
                <li>EJS</li>
                <li>CSS</li>
                <li>MONGO DB</li>
                <li>NODE JS</li>
              </ul>
            </div>
          </div>
          <img src={blog} alt="vote" className="img2"></img>
        </div>

        <div id="project1div">
          <div className="paragraph">
            <h2 className="pName">Unbeatable Tic-Tac-toe</h2>
            <div className="paracontainer1">
              <p className="p1description">
                This is a simple tic-tac-toe game that uses the mini-max
                algorithm as an AI player against the human player so it never
                loses. Minimax Algorithm In real life, a human would think of
                all the possible consequences for each move. This is where the
                minimax algorithm comes handy. The algorithm evaluates the moves
                that lead to a terminal state based on the players’ turn. It
                will choose the move with maximum score when it is the AI’s turn
                and choose the move with the minimum score when it is the human
                player’s turn. Using this strategy, Minimax avoids losing to the
                human player.
              </p>
            </div>
            <br />

            <div className="requirement1">
              <h4>Required knowledge of:</h4>
              <ul>
                <li>C++</li>
                <li>OOPS</li>
              </ul>
            </div>
          </div>
          <img src={tic} alt="bank" className="img"></img>
        </div>

        <div id="project3div">
          <div className="paragraph">
            <h2 className="pName">Hotel Management System</h2>
            <div className="paracontainer3">
              <p className="p3description">
                This innovative project leverages file handling to manage all
                aspects of hotel operations efficiently. From booking and
                reservations to guest check-in/check-out and billing, our system
                ensures seamless operations by storing and retrieving data
                securely from files. Designed for ease of use and reliability,
                it helps hotel staff maintain organized records and deliver
                exceptional guest experiences.
              </p>
            </div>
            <br />
            <div className="requirement3">
              <h4>Required knowledge of:</h4>
              <ul>
                <li>C++</li>
                <li>FILE HANDLING</li>
              </ul>
            </div>
            <img className="img3" src={hotel} alt="portfolio"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice;
