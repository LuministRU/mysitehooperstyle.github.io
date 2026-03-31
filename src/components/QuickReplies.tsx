import { motion } from 'framer-motion';
import { Briefcase, Code2, Mail, Sparkles } from 'lucide-react';

interface QuickRepliesProps {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

const replies = [
  { 
    id: 'experience', 
    label: 'Опыт работы', 
    icon: Briefcase,
    question: 'Расскажи о своём опыте'
  },
  { 
    id: 'stack', 
    label: 'Технологии', 
    icon: Code2,
    question: 'Какой у тебя стек?'
  },
  { 
    id: 'contact', 
    label: 'Контакты', 
    icon: Mail,
    question: 'Как с тобой связаться?'
  },
];

export function QuickReplies({ onSelect, disabled }: QuickRepliesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="flex flex-wrap gap-3 justify-center mt-6"
    >
      {replies.map((reply, index) => (
        <motion.button
          key={reply.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 + index * 0.15, type: 'spring', stiffness: 200 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 0 30px -5px rgba(244, 162, 97, 0.4)',
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(reply.question)}
          disabled={disabled}
          className={`
            relative px-5 py-2.5 rounded-full
            bg-gradient-to-r from-white/10 to-white/5
            border border-amber-400/30
            text-amber-100/80 text-sm font-medium
            flex items-center gap-2
            transition-all duration-300
            hover:border-amber-400/60 hover:text-amber-100
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:hover:scale-100 disabled:hover:shadow-none
          `}
        >
          <reply.icon className="w-4 h-4 text-amber-400/70" />
          <span>{reply.label}</span>
          
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 rounded-full bg-amber-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
        </motion.button>
      ))}
    </motion.div>
  );
}

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-2 text-amber-400/60 text-sm"
    >
      <Sparkles className="w-4 h-4 animate-pulse" />
      <span className="italic">печатает</span>
      <span className="flex gap-1">
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </span>
    </motion.div>
  );
}
