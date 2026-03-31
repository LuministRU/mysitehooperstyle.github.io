import { motion } from 'framer-motion';
import { User, Code, Terminal } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  delay?: number;
  isTyping?: boolean;
  showCode?: boolean;
}

export function ChatMessage({ content, isBot, delay = 0, isTyping, showCode }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`flex gap-4 ${isBot ? 'flex-row' : 'flex-row-reverse'} mb-6`}
    >
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.1, type: 'spring', stiffness: 200 }}
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isBot 
            ? 'bg-gradient-to-br from-amber-400/30 to-orange-500/30 border border-amber-400/40' 
            : 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/40'
        }`}
      >
        {isBot ? (
          <Terminal className="w-5 h-5 text-amber-300" />
        ) : (
          <User className="w-5 h-5 text-blue-300" />
        )}
      </motion.div>

      {/* Message Bubble */}
      <div className={`relative max-w-[80%] ${isBot ? 'message-bot' : 'message-user'} rounded-2xl px-5 py-4`}>
        {/* Glow effect */}
        <div 
          className={`absolute inset-0 rounded-2xl blur-xl opacity-20 ${
            isBot ? 'bg-amber-400' : 'bg-blue-500'
          }`}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {isTyping ? (
            <div className="flex items-center gap-2 py-2 px-1">
              <span className="typing-dot text-amber-400" />
              <span className="typing-dot text-amber-400" />
              <span className="typing-dot text-amber-400" />
            </div>
          ) : (
            <>
              <p className={`text-[15px] leading-relaxed ${isBot ? 'text-amber-50/90' : 'text-blue-50/90'}`}>
                {content}
              </p>
              
              {showCode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: delay + 0.3, duration: 0.4 }}
                  className="mt-3 p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-xs text-green-400/90 overflow-x-auto"
                >
                  <div className="flex items-center gap-2 mb-2 text-white/40 text-[10px] uppercase tracking-wider">
                    <Code className="w-3 h-3" />
                    <span>Python</span>
                  </div>
                  <pre className="whitespace-pre-wrap">
{`class PythonDeveloper:
    def __init__(self):
        self.name = "Александр Петров"
        self.experience = 5  # years
        self.stack = [
            "Python", "Django", "FastAPI",
            "PostgreSQL", "Docker", "AWS"
        ]
    
    def say_hi(self):
        return "Привет! Готов к новым вызовам 🚀"`}
                  </pre>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
