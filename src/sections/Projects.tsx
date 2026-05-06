import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Music, ArrowUpRight, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Сеть ТСК "Велвет"',
    description: 'Сайт для сети танцевально-спортивных клубов по России. Приём заявок, расписание, информация о филиалах.',
    tags: ['Django', 'Python', 'PostgreSQL', 'React'],
    metrics: { value: '10+', label: 'филиалов' },
    icon: Music,
    link: 'http://velvetsvoboda.ru/',
    github: null,
  },
  {
    title: 'L2Portal',
    description: 'Информационный портал и инструментарий для игрового сервера Lineage II. Статистика, базы данных, интерактивные карты.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    metrics: { value: '1K+', label: 'пользователей' },
    icon: Globe,
    link: 'https://www.l2portal.ru/',
    github: null,
  },
];

export function Projects() {
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
          src="projects-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0a0a12]/95 to-[#0a0a12]" />
      </div>

      {/* Window frame decorations */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[15%] left-[10%] w-[25%] h-[30%] border border-purple-400/10" />
        <div className="absolute top-[20%] right-[15%] w-[20%] h-[25%] border border-purple-400/10" />
        <div className="absolute bottom-[25%] left-[20%] w-[18%] h-[20%] border border-purple-400/10" />
      </div>

      <div className="relative z-20 section-padding max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-16 h-px bg-purple-400/50" aria-hidden="true" />
            <span className="text-purple-200/60 text-sm tracking-[0.3em] uppercase">Коммерческие разработки</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Коммерческие <span className="text-gradient-purple">разработки</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Проекты для фирм и частных клиентов
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.12, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="group relative"
            >
              {/* Window frame effect */}
              <div className="absolute -inset-px border border-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="glass-card h-full p-6 md:p-8 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-purple-400/70" />
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Открыть ${project.title}`}
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-150"
                  >
                    <ExternalLink className="w-4 h-4 text-white/50" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-purple-200 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-6 p-4 rounded-xl bg-purple-400/5 border border-purple-400/10">
                  <div className="text-2xl font-serif text-gradient-purple">{project.metrics.value}</div>
                  <div className="text-xs text-white/40">{project.metrics.label}</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/50 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight className="w-5 h-5 text-purple-400/60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
