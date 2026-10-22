interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];

}

const experiences: ExperienceItem[] = [
  {
    role: 'Junior Software Developer',
    company: 'Nadsoft IT Solutions',
    duration: 'Apr 2026 - Jun 2026',
    responsibilities: [
      'Developed 4-5 core modules of the Deposyt CRM with Core PHP, MySQL and Node.js.',
      'Managed 1,000+ records across CRM modules.',
      'Integrated an AI assistant and third-party APIs to automate around 50 SMS and email messages per day.',
      'Improved query performance by around 15% with MySQL query and index optimization.',
      'Built RESTful APIs with role-based access control for 9-10 user roles.',
      'Resolved around 100 defects with the QA team, shipping 2-3 releases.',
      'Contributed to the live Deposyt CRM deployment at app.deposyt.com.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Scalar Techhub Pvt Ltd',
    duration: 'June 2025 - Mar 2026',
    responsibilities: [
      'Built full-stack apps with the MEAN stack and MERN Stack.',
      'Developed 10+ reusable UI components with Angular, React.js and TypeScript.',
      'Integrated 50+ REST API endpoints with 18-20 MongoDB collections.',
      'Cut page load times by around 25% with aggregation tuning and pagination.',
      'Customized CMS-based apps for internal and client use.',
      'Synced data in real time for 130+ concurrent users with Firebase.',
      'Containerized apps with Docker for consistent deployment.',
      'Fixed 180+ defects in an Agile team, shipping stable releases.',
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'Winners IT Solution',
    duration: 'Sep 2023 - Apr 2024',
    responsibilities: [
      'Developed web applications with PHP and the Laravel framework.',
      'Built dynamic UI features with HTML, CSS, JavaScript and AJAX.',
      'Designed and managed MySQL and PostgreSQL databases.',
      'Connected frontend forms to backend logic and database operations.',
      'Tested applications, fixed bugs and improved UI consistency.',
      'Used Git for version control and team collaboration.',
    ]
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
              className={`relative flex flex-col gap-4 mb-6 fade-in md:flex-row md:gap-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
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
