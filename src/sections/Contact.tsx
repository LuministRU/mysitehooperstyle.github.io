import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { 
  Mail, MessageCircle, Github, Phone, 
  MapPin, Copy, Check, Rocket 
} from 'lucide-react';

const contacts = [
  {
    icon: MessageCircle,
    label: 'Telegram',
    value: '@Luminist',
    link: 'https://t.me/Luminist',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'uperman5@yandex.ru',
    link: 'mailto:uperman5@yandex.ru',
    color: 'from-purple-500/20 to-fuchsia-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/LuministRU',
    link: 'https://github.com/LuministRU',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+79151052680',
    link: 'tel:+79151052680',
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = useCallback(async (value: string, label: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
      }
    } catch {
      // Silently fail
    }
  }, []);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full py-16 sm:py-24 overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="contact-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0a0a12]/90 to-[#0a0a12]" />
      </div>

      {/* Glowing Earth effect */}
      <div className="absolute right-[20%] top-[20%] w-[300px] h-[300px] pointer-events-none z-10 hidden sm:block" aria-hidden="true">
        <div 
          className="w-full h-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(183, 148, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-20 section-padding max-w-4xl mx-auto w-full px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <span className="w-12 sm:w-16 h-px bg-purple-400/50" aria-hidden="true" />
            <span className="text-purple-200/60 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Контакты</span>
            <span className="w-12 sm:w-16 h-px bg-purple-400/50" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
            Давайте <span className="text-gradient-purple">свяжемся</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Открыт к предложениям о разработке в любых отраслях и интересным проектам
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="group glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:bg-white/[0.08] transition-colors duration-200"
            >
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 flex-grow min-w-0"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0`}>
                  <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">{contact.label}</div>
                  <div className="text-white/80 text-sm truncate">{contact.value}</div>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(contact.value, contact.label)}
                aria-label={`Скопировать ${contact.label}`}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-150 flex-shrink-0"
              >
                {copied === contact.label ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-white/40" />
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center px-2"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-white/40 text-xs sm:text-sm">
            <MapPin className="w-4 h-4" />
            <span>Москва • Космодром Байконур • Космодром Восточный</span>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/30 to-fuchsia-500/30 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-purple-300" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-white font-medium">Станислав Васильев</div>
                <div className="text-white/40 text-sm">Python Developer • Роскосмос</div>
              </div>
            </div>
            
            <div className="text-white/30 text-xs sm:text-sm">
              © 2026 • До звёзд и обратно
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
