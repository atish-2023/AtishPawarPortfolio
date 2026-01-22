import { Code2, Lightbulb, Users } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Projects Completed' },
  { value: '6+ ', label: 'Months of Experience' },
  { value: '10+', label: 'Happy Clients' },
];

const highlights = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Passionate about tackling complex challenges with elegant solutions',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Building maintainable, scalable code that stands the test of time',
  },
  {
    icon: Users,
    title: 'User-Centered',
    description: 'Creating intuitive experiences that delight users',
  },
];

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10 fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">About Me</h2>
          <p className="section-subtitle">
            Get to know the developer behind the code
          </p>
        </div>

        {/* Profile and Highlights - Stack on mobile, side-by-side on tablet/desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Profile Card */}
          <div className="flex justify-center w-full lg:w-auto fade-in">
            <div className="glass-card rounded-3xl p-4 sm:p-6 max-w-xs sm:max-w-sm w-full">
              {/* Avatar with gradient border */}
              <div className="flex justify-center mb-3 sm:mb-6">
                <div className="avatar-gradient-border w-32 h-32 sm:w-40 sm:h-40">
                  <img
                    src="/assets/AtishPawar98.png"
                    alt="Atish Pawar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-center mb-2">
                Atish Pawar
              </h3>

              <p className="text-primary text-center mb-2 sm:mb-4 text-sm sm:text-base">
                Full Stack Developer
              </p>

              <p className="text-muted-foreground text-center leading-relaxed text-sm sm:text-base">
                I’m a passionate software developer at Scalar Techhub who loves building things that
                people actually enjoy using. I like solving real problems, keeping my work clean and
                reliable, and learning something new every day. I’m driven by curiosity, growth, and
                the excitement of turning ideas into real, useful products.
              </p>



            </div>
          </div>

          {/* Highlights */}
          <div className="w-full space-y-3 sm:space-y-6 fade-in" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 transition-all duration-300 hover:scale-[1.02] glow-hover"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 self-start">
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-0.5">{item.title}</h4>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - Vertical on mobile, horizontal on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-6 md:mt-10 fade-in" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card p-4">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
