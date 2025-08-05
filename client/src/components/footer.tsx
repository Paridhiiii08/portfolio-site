import { portfolioData } from '../data/portfolio-data';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 {portfolioData.profile.name}. All rights reserved. Built with passion for data analytics.</p>
      </div>
    </footer>
  );
}
