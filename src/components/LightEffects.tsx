import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export function LightEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles (dust in light beam)
    const particleCount = 40;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width * 0.6 + canvas.width * 0.2,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.y -= particle.speedY;
        particle.x += particle.speedX;

        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width * 0.6 + canvas.width * 0.2;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 162, 97, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Light beam overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Main light beam from window */}
        <div 
          className="absolute top-0 right-[15%] w-[40%] h-full animate-light-beam"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(244, 162, 97, 0.15) 0%,
                rgba(244, 162, 97, 0.08) 30%,
                transparent 70%
              )
            `,
            transformOrigin: 'top right',
            filter: 'blur(40px)',
          }}
        />
        
        {/* Secondary light beam */}
        <div 
          className="absolute top-[10%] right-[20%] w-[30%] h-[80%]"
          style={{
            background: `
              linear-gradient(
                150deg,
                rgba(233, 196, 106, 0.1) 0%,
                transparent 60%
              )
            `,
            filter: 'blur(60px)',
            animation: 'light-beam 20s ease-in-out infinite reverse',
          }}
        />

        {/* Warm glow spot */}
        <div 
          className="absolute top-[20%] right-[25%] w-[200px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(244, 162, 97, 0.2) 0%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'pulse-glow 4s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* Dust particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 0%,
              transparent 50%,
              rgba(15, 15, 26, 0.4) 100%
            )
          `,
        }}
      />

      {/* Window frame shadow */}
      <div 
        className="absolute top-0 right-[10%] w-[50%] h-full pointer-events-none z-5"
        style={{
          boxShadow: '-20px 0 80px -20px rgba(0, 0, 0, 0.6) inset',
        }}
      />
    </>
  );
}
