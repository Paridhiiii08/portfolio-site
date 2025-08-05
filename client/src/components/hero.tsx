import { portfolioData } from '../data/portfolio-data';
import myImage from './image.jpg'; // ✅ Correctly imported image

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-image">
          <img 
            src={myImage} // ✅ Use the imported image variable here
            alt={`${portfolioData.profile.name} - Data Analyst`}
          />
        </div>
        <h1>{portfolioData.profile.name}</h1>
        <p className="subtitle">{portfolioData.profile.title}</p>
        <p className="description">{portfolioData.profile.description}</p>
      </div>
    </section>
  );
}
