import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { portfolioData } from '../data/portfolio-data';

export function Experience() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  const { ref: publicationsTitleRef, isVisible: publicationsTitleVisible } = useScrollAnimation();
  const { ref: publicationsRef, isVisible: publicationsVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Title */}
        <h2 
          ref={titleRef} 
          className={`section-title ${titleVisible ? 'visible' : ''}`}
        >
          Professional Experience
        </h2>

        {/* Experience Timeline */}
        <div 
          ref={experienceRef} 
          className={`experience-timeline ${experienceVisible ? 'visible' : ''}`}
        >
          <div className="timeline-line"></div>
          <div className="experience-item">
            <div className="experience-date">{portfolioData.experience.period}</div>

            {/* ✅ Hyperlinked Position Title */}
            <h3 className="experience-title">
              <a
                href="/certificate"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                {portfolioData.experience.position}
              </a>
            </h3>

            <div className="experience-company">{portfolioData.experience.company}</div>
            <div className="experience-description">
              <ul>
                {portfolioData.experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Publications & Certifications */}
        <h2 
          ref={publicationsTitleRef} 
          className={`section-title ${publicationsTitleVisible ? 'visible' : ''}`}
          style={{ marginTop: '4rem' }}
        >
          Publications & Certifications
        </h2>

        <div 
          ref={publicationsRef} 
          className={`publications-grid ${publicationsVisible ? 'visible' : ''}`}
        >
          {portfolioData.publications.map((publication, index) => (
            <div key={index} className="publication-item">
              {/* ✅ Title as link if available */}
              {publication.link ? (
                <h3 className="publication-title">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    {publication.title}
                  </a>
                </h3>
              ) : (
                <h3 className="publication-title">{publication.title}</h3>
              )}

              <div className="publication-details">{publication.details}</div>

              {/* ✅ Render HTML if description contains <ul> (certifications) */}
              {publication.description.includes('<ul>') ? (
                <div
                  className="publication-description"
                  dangerouslySetInnerHTML={{ __html: publication.description }}
                />
              ) : (
                <p className="publication-description">{publication.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
