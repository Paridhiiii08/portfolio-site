export const portfolioData = {
  profile: {
    name: "Paridhi Singh",
    title: "Data Analyst & Machine Learning Enthusiast",
    description: "Transforming raw data into actionable insights through advanced analytics, machine learning, and compelling visualizations",
    location: "Lucknow",
    phone: "+91 8470922595",
    email: "paridhisingh713@gmail.com"
  },

  about: {
  text: [
    "I'm a BCA graduate from Christ University, Delhi NCR (CGPA 8.63), with hands-on experience in data analysis, dashboard creation, and ETL automation using Python, SQL, and Excel.",
    "I am passionate about transforming raw data into meaningful insights through AI, machine learning, and predictive modeling. My work is supported by practical experience and academic publications in data visualization and biomedical AI.",
    "I actively engage in industry certifications and internships, continuously upgrading my skills in modern data tools, business intelligence, and research."
  ]
},

  skills: {
    categories: [
      {
        title: "Programming Languages",
        icon: "fas fa-code",
        skills: [
          { name: "Python", level: 80 },
          { name: "SQL", level: 90 },
          { name: "Java", level: 75 }
        ]
      },
      {
        title: "Data Analysis & ML",
        icon: "fas fa-chart-bar",
        skills: [
          { name: "Pandas & NumPy", level: 95 },
          { name: "Scikit-learn", level: 80 },
          { name: "Matplotlib & Seaborn", level: 85 }
        ]
      },
      {
        title: "Tools & Platforms",
        icon: "fas fa-database",
        skills: [
          { name: "Power BI", level: 90 },
          { name: "Streamlit", level: 85 },
          { name: "Excel Analytics", level: 95 }
        ]
      }
    ]
  },

  projects: [
    {
      title: "Election Result Prediction",
      description: "Advanced sentiment analysis of 20,000+ tweets using NLP techniques to predict Delhi election outcomes with 85% accuracy through supervised machine learning models.",
      icon: "fas fa-vote-yea",
      tags: ["Python", "NLP", "TextBlob", "NLTK", "Machine Learning"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Amazon Product Analysis",
      description: "Interactive Power BI dashboard analyzing multi-dimensional sales data with advanced features like slicers, filters, and drill-down capabilities for regional performance insights.",
      icon: "fas fa-shopping-cart",
      tags: ["Power BI", "Data Visualization", "Sales Analytics", "KPI Metrics"],
      links: {
        linkedin: "#",
        dashboard: "#"
      }
    },
    {
      title: "Business Health Dashboard",
      description: "Real-time analytics dashboard built with Streamlit featuring automated data cleaning, anomaly detection, ML-powered recommendations, and PDF report generation for business intelligence.",
      icon: "fas fa-chart-line",
      tags: ["Streamlit", "Pandas", "Scikit-learn", "NLP", "Business Intelligence"],
      links: {
        github: "#",
        app: "#"
      }
    }
  ],

  experience: {
    position: "Data Analyst Intern",
    company: "Encardio Rite Electronic Private Limited",
    period: "January 2025 - June 2025",
    achievements: [
      "Conducted EDA on 15,000+ weekly time-series sensor records to identify structural anomalies using Python-based models",
      "Automated FTP data ingestion pipeline with Python (Pandas, NumPy), streamlining ETL and reducing manual work by 40%",
      "Built and published 20+ dashboards/reports in Excel and visualization tools, boosting data visibility by 60%",
      "Wrote optimized SQL queries for faster data aggregation, enhancing monitoring speed by 30% on the PROQIO platform",
      "Delivered weekly insights to engineers, enabling data-driven decisions across 7+ infrastructure projects"
    ]
  },

publications: [
  {
    title: "Data Visualization and Infographic Trends",
    details: "Chapter 25 in New Approaches in Visual Communication Design, IGI Global - Published 2025",
    description: `Explored the evolution of visual storytelling and infographic design trends in digital communication, discussing practical applications in business dashboards, UI/UX, and real-time data presentation.`,
    link: "https://www.igi-global.com/book/new-approaches-visual-communication-design/362192"  // Replace with actual link
  },
  {
    title: "AI-Driven Early Disease Detection (Upcoming)",
    details: "Cognitive IoT in Biomedical Devices: The Next Evolution in Smart Healthcare - 2025",
    description: `Focuses on integrating AI with IoT-enabled biomedical devices for real-time diagnosis and predictive healthcare analytics, highlighting models for early detection using medical sensor data and deep learning pipelines.`,
    
  },
  {
    title: "Professional Certifications",
    details: "Industry Recognition",
    description: `
      <ul>
        <li><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_KqS9wiKfWthWoQXaX_1741370632666_completion_certificate.pdf" target="_blank">Deloitte Data Analytics Job Simulation</a></li>
        <li><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_KqS9wiKfWthWoQXaX_1732224464105_completion_certificate.pdf" target="_blank">Accenture - Forage Data Analytics and Visualization</a></li>
        <li><a href="https://www.credly.com/badges/dfffcf22-836a-4ae7-8c04-2fa40a041b0b/linked_in_profile" target="_blank">McKinsey Forward Program</a></li>
      </ul>
    `
  }
],


  education: {
    degree: "Bachelor of Computer Applications",
    institution: "Christ (Deemed to be University), Delhi NCR Campus",
    period: "August 2022 – July 2025",
    cgpa: "8.63 (out of 10.00)"
  }
};
