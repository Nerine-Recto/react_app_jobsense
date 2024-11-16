import React, { useEffect, useState } from 'react';
import '../styles/Education.css';

function Education() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const content = e.target;
      const scrolled = content.scrollTop;
      const maxScroll = content.scrollHeight - content.clientHeight;
      const progress = Math.round((scrolled / maxScroll) * 100) || 0;
      setScrollProgress(progress);
    };

    const contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="education-container">
      <div className="container">
        <div className="row">
          <div className="col col-1">
            <div className="content">
              <h1>Job Sequencing with Deadlines</h1>
              <p>
                Job sequencing with deadlines is a problem that involves scheduling a set of jobs to maximize profit while adhering to their respective deadlines. This approach assumes that each job can be completed in exactly one unit of time. If jobs have different durations, a more advanced scheduling algorithm might be necessary.
              </p>
              {/* Rest of the content remains the same */}
            </div>
            <div className="progress-bar">
              <span id="progress-text">{scrollProgress}%</span>
            </div>
          </div>
          
          <div className="col col-2">
            <div className="card card-1">
              <iframe
                width="480"
                height="300"
                src="https://www.youtube.com/embed/zPtI8q9gvX8?si=WnJwULrTwETsDrfr"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            
            <div className="card card-2">
              <h3>More About Job Sequencing Problems</h3>
              <article className="related-article">
                <a
                  href="https://www.geeksforgeeks.org/job-sequencing-problem/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Job Sequencing Problem</h4>
                  <p>Greedily choose the jobs with maximum profit first, by sorting the jobs in decreasing order of their profit.</p>
                </a>
              </article>
              <article className="related-article">
                <a
                  href="https://www.tutorialspoint.com/data_structures_algorithms/job_sequencing_with_deadline.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Job Sequencing with Deadline</h4>
                  <p>Job Sequencing with Deadline - Job scheduling algorithm is applied to schedule the jobs on a single processor to maximize the profits.</p>
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;