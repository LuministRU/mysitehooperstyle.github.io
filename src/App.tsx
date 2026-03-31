import { motion } from 'framer-motion';
import { ChatContainer } from './components/ChatContainer';
import { LightEffects } from './components/LightEffects';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hopper-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-[#1a1a2e]/50 to-[#1a1a2e]/80" />
      </motion.div>

      {/* Light effects (dust particles, light beams) */}
      <LightEffects />

      {/* Main content */}
      <main className="relative z-40 min-h-screen flex items-center justify-center p-4 sm:p-8">
        <ChatContainer />
      </main>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-4 z-50"
      >
        <div className="flex items-center gap-2 text-white/20 text-xs">
          <div className="w-8 h-px bg-white/20" />
          <span className="font-mono">inspired by Edward Hopper</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-4 right-4 z-50"
      >
        <div className="flex items-center gap-2 text-white/20 text-xs">
          <span className="font-mono">Python Developer</span>
          <div className="w-8 h-px bg-white/20" />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
