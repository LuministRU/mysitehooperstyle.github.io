import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Satellite, Radio } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-bg.jpg"
          alt="Mission control center"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/70 via-[#0a0a12]/50 to-[#0a0a12]" />
      </motion.div>

      {/* Purple light beam effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div 
          className="absolute top-0 right-[15%] w-[50%] h-full animate-light-beam"
          style={{
            background: 'linear-gradient(135deg, rgba(183, 148, 246, 0.1) 0%, rgba(246, 135, 179, 0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
            transformOrigin: 'top right',
          }}
        />
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center section-padding max-w-5xl mx-auto">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-12 h-px bg-purple-400/50" />
          <span className="text-purple-200/70 text-sm tracking-[0.3em] uppercase font-light">
            Роскосмос • Python Developer
          </span>
          <span className="w-12 h-px bg-purple-400/50" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight"
        >
          <span className="block">Станислав</span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="block text-gradient-purple mt-2"
          >
            Васильев
          </motion.span>
        </motion.h1>

        {/* Experience badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6, type: 'spring' }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-10"
        >
          <Rocket className="w-4 h-4 text-purple-400" />
          <span className="text-purple-100/80 text-sm">5 лет • Разработка ПО для космоса</span>
        </motion.div>

        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex items-center justify-center gap-8 mb-16"
        >
          {[
            { icon: Rocket, label: 'FastAPI' },
            { icon: Satellite, label: 'gRPC' },
            { icon: Radio, label: 'Kafka' },
          ].map((tech, index) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              className="flex flex-col items-center gap-2 text-white/40 hover:text-purple-300/70 transition-colors"
            >
              <tech.icon className="w-6 h-6" />
              <span className="text-xs tracking-wider">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-6 z-20"
      >
        <div className="flex items-center gap-3 text-white/20 text-xs font-mono">
          <div className="w-8 h-px bg-white/20" />
          <span>inspired by Edward Hopper</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute top-6 right-6 z-20"
      >
        <div className="flex items-center gap-3 text-white/20 text-xs font-mono">
          <span>Москва • Космодромы РФ</span>
          <div className="w-8 h-px bg-white/20" />
        </div>
      </motion.div>
    </section>
  );
}
