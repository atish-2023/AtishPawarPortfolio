import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, GraduationCap, FolderOpen, Award, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home, colorClass: 'text-blue-500' },
  { name: 'About Me', href: '#about', icon: User, colorClass: 'text-purple-500' },
  { name: 'Experience', href: '#experience', icon: Briefcase, colorClass: 'text-orange-500' },
  { name: 'Education', href: '#education', icon: GraduationCap, colorClass: 'text-green-500' },
  { name: 'Projects', href: '#projects', icon: FolderOpen, colorClass: 'text-yellow-500' },
  { name: 'Certifications', href: '#certifications', icon: Award, colorClass: 'text-pink-500' },
  { name: 'Hire Me', href: '#contact', icon: Mail, colorClass: 'text-red-500' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme-mode');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme-mode', 'light');
    }
  }, [isDarkMode]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      // Account for scrollbar width to prevent content shift
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card py-3 sm:py-4' : 'py-4 sm:py-6'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl sm:text-2xl font-bold font-display gradient-text">
          Atish Pawar
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <a href="#home" className="nav-link text-sm sm:text-base">
            Home
          </a>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-sm sm:text-base">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl glass-card transition-all duration-300 hover:scale-105"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-background z-[99] shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) -5px 0 15px' }}
      >
        {/* Drawer Content */}
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full glass-card transition-all duration-300 hover:scale-105"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Header Section */}
          <div className="p-6 border-b border-border/20 flex-shrink-0">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/assets/AtishPawar98.png" alt="Atish Pawar" />
                <AvatarFallback className="bg-primary/10 text-primary text-lg">AP</AvatarFallback>
              </Avatar>
            </div>
            <h2 className="text-xl font-bold text-foreground">Atish Pawar</h2>
            <p className="text-sm text-muted-foreground">Software Developer</p>
          </div>

          {/* Navigation Links - Make this scrollable */}
          <div className="flex-1 overflow-y-auto py-4 px-2">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 w-full px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors duration-200"
                  >
                    <IconComponent size={20} className={link.colorClass} />
                    {link.name !== 'Home' && <span>{link.name}</span>}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle Section */}
          {/* <div className="p-4 border-t border-border/20 flex-shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Dark Mode</span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isDarkMode ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                aria-label="Toggle dark mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
