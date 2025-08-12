import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique tags from all projects
  const allTags = useMemo(() => {
    const tags = projects.flatMap(project => project.tags);
    return ['all', ...Array.from(new Set(tags))];
  }, []);

  // Filter projects based on selected filter and search term
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = selectedFilter === 'all' || project.tags.includes(selectedFilter);
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchTerm]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative section-padding architectural-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 dark:from-primary-900/20 to-gray-50/50 dark:to-dark-900/50"></div>
        
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A showcase of my work across various technologies and domains, demonstrating 
              my expertise in building scalable and maintainable solutions.
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-4 h-4 bg-primary-400 dark:bg-primary-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-6 h-6 bg-gray-400 dark:bg-gray-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-3 h-3 bg-primary-500 dark:bg-primary-400 rounded-full opacity-30"
        />
      </section>

      {/* Filters Section */}
      <section className="relative section-padding architectural-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 dark:from-primary-900/20 to-gray-50/50 dark:to-dark-900/50"></div>
        
        <div className="relative z-10 container-custom">
          <div className="card p-6 border border-gray-200 dark:border-dark-700 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-200 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedFilter(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedFilter === tag
                        ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                    }`}
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-16 w-3 h-3 bg-primary-400 dark:bg-primary-500 rounded-full opacity-15"
        />
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-24 w-5 h-5 bg-gray-400 dark:bg-gray-500 rounded-full opacity-15"
        />
      </section>

      {/* Projects Grid */}
      <section className="relative section-padding architectural-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 dark:from-primary-900/20 to-gray-50/50 dark:to-dark-900/50"></div>
        
        <div className="relative z-10 container-custom">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card overflow-hidden group border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="p-6 border-b border-gray-100 dark:border-dark-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="p-6 border-b border-gray-100 dark:border-dark-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="p-6 border-b border-gray-100 dark:border-dark-700">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="p-6">
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 text-sm font-medium"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-300 text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-4 h-4 bg-primary-400 dark:bg-primary-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-6 h-6 bg-gray-400 dark:bg-gray-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-500 dark:bg-primary-400 rounded-full opacity-25"
        />
      </section>

      {/* Stats Section */}
      <section className="relative section-padding architectural-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 dark:from-primary-900/20 to-gray-50/50 dark:to-dark-900/50"></div>
        
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Project Statistics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Overview of my project portfolio and technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{projects.length}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Total Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Showcased portfolio projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {Array.from(new Set(projects.flatMap(p => p.techStack))).length}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Technologies</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Different technologies used
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {Array.from(new Set(projects.flatMap(p => p.tags))).length}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Categories</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Project categories and domains
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6 text-center border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {projects.filter(p => p.demoUrl).length}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Live Demos</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Projects with live demonstrations
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-16 w-3 h-3 bg-primary-400 dark:bg-primary-500 rounded-full opacity-15"
        />
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-24 w-5 h-5 bg-gray-400 dark:bg-gray-500 rounded-full opacity-15"
        />
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full opacity-25"
        />
      </section>
    </div>
  );
};

export default Projects; 