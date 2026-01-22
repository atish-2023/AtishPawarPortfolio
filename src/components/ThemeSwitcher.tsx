import { useState, useEffect } from 'react';

const themes = [
  { name: 'Blue Purple', class: 'theme-blue-purple', colors: ['#4f46e5', '#8b5cf6', '#ec4899'] },
  { name: 'Purple Pink', class: 'theme-purple-pink', colors: ['#9333ea', '#db2777', '#f43f5e'] },
  { name: 'Teal Blue', class: 'theme-teal-blue', colors: ['#0d9488', '#0284c7', '#3b82f6'] },
  { name: 'Orange Pink', class: 'theme-orange-pink', colors: ['#f97316', '#ec4899', '#a855f7'] },
  { name: 'Green Cyan', class: 'theme-green-cyan', colors: ['#22c55e', '#06b6d4', '#0ea5e9'] },
];

const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState('theme-blue-purple');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setActiveTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const handleThemeChange = (themeClass: string) => {
    setActiveTheme(themeClass);
    document.documentElement.className = themeClass;
    localStorage.setItem('portfolio-theme', themeClass);
  };

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Choose Your Theme
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {themes.map((theme) => (
              <button
                key={theme.class}
                onClick={() => handleThemeChange(theme.class)}
                className={`theme-btn ${activeTheme === theme.class ? 'active' : ''}`}
                style={{
                  background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]}, ${theme.colors[2]})`,
                }}
                title={theme.name}
                aria-label={`Switch to ${theme.name} theme`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSwitcher;
