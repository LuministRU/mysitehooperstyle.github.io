import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from './ChatMessage';
import { QuickReplies, TypingIndicator } from './QuickReplies';
import { Send, Terminal } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  showCode?: boolean;
}

const botResponses: Record<string, { text: string; showCode?: boolean }> = {
  'Расскажи о своём опыте': {
    text: '5 лет разрабатываю backend-решения на Python. Начинал с Django, сейчас в основном FastAPI и микросервисы. Работал в финтехе, ecommerce и edtech. Последние 2 года — senior позиция с менторством juniors.',
  },
  'Какой у тебя стек?': {
    text: 'Python — основной язык. Фреймворки: FastAPI, Django, Flask. Базы: PostgreSQL, Redis, ClickHouse. Инфраструктура: Docker, Kubernetes, AWS. Ещё люблю писать тесты и оптимизировать запросы ⚡',
    showCode: true,
  },
  'Как с тобой связаться?': {
    text: 'Telegram: @alex_dev\nEmail: alex@python.dev\nGitHub: github.com/alex-dev\n\nОткрыт к предложениям о работе и интересным проектам!',
  },
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Привет! Я Александр, Python-разработчик с 5-летним опытом.\n\nСпециализируюсь на создании надёжных backend-систем, API и микросервисной архитектуре.',
    isBot: true,
  },
];

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      isBot: false,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setHasStarted(true);

    // Simulate bot typing
    setIsTyping(true);
    
    setTimeout(() => {
      const response = botResponses[text] || {
        text: 'Интересный вопрос! Давай обсудим это подробнее — пиши мне в Telegram @alex_dev',
      };
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.text,
        isBot: true,
        showCode: response.showCode,
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleQuickReply = (question: string) => {
    handleSendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Main chat window */}
      <div className="glass-panel rounded-3xl overflow-hidden warm-glow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative px-6 py-5 border-b border-white/10"
        >
          <div className="flex items-center gap-4">
            {/* Profile avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="relative w-14 h-14 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 via-orange-500/30 to-blue-500/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Terminal className="w-7 h-7 text-amber-300" />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1a2e]" />
            </motion.div>
            
            {/* Profile info */}
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl font-semibold text-amber-50 font-serif"
              >
                Александр Петров
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-amber-200/60 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Python Developer • 5 лет опыта
              </motion.p>
            </div>
          </div>
          
          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
        </motion.div>

        {/* Messages area */}
        <div className="relative h-[50vh] overflow-y-auto px-6 py-6">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <ChatMessage
                key={message.id}
                content={message.content}
                isBot={message.isBot}
                delay={index === 0 ? 0.8 : 0}
                showCode={message.showCode}
              />
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-4 mb-6"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-400/30 to-orange-500/30 border border-amber-400/40">
                <Terminal className="w-5 h-5 text-amber-300" />
              </div>
              <div className="message-bot rounded-2xl px-5 py-4">
                <TypingIndicator />
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        {!hasStarted && (
          <div className="px-6 pb-4">
            <QuickReplies onSelect={handleQuickReply} disabled={isTyping} />
          </div>
        )}

        {/* Input area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="relative px-6 py-4 border-t border-white/10"
        >
          <form onSubmit={handleSubmit} className="flex gap-3">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Напишите сообщение..."
                disabled={isTyping}
                className="
                  w-full px-5 py-3.5 rounded-2xl
                  bg-white/5 border border-white/10
                  text-amber-50 placeholder:text-white/30
                  focus:outline-none focus:border-amber-400/50 focus:bg-white/10
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              />
              {/* Input glow */}
              <div className="absolute inset-0 rounded-2xl bg-amber-400/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-md" />
            </div>
            
            <motion.button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-5 py-3.5 rounded-2xl
                bg-gradient-to-r from-amber-500/80 to-orange-500/80
                text-white font-medium
                flex items-center justify-center
                disabled:opacity-40 disabled:cursor-not-allowed
                disabled:hover:scale-100
                hover:shadow-lg hover:shadow-amber-500/30
                transition-all duration-300
              "
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-white/30 text-xs tracking-widest uppercase">
          Python Developer • 2024
        </p>
      </motion.div>
    </motion.div>
  );
}
