import React from "react";
import "../styles/Quiz.css"; // Add styles if you have a CSS file for the quiz

function Quiz() {
  return (
    <div>
      {/* Level Selection */}
      <div id="level-selection">
        <div className="row row-1">
          <h1>Job Sequencing Quiz (Greedy Method)</h1>
          <h2>Select a Level:</h2>
        </div>
        <div className="row row-2">
          <div className="box">
            <img src="/assets/sample_asset.png" alt="calendar" />
            <button className="btn" onClick={() => window.loadQuiz("easy")}>
              Easy
            </button>
          </div>
          <div className="box">
            <img src="/assets/sample_asset.png" alt="calendar" />
            <button className="btn" onClick={() => window.loadQuiz("medium")}>
              Medium
            </button>
          </div>
          <div className="box">
            <img src="/assets/sample_asset.png" alt="calendar" />
            <button className="btn" onClick={() => window.loadQuiz("hard")}>
              Hard
            </button>
          </div>
        </div>
      </div>

      {/* Quiz Container */}
      <div id="quiz-container" style={{ display: "none" }}>
        <div className="header">
          <h2 id="quiz-title">Quiz</h2>
        </div>
        <div className="problem">
          <h3>
            Arrange the jobs in the correct order below: <br />
            Arrange the jobs in the correct order below: <br />
            Arrange the jobs in the correct order below: <br />
          </h3>
        </div>
        <div className="list">
          <div id="job-list" className="job-list"></div>
        </div>
        <h3>Arrange the jobs in the correct order below:</h3>
        <div id="answer-container" className="answer-container"></div>
        <div className="quiz-btn">
          <button className="reset" id="reset-button" onClick={() => window.resetQuiz()}>Reset</button>
          <button className="check" onClick={() => window.checkAnswer()}>Check Answer</button>
        </div>
        <p id="result"></p>
      </div>
    </div>
  );
}

export default Quiz;
