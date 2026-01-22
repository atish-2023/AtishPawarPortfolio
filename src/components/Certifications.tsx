import { Award, GraduationCap, Trophy, ExternalLink } from 'lucide-react';

interface CertificationItem {
  title: string;
  platform: string;
  year: string;
  description: string;
  skills: string[];
  icon: React.ElementType;
  link: string;
}

const certifications: CertificationItem[] = [
  {
    title: 'Fundamentals of Cloud Computing',
    platform: 'IBM',
    year: '2026',
    description: 'Completed a foundational course on cloud computing concepts including cloud infrastructure, virtualization, containers, and cloud service models such as IaaS, PaaS, and SaaS. Gained understanding of public, private, and hybrid cloud environments.',
    skills: [
      'Cloud Computing',
      'Cloud Infrastructure',
      'Cloud Migration',
      'Cloud Security',
      'Computing Services',
      'Containers',
      'Docker',
      'Hybrid Cloud',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Private Cloud',
      'Public Cloud',
      'Software as a Service (SaaS)',
      'Virtualization',
      'Visual Studio Code'
    ],
    icon: Trophy,
    link: 'https://www.credly.com/badges/eda22557-cdb0-4849-98f1-f130a0fad5bb'
  }
  ,
  {
    title: 'Fundamentals of Java Programming',
    platform: 'Udemy',
    year: '2025',
    description: 'Completed a comprehensive Java course covering core Java concepts such as data types, control statements, OOP principles, classes and objects, inheritance, polymorphism, exception handling, and basic collections.',
    skills: [
      
      'Core Java',
      'Object-Oriented Programming (OOP)',
      'Servlet',
      'Jsp',
      'Exception Handling',
      'Collections Framework',
      'Spring Boot',
      'Hibernate'
    ],
    icon: Award,
    link: 'https://www.udemy.com/certificate/UC-758e01af-7b9b-4316-88ad-1d16b30e48a1/'
  }
 
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10 fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">Certifications</h2>
          <p className="section-subtitle">
            Professional courses and learning achievements
          </p>
        </div>

        {/* Certification Cards - Stacked on mobile */}
        <div className="space-y-3 sm:space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 sm:p-6 transition-all duration-300 glow-hover fade-in group"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="flex flex-col gap-4">
                {/* Top row - Icon and year */}
                <div className="flex justify-between items-start">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl gradient-bg flex items-center justify-center">
                    <cert.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-medium whitespace-nowrap self-start">
                    {cert.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-bold font-display mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-primary text-sm mb-2">{cert.platform}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-2 py-1 rounded-full bg-secondary/30 text-secondary-foreground font-medium border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Button - Full width on mobile */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-sm w-full sm:w-auto sm:min-w-[140px]"
                  >
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;