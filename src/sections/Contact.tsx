import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, MessageCircle, Github, Linkedin, 
  MapPin, Copy, Check, Rocket 
} from 'lucide-react';

const contacts = [
  {
    icon: MessageCircle,
    label: 'Telegram',
    value: '@stas_vasiliev',
    link: 'https://t.me/stas_vasiliev',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'stanislav@roscosmos.dev',
    link: 'mailto:stanislav@roscosmos.dev',
    color: 'from-purple-500/20 to-fuchsia-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/stas-vasiliev',
    link: 'https://github.com/stas-vasiliev',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/stas-vasiliev',
    link: 'https://linkedin.com/in/stas-vasiliev',
    color: 'from-indigo-500/20 to-blue-500/20',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full py-24 overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="contact-bg.jpg"
          alt="Space museum interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0a0a12]/90 to-[#0a0a12]" />
      </div>

      {/* Glowing Earth effect */}
      <div className="absolute right-[20%] top-[20%] w-[300px] h-[300px] pointer-events-none z-10">
        <div 
          className="w-full h-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(183, 148, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-20 section-padding max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-16 h-px bg-purple-400/50" />
            <span className="text-purple-200/60 text-sm tracking-[0.3em] uppercase">Контакты</span>
            <span className="w-16 h-px bg-purple-400/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Давайте <span className="text-gradient-purple">свяжемся</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Открыт к предложениям о работе в космической отрасли и интересным проектам
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group glass-card p-5 flex items-center gap-4 hover:bg-white/[0.08] transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0`}>
                <contact.icon className="w-5 h-5 text-white/70" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{contact.label}</div>
                <div className="text-white/80 truncate">{contact.value}</div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCopy(contact.value, contact.label);
                }}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0"
              >
                {copied === contact.label ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-white/40" />
                )}
              </button>
            </motion.a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-white/40 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Москва • Космодром Байконур • Космодром Восточный</span>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/30 to-fuchsia-500/30 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <div className="text-white font-medium">Станислав Васильев</div>
                <div className="text-white/40 text-sm">Python Developer • Роскосмос</div>
              </div>
            </div>
            
            <div className="text-white/30 text-sm">
              © 2024 • До звёзд и обратно
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
