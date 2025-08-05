import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { portfolioData } from '../data/portfolio-data';

export function Skills() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 
          ref={titleRef} 
          className={`section-title ${titleVisible ? 'visible' : ''}`}
        >
          Skills & Expertise
        </h2>
        <div 
          ref={contentRef} 
          className={`skills-grid ${contentVisible ? 'visible' : ''}`}
        >
          {portfolioData.skills.categories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
