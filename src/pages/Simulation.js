import React from "react";
import "../styles/Simulation.css"; // Optional: Add styles if you have a CSS file for styling

function Simulation() {
  return (
    <div className="container">
      <div className="col col-1">
        <h1>Job Sequencing Simulator<br />(Greedy Method)</h1>
        <div className="input-section">
          <label htmlFor="numJobs">Enter the number of jobs:</label>
          <div className="row">
            <input type="number" className="num-job-field" id="numJobs" min="1" />
            <button
              className="num-jobs"
              onClick={() => window.generateJobInputs()}
            >
              Enter
            </button>
          </div>
        </div>
        <div id="jobInputs" className="job-inputs-section">
          <h3>Enter Job Details:</h3>
          <table id="jobTable">
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Profit</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody id="jobDetails">
              <tr>
                <td>
                  <input type="text" placeholder="Job 1 ID" />
                </td>
                <td>
                  <input type="number" placeholder="Profit" />
                </td>
                <td>
                  <input type="number" placeholder="Deadline" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Job 2 ID" />
                </td>
                <td>
                  <input type="number" placeholder="Profit" />
                </td>
                <td>
                  <input type="number" placeholder="Deadline" />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="job-seq-btn"
            id="calculateSequenceBtn"
            onClick={() => window.calculateJobSequence()}
          >
            Simulate
          </button>
        </div>
      </div>
      <div className="col col-2">
        <div id="result" className="result-section"></div>
      </div>
    </div>
  );
}

export default Simulation;
