import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Angular Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' }
      // { name: 'GraphQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-original.svg' },
    ],
  },
  {
    name: 'Databases & Caching',
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase Firestore', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [isVisible, setIsVisible] = useState(true);

  const currentSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || [];

  useEffect(() => {
    setIsVisible(false);
    // Trigger re-render for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10 fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Category Tabs - Full width on mobile, sidebar on desktop */}
          <div className="lg:col-span-1 fade-in">
            <div className="glass-card rounded-2xl p-4 space-y-2">
              {skillCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'gradient-bg text-white font-semibold relative overflow-hidden'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-3 transition-opacity duration-500 ease-in-out" style={{ opacity: isVisible ? 1 : 0 }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {currentSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{ 
                    animationDelay: `${0.05 * index}s`,
                    opacity: isVisible ? 1 : 0
                  }}
                  className="skill-card flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:glow-hover fade-in-scale p-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter drop-shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Set a fallback icon if the original fails
                        target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
                        console.error(`Failed to load icon for ${skill.name}, using fallback:`, e.currentTarget.src);
                      }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
