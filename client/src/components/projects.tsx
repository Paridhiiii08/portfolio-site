import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { portfolioData } from '../data/portfolio-data';

export function Projects() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title ${titleVisible ? 'visible' : ''}`}
        >
          Featured Projects
        </h2>
        <div
          ref={contentRef}
          className={`projects-grid ${contentVisible ? 'visible' : ''}`}
        >
          {portfolioData.projects.map((project, index) => {
            // Assign custom links based on project title
            let codeLink = '';
            let descriptionLink = '';

            if (project.title.includes('Election')) {
              codeLink = 'https://github.com/Paridhiiii08/election-sentiment-data';
            } else if (project.title.includes('Business Health')) {
              codeLink = 'https://github.com/Paridhiiii08/Business_Health_Dashboard';
            } else if (project.title.includes('Amazon')) {
              descriptionLink = 'https://www.linkedin.com/posts/paridhi-singh-92a5b9231_powerbi-datavisualization-dataanalytics-activity-7268670828806840320-fG4o/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnuiPIBYWd6Bs0zB1fBCpYxqeuecv75QlY';
            }

            return (
              <div key={index} className="project-card">
                <div className="project-image">
                  <i className={project.icon}></i>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {codeLink && (
                      <a href={codeLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> View Code
                      </a>
                    )}
                    {descriptionLink && (
                      <a href={descriptionLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-info-circle"></i> View Description
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
