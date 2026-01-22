interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Junior Software Developer',
    company: 'Scalar Techhub Pvt Ltd',
    duration: 'June 2025 - Present',
    responsibilities: [
      'Developed full-stack web applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js)',
      'Built and customized CMS-based applications for internal and client use',
      'Designed and integrated RESTful APIs for frontend-backend communication',
      'Worked on both frontend and backend modules of production applications',
      'Containerized applications using Docker for consistent development and deployment',
      'Fixed bugs, improved UI responsiveness, and optimized application performance',
      'Collaborated with senior developers in an agile development environment',
    ],
    highlights: [
      'Worked on real-world client and internal projects',
      'Gained hands-on experience in full-stack development',
      'Learned REST API design, CMS development, and Docker basics',
      'Contributed to end-to-end application development',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Winners IT Solution',
    duration: 'Sep 2023 - Apr 2024',
    responsibilities: [
      'Developed web applications using PHP and Laravel framework',
      'Built dynamic UI features using HTML, CSS, JavaScript, and AJAX',
      'Designed and managed databases using MySQL and PostgreSQL',
      'Integrated frontend forms with backend logic and database operations',
      'Tested applications, fixed bugs, and improved UI consistency',
      'Learned version control using Git and basic team collaboration',
    ],
    highlights: [
      'Built CRUD-based web applications using Laravel',
      'Worked with relational databases (MySQL, PostgreSQL)',
      'Improved full-stack development fundamentals',
      'Gained real-world internship experience',
    ],
  },
];
const Experience = () => {
  return (
    <section id="experience" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10 fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and achievements
          </p>
        </div>

        {/* Timeline - Stacked on mobile, vertical on desktop */}
        <div className="relative space-y-6 md:space-y-10">
          {/* Timeline line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col gap-4 mb-6 fade-in md:flex-row md:gap-8 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Timeline dot - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 timeline-dot z-10" />

              {/* Content - Full width on mobile */}
              <div className="w-full md:w-1/2 md:pl-0">
                <div className="glass-card rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] glow-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs px-2.5 py-1 rounded-full gradient-bg text-white font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold font-display mb-1">{exp.role}</h3>
                  <p className="text-primary mb-3 sm:mb-4 text-sm sm:text-base">{exp.company}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-primary uppercase tracking-wide mb-2 font-semibold">
                      Key Achievements
                    </p>
                    {exp.highlights.map((highlight, i) => (
                      <p key={i} className="text-sm text-foreground flex items-start gap-2 mb-1">
                        <span className="text-accent">★</span>
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
