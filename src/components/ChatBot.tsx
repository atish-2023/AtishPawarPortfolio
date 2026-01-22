import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Message } from '../types/chat';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined Q&A data
  const predefinedAnswers: Record<string, string> = {
    // Personal & Location
    'where do you live': 'I am based in Pune, Maharashtra, India.',
    'where are you located': 'I am based in Pune, Maharashtra, India.',
    'current location': 'I am currently in Pune, India.',
    'where are you from': 'I am from Pune, Maharashtra.',
    'location': 'Pune, Maharashtra, India.',
    'who are you': 'I am Atish Pawar, a fresher software engineer.',
    'what is your name': 'My name is Atish Pawar.',
    'your name': 'Atish Pawar.',
    'what is your role': 'I am a fresher software engineer, aspiring Java developer.',
    'role': 'Fresher software engineer, aspiring Java developer.',
    'position': 'Junior software developer.',
    'job title': 'Software engineer fresher.',
    
    // Experience
    'how many years of experience': 'Around 1+ year combined internship and professional experience.',
    'years of experience': 'About 1+ year of experience.',
    'experience': '1+ year of combined internship and job experience.',
    'total experience': 'Approximately 1 year of experience.',
    'how many years in frontend': 'About 1+ year working with frontend technologies.',
    'frontend experience': 'Around 1 year of frontend development experience.',
    'how many years in backend': 'About 1 year working with backend technologies.',
    'backend experience': 'Around 1 year of backend development experience.',
    'how many years in java': 'About 2+ years of hands-on Java experience.',
    'java experience': '2+ years of Java programming experience.',
    'how many years in nodejs': 'About 1 year working with Node.js.',
    'nodejs experience': 'Around 1 year of Node.js experience.',
    'ci cd experience': 'Basic CI/CD pipeline experience through projects.',
    'continuous integration': 'Project-level CI/CD implementation experience.',
    'current company': 'Currently at Scalar Techhub Pvt Ltd.',
    'working at': 'Currently employed at Scalar Techhub Pvt Ltd.',
    'company': 'Scalar Techhub Pvt Ltd.',
    'internship experience': 'Web development internship at Winners IT Solution.',
    'past internship': 'Interned at Winners IT Solution.',
    'internship': 'Web development internship experience.',
    
    // Skills & Stack
    'primary tech stack': 'Java, Angular, React, Node.js, MongoDB, MySQL.',
    'tech stack': 'Java, Angular, React, Node.js, Spring Boot, Firebase.',
    'technology stack': 'Full-stack: Java backend, Angular/React frontend.',
    'frontend stack': 'Angular, React, HTML, CSS, JavaScript, TypeScript.',
    'frontend technologies': 'Angular, React, Tailwind CSS, JavaScript.',
    'backend stack': 'Java, Spring Boot, Node.js, Express.js.',
    'backend technologies': 'Java, Spring Boot, Node.js, REST APIs.',
    'databases': 'MySQL, MongoDB, Firebase Firestore.',
    'database technologies': 'Relational and NoSQL databases.',
    'cloud': 'AWS basics, Firebase cloud services.',
    'cloud platforms': 'AWS, Firebase cloud experience.',
    'tools': 'Git, GitHub, VS Code, IntelliJ IDEA.',
    'development tools': 'Git, GitHub, modern IDEs.',
    'version control': 'Git and GitHub for version control.',
    
    // Projects
    'which projects did you build': 'You can view my projects in the Featured Projects section.',
    'projects built': 'Check the Featured Projects section for my work.',
    'what projects': 'See my portfolio projects section for details.',
    'best project': 'You can view my projects in the Featured Projects section.',
    'favorite project': 'Check the Featured Projects section of this portfolio.',
    'full stack projects': 'You can view my projects in the Featured Projects section.',
    'fullstack projects': 'See the Featured Projects section for full-stack work.',
    'live projects': 'You can view my projects in the Featured Projects section.',
    'deployed projects': 'Check the Featured Projects section for live demos.',
    'angular projects': 'You can view my projects in the Featured Projects section.',
    'react projects': 'See the Featured Projects section for React projects.',
    'java projects': 'You can view my projects in the Featured Projects section.',
    'web projects': 'Check the Featured Projects section for web applications.',
    
    // Education
    'highest qualification': 'Master of Computer Science (pursuing).',
    'highest degree': 'MCS from Savitribai Phule Pune University.',
    'qualification': 'MCS (pursuing), BCS completed.',
    'graduation': 'Bachelor of Computer Science from Annasaheb Magar College.',
    'undergraduate': 'BCS from Annasaheb Magar College, Pune.',
    'post graduation': 'Master of Computer Science from SPPU (2024-2026).',
    'postgraduate': 'Currently pursuing MCS from Pune University.',
    'masters': 'MCS from Savitribai Phule Pune University.',
    'bachelor degree': 'BCS from Annasaheb Magar College.',
    'college': 'Annasaheb Magar College for BCS.',
    'university': 'Savitribai Phule Pune University for MCS.',
    'schooling': 'HSC and SSC from Maharashtra State Board.',
    
    // Contact & Resume
    'how can i contact you': 'Email: atishpawar1193@gmail.com or LinkedIn: linkedin.com/in/atishpawar28',
    'contact information': 'Email: atishpawar1193@gmail.com, Phone: +91 8010122542',
    'contact details': 'atishpawar1193@gmail.com or +91 8010122542',
    'email': 'atishpawar1193@gmail.com',
    'email address': 'atishpawar1193@gmail.com',
    'linkedin': 'linkedin.com/in/atishpawar28',
    'linkedIn profile': 'linkedin.com/in/atishpawar28',
    'phone': '+91 8010122542',
    'phone number': '+91 8010122542',
    'resume': 'Click the Resume button in header to download my CV.',
    'cv': 'Resume available via the Resume button in header.',
    'cv download': 'Download resume using the Resume button in header.',
    'download resume': 'Click Resume button in header for my CV.',
    'download cv': 'CV downloadable from header Resume button.',
    
    // Availability & Goals
    'are you open to opportunities': 'Yes, actively seeking software engineering opportunities.',
    'job opportunities': 'Open to software developer positions.',
    'available for hire': 'Yes, available for software engineering roles.',
    'looking for job': 'Actively seeking software developer positions.',
    'preferred role': 'Software engineer or Java developer role.',
    'desired position': 'Full-stack or backend developer position.',
    'career goal': 'To grow as a skilled software engineer.',
    'future goals': 'Become a proficient software engineer.',
    'aspirations': 'Aim to excel in software development.',
    
    // Greetings and Helpers
    'hi': 'Hello! I am Atish Pawar\'s portfolio assistant.',
    'hello': 'Hi! I can help with information about Atish.',
    'help': 'Ask about skills, experience, projects, or contact info.',
    'start': 'Welcome! I assist with portfolio-related questions.',
    'thanks': 'You\'re welcome! Anything else I can help with?',
    'thank you': 'You\'re welcome! Feel free to ask more questions.',
    
    // Default response
    'default': 'I\'m Atish\'s portfolio assistant. Ask about skills, experience, projects, or contact info.',
  };

  const suggestedQuestions = [
    'What are your skills?',
    'Tell me about your projects',
    'What\'s your experience?',
    'How can I contact you?',
    'Show me your resume'
  ];

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          text: 'Hello! I\'m Atish\'s portfolio assistant. How can I help you today?',
          sender: 'bot',
          timestamp: new Date(),
        }
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Check for predefined answers first
    const lowerInput = inputValue.toLowerCase();
    let response = predefinedAnswers.default;
    let foundPredefined = false;

    // Check for exact matches first
    if (predefinedAnswers[lowerInput]) {
      response = predefinedAnswers[lowerInput];
      foundPredefined = true;
    } else {
      // Check for partial matches
      const keys = Object.keys(predefinedAnswers).filter(key => key !== 'default' && key !== 'hi' && key !== 'hello' && key !== 'help' && key !== 'start' && key !== 'thanks' && key !== 'thank you');
      for (const key of keys) {
        if (lowerInput.includes(key) || key.includes(lowerInput.split(' ')[0])) {
          response = predefinedAnswers[key];
          foundPredefined = true;
          break;
        }
      }
    }

    // If no predefined answer found, simulate API call
    if (!foundPredefined) {
      try {
        // In a real implementation, you would call your backend API
        // const apiResponse = await sendMessageToAI(inputValue, messages);
        // response = apiResponse.success ? apiResponse.message || predefinedAnswers.default : predefinedAnswers.default;
        
        // For now, simulate with a delay and a default response
        await new Promise(resolve => setTimeout(resolve, 1000));
        response = "Thanks for your question! In a full implementation, this would be answered by an AI assistant. For immediate assistance, please check the sections above or contact me directly.";
      } catch (error) {
        console.error('Error getting AI response:', error);
        response = predefinedAnswers.default;
      }
    }

    const botMessage: Message = {
      id: Date.now().toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-background/90 backdrop-blur-lg border border-border rounded-xl shadow-xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-cyan-400" />
              <h3 className="font-semibold text-foreground">Portfolio Assistant</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-none'
                      : 'bg-secondary text-foreground rounded-bl-none'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.sender === 'bot' && <Bot size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />}
                    <div className="text-sm">{message.text}</div>
                    {message.sender === 'user' && <User size={16} className="text-white/80 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-foreground rounded-2xl rounded-bl-none p-3 max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-border bg-background/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Atish..."
                className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;