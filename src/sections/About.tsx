import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Rocket, MapPin, Calendar, Star } from 'lucide-react';

const experiences = [
  {
    period: '2025 — настоящее время',
    role: 'Инженер-программист',
    company: 'Роскосмос',
    description: 'Разработка программного обеспечения для ракет и спутников',
  },
  {
    period: '2022 — настоящее время',
    role: 'Python Backend Developer',
    company: 'Фриланс',
    description: 'Фриланс, разработка сложных web-сервисов, тг-ботов с ИИ',
  },
  {
    period: '2020 — 2022',
    role: 'Инженер Конструктор',
    company: '"Туполев"',
    description: 'Разработка конструкторской документации для различных летательных аппаратов',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="about-bg.jpg"
          alt="Observatory interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0a0a12]/90 to-[#0a0a12]" />
      </div>

      {/* Purple light effect */}
      <div className="absolute top-0 left-[25%] w-[50%] h-[60%] pointer-events-none z-10">
        <div 
          className="w-full h-full animate-light-beam"
          style={{
            background: 'linear-gradient(180deg, rgba(183, 148, 246, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-20 section-padding max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-16 h-px bg-purple-400/50" />
            <span className="text-purple-200/60 text-sm tracking-[0.3em] uppercase">Обо мне</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Пять лет в <span className="text-gradient-purple">разработке</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Разрабатываю программное обеспечение для космической отрасли. 
            Специализируюсь на обработке телеметрии, системах мониторинга и высоконагруженных API 
            для спутниковых данных.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: '5+', label: 'Лет в разработке', icon: Calendar },
            { value: '10+', label: 'Проектов', icon: Star },
            { value: '1', label: 'Спутник', icon: MapPin },
            { value: '∞', label: 'ТБ данных', icon: Briefcase },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <stat.icon className="w-5 h-5 text-purple-400/60 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-serif text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
            <Rocket className="w-5 h-5 text-purple-400/60" />
            Опыт работы
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.15 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-purple-400/60 text-sm font-mono mb-2">{exp.period}</div>
                    <h4 className="text-xl text-white font-medium mb-1">{exp.role}</h4>
                    <div className="text-white/50">{exp.company}</div>
                  </div>
                  <p className="text-white/40 text-sm max-w-md">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
