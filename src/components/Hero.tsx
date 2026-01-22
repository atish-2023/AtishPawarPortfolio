import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'Software Developer at Scalar Techhub',
  'Web Developer',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number, y: number, size: number, id: number }>>([]);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const role = roles[currentRole];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="py-16 sm:py-20 flex flex-col items-center justify-center relative px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto fade-in flex flex-col items-center justify-center">
        {/* Greeting */}
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl 
             mb-3 sm:mb-4 md:mb-6 tracking-wide uppercase 
             sm:mt-12">
          Welcome to my portfolio
        </p>


        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-center">
          Hi, I'm{' '}
          <span className="gradient-text block mt-2 sm:mt-3 md:mt-4">Atish Pawar</span>
        </h1>

        {/* Typing effect */}
        <div className="h-6 sm:h-10 md:h-12 lg:h-14 flex items-center justify-center mt-2 sm:mt-6 md:mt-8">
          <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-sm md:max-w-2xl mx-auto mt-2 sm:mt-6 md:mt-8 mb-4 sm:mb-8 md:mb-10 leading-relaxed">
          Turning ideas into fast, clean, and user-friendly web applications.
          I love solving real-world problems and building products that make a difference.
        </p>


        {/* CTA Buttons - Vertically stacked and centered on mobile, horizontal on desktop */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 sm:flex-row sm:items-center sm:justify-center mt-2 sm:mt-6 md:mt-8">
          <a href="#projects" className="btn-primary min-w-[180px]">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary min-w-[180px]">
            Contact Me
          </a>
          {/* Premium Resume Button */}
          <div className="relative group overflow-visible">
            <a
              href="/assets/AtishPawar_Resume_20_Jan_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden
                bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                hover:shadow-lg hover:shadow-blue-500/30
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-background
                min-w-[180px]"
              aria-label="Download resume"
              onClick={(e) => {
                if (buttonRef.current) {
                  const rect = buttonRef.current.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const newRipple = {
                    x,
                    y,
                    size: Math.max(rect.width, rect.height),
                    id: Date.now()
                  };

                  setRipples(prev => [...prev, newRipple]);

                  // Remove ripple after animation completes
                  setTimeout(() => {
                    setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
                  }, 600);
                }
              }}
              ref={buttonRef}
            >
              <span className="font-medium">Resume</span>
              <Download size={20} />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              {/* Ripple effects */}
              {ripples.map(ripple => (
                <span
                  key={ripple.id}
                  className="ripple"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: ripple.size,
                    height: ripple.size,
                  }}
                />
              ))}
            </a>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mt-2 px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap mb-2 border border-white/20 backdrop-blur-sm">
              View Resume (PDF)
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black/80 rotate-45 border-r border-b border-white/20"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
