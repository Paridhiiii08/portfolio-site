import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { portfolioData } from '../data/portfolio-data';
import dataAnalystImage from './Data_analyst.png';

export function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title ${titleVisible ? 'visible' : ''}`}
        >
          About Me
        </h2>

        <div
          ref={contentRef}
          className={`about-grid custom ${contentVisible ? 'visible' : ''}`}
        >
          <div className="about-box">
            <div className="about-text">
              {portfolioData.about.text.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  {index < portfolioData.about.text.length - 1 && <br />}
                </p>
              ))}

              <div className="about-links">
                <a href="https://www.linkedin.com/in/paridhi-singh-92a5b9231" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/Paridhiiii08" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="mailto:paridhisingh713@gmail.com">
                  <i className="fas fa-envelope"></i> Email
                </a>
                <a href="tel:+918470922595">
                  <i className="fas fa-phone"></i> Contact
                </a>
              </div>
            </div>

            <img
              src={dataAnalystImage}
              alt="Data Analyst"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
