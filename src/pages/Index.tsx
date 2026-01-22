import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <ThemeSwitcher />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
