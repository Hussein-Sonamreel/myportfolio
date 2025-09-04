import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '@/data';

const Work = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-serif text-center mb-12">My Work</h1>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          {projectsData.map((project) => (
            <motion.div key={project.slug} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link to={`/work/${project.slug}`} className="block group">
                <div className="overflow-hidden rounded-lg">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="mt-4 text-2xl font-serif text-accent">{project.title}</h3>
                <p className="text-text/80">{project.category}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Work;