import { useState, useEffect } from 'react';
import profileImg from '../assets/img.jpg'
const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isVisible, setIsVisible] = useState(false);
  
  const name = 'Nikhil Garkoti';
  const greetings = [`Hi, I'm ${name}`, 'Welcome to my portfolio'];
  
  useEffect(() => {
    // Fade in animation on component mount
    setIsVisible(true);
    
    const handleType = () => {
      const current = loopNum % greetings.length;
      const fullText = greetings[current];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 30 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, greetings]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
    
      <div className={`max-w-4xl mx-auto flex flex-col items-center justify-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <br /><br /><br />
        {/* Profile image with enhanced animations */}
        <div className="relative mb-8 group">
          {/* Outer glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-all duration-700"></div>
          
          {/* Pulsing ring */}
          <div className="absolute -inset-3 rounded-full border-4 border-blue-400/30 animate-ping opacity-20"></div>
          
          {/* Rotating ring */}
          <div className="absolute -inset-2 rounded-full border-4 border-transparent border-t-blue-400/50 animate-spin-slow"></div>
          
          {/* Main image container */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-500/30 shadow-2xl">
            <div 
              className="w-full h-full bg-gray-200 transform origin-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
              style={{
                backgroundImage: `url(${profileImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(30%)',
              }}
            ></div>
            
            {/* Overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"></div>
          </div>
        </div>

        {/* Typewriter text with enhanced styling */}
        <div className="text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-gray-100 mb-6 tracking-tight">
            {text}
            <span className="ml-1 inline-block w-1 h-12 bg-blue-500 align-middle animate-pulse"></span>
          </h1>
          
          {/* Animated divider */}
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8 rounded-full"></div>
          
          <p className="text-gray-400 mt-8 text-xl max-w-md mx-auto font-light tracking-wider">
            MERN Developer | Backend Development | C/C++
          </p>
        </div>
        <br />
        <br />
        <br /><br />
        <br /><br />
        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
          <span className="text-gray-500 text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;