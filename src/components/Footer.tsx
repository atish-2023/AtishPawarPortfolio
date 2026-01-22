import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/atish-pawar', target: '_blank', rel: 'noopener noreferrer' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/atishpawar', target: '_blank', rel: 'noopener noreferrer' },
  { name: 'Email', icon: Mail, url: 'mailto:atishpawar@gmail.com', target: undefined, rel: undefined },
];

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">


        {/* Bottom */}
        <div className="text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2026 Atish Pawar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Building modern web experiences
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
