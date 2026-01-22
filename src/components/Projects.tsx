import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
 
  {
    title: 'Bakery Management System',
    description: 'A mobile application built using Ionic to manage bakery products, orders, and customer details. Allows users to browse bakery items, place orders, and helps admins manage inventory and track sales efficiently.',
    image: '/assets/Projects/Bakery.png',
    tech: ['Ionic', 'Angular', 'TypeScript', 'HTML', 'CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/atish-2023/bakery-management-system',
  }
  ,
  {
    title: 'Blood Bank Management System',
    description: 'A web-based blood bank management system to manage donors, recipients, blood inventory, and requests efficiently. Designed to help blood banks track available blood groups and streamline donation and distribution processes.',
    image: '/assets/Projects/Blood-bank.png',
    tech: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://github.com/atish-2023/Blood-bank-management-System',
    githubUrl: 'https://github.com/atish-2023/Blood-bank-management-System',
  }
  ,
  {
    title: 'Food Management System',
    description: 'A full-stack food management web application that allows users to browse food items, place online orders, and manage menus. Includes admin features for adding, updating, and deleting food items, along with order tracking and customer management.',
    image: '/assets/Projects/food.png',
    tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://food-online-managenment.vercel.app/home',
    githubUrl: 'https://github.com/atish-2023/FoodOnlineManagenment',
  }
  ,
  {
    title: 'Gaming Website Landing Page',
    description: 'A modern and responsive gaming website landing page designed to showcase featured games, highlights, and call-to-action sections. Built with smooth animations and an engaging UI to create an immersive gaming experience.',
    image: '/assets/Projects/Gaming.png',
    tech: ['Angular', 'Tailwind CSS', 'GSAP'],
    liveUrl: 'https://zentry-game-site.vercel.app/',
    githubUrl: 'http://github.com/atish-2023/Gaming-website-landing-page',
  },
  {
  title: 'Personal Portfolio Website',
  description: 'A modern and fully responsive personal portfolio website designed to showcase my profile, projects, skills, and education. Built with a clean UI and smooth interactions to create a strong first impression for recruiters and visitors.',
  image: '/assets/Projects/portfolio.png',
  tech: ['React', 'Tailwind CSS'],
  liveUrl: 'https://atish-pawar-portfolio.vercel.app/',
  githubUrl: 'https://github.com/atish-2023/AtishPawarPortfolio',
}


];

const Projects = () => {
  return (
    <section id="projects" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10 fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">Featured Projects</h2>
          <p className="section-subtitle">
            Explore some of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay - Improved with dark translucent layer and better contrast */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full gradient-bg flex items-center justify-center transition-all duration-300 hover:scale-110 glow-hover focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none shadow-lg"
                      aria-label="View GitHub repository"
                      style={{ animationDelay: '0.1s' }}
                    >
                      <Github size={18} className="text-white max-sm:block hidden" />
                      <Github size={20} className="text-white sm:block max-sm:hidden" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full gradient-bg flex items-center justify-center transition-all duration-300 hover:scale-110 glow-hover focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none shadow-lg"
                      aria-label="View live demo"
                      style={{ animationDelay: '0.2s' }}
                    >
                      <ExternalLink size={18} className="text-white max-sm:block hidden" />
                      <ExternalLink size={20} className="text-white sm:block max-sm:hidden" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                <h3 className="text-base sm:text-lg font-bold font-display mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
