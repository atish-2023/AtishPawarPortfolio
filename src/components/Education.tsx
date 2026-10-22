import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Science (MCS)',
    institution: 'Annasaheb Magar College ,Pune 28 (SPPU)',
    duration: '2024 - 2026',
    gpa: '8.17'
  },
  {
    degree: 'Bachelor of Computer Science (BCS)',
    institution: 'Annasaheb Magar College, Pune 28 (SPPU)',
    duration: '2021 - 2024',
    gpa: '7.91'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Maharashtra State Board',
    duration: '2021',
    gpa: '75.60%'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Maharashtra State Board',
    duration: '2019',
    gpa: '82.60%'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-10 sm:py-14 md:py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10 fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">Education</h2>
          <p className="section-subtitle">
            Academic background and achievements
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative space-y-6 md:space-y-10">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-accent to-primary/20" />

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-6 mb-8 fade-in ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-4 timeline-dot z-10" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] glow-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs px-3 py-1 rounded-full gradient-bg text-white font-medium flex items-center gap-1">
                      <GraduationCap size={12} />
                      {edu.duration}
                    </span>
                    {edu.gpa && (
                      <span className="text-xs px-3 py-1 rounded-full bg-secondary/30 text-secondary-foreground font-medium">
                        {(edu.degree.includes('Bachelor') || edu.degree.includes('Master')) 
                          ? `CGPA: ${edu.gpa}` 
                          : `Percentage: ${edu.gpa}`}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-1">{edu.degree}</h3>
                  <p className="text-primary mb-4">{edu.institution}</p>

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

export default Education;