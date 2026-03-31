import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Database, Server, Container, 
  Radio, Cpu 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Языки',
    icon: Code2,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C++', level: 70 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    title: 'Фреймворки',
    icon: Server,
    skills: [
      { name: 'FastAPI', level: 95 },
      { name: 'Django', level: 80 },
      { name: 'Tornado', level: 75 },
    ],
  },
  {
    title: 'Базы данных',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'TimescaleDB', level: 85 },
      { name: 'InfluxDB', level: 80 },
      { name: 'Redis', level: 85 },
    ],
  },
  {
    title: 'Инфраструктура',
    icon: Container,
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    title: 'Messaging',
    icon: Radio,
    skills: [
      { name: 'RabbitMQ', level: 90 },
      { name: 'Kafka', level: 85 },
      { name: 'gRPC', level: 80 },
    ],
  },
  {
    title: 'Инструменты',
    icon: Cpu,
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Grafana', level: 80 },
      { name: 'Protobuf', level: 85 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full py-24 overflow-hidden bg-[#0a0a12]"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[10%] left-[5%] w-[30%] h-[40%] border border-purple-400/10" />
        <div className="absolute top-[20%] right-[10%] w-[25%] h-[35%] border border-purple-400/10" />
        <div className="absolute bottom-[15%] left-[15%] w-[20%] h-[30%] border border-purple-400/10" />
      </div>

      {/* Purple glow spots */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] rounded-full bg-fuchsia-500/5 blur-[80px] pointer-events-none" />

      <div className="relative z-20 section-padding max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-16 h-px bg-purple-400/50" />
            <span className="text-purple-200/60 text-sm tracking-[0.3em] uppercase">Навыки</span>
            <span className="w-16 h-px bg-purple-400/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Технологический <span className="text-gradient-purple">стек</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Инструменты для разработки космического ПО
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-purple-400/70" />
                </div>
                <h3 className="text-lg font-medium text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">{skill.name}</span>
                      <span className="text-white/40">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.8,
                          ease: 'easeOut'
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-400/80 to-fuchsia-400/80"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
