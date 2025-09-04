import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '@/data';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Hussein Salim`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-serif text-accent mb-4">Project Not Found</h1>
          <Link to="/" className="text-text hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-16">
        <Link to="/work" className="inline-flex items-center text-accent mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to All Projects
        </Link>
        <h1 className="text-5xl md:text-7xl font-serif text-text mb-4">{project.title}</h1>
        <p className="text-xl text-accent font-sans mb-12">{project.category}</p>
        <motion.img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-auto max-h-[550px] object-cover rounded-lg mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-accent mb-4">The Problem</h2>
            <p className="text-lg text-text/80">{project.problem}</p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-accent mb-4">The Solution</h2>
            <p className="text-lg text-text/80">{project.solution}</p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-accent mb-4">The Result</h2>
            <p className="text-lg text-text/80">{project.result}</p>
          </div>
          <div>
            <h2 className="text-3xl font-serif text-accent mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map(tech => (
                <span key={tech} className="bg-card border border-white/10 text-text py-2 px-4 rounded-md">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkDetail;