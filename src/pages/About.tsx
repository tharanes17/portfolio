import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const About = () => {
  const skillCategories = [
    { name: 'Frontend', key: 'frontend' as const },
    { name: 'Backend', key: 'backend' as const },
    { name: 'Database', key: 'database' as const },
    { name: 'DevOps', key: 'devops' as const },
    { name: 'Tools', key: 'tools' as const }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getProficiencyText = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'Expert';
      case 'advanced':
        return 'Advanced';
      case 'intermediate':
        return 'Intermediate';
      case 'beginner':
        return 'Beginner';
      default:
        return 'Beginner';
    }
  };

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
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A passionate full stack developer with architectural knowledge, dedicated to building 
              scalable and maintainable frameworks that drive impactful products.
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

      {/* Bio Section */}
      <section className="relative section-padding architectural-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 dark:from-primary-900/20 to-gray-50/50 dark:to-dark-900/50"></div>
        
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  With over 30 years of experience in software development, I've had the privilege of 
                  working across various technologies and industries. My journey began with Java and 
                  has evolved to encompass the full spectrum of modern web development.
                </p>
                <p>
                  I'm a full stack developer with deep architectural knowledge, specializing in building 
                  scalable and maintainable frameworks. My passion lies in creating robust systems that 
                  not only meet current requirements but are designed to grow and adapt with your business.
                </p>
                <p>
                  I enjoy contributing to impactful products and believe in writing clean, well-documented 
                  code that other developers can easily understand and maintain. My approach combines 
                  technical expertise with a focus on business value and user experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card p-8 border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  What I Bring
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-gray-100">Architectural Excellence:</strong> Designing scalable, maintainable systems that grow with your business
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-gray-100">Full Stack Expertise:</strong> End-to-end development from database design to user interface
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-gray-100">Performance Focus:</strong> Optimizing applications for speed, scalability, and user experience
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-gray-100">Collaborative Approach:</strong> Working closely with teams to deliver high-quality solutions
                    </p>
                  </div>
                </div>
              </div>
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

      {/* Skills Section */}
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills
                    .filter(skill => skill.category === category.key)
                    .map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="card p-4 text-center group border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-2">
                          {skill.name}
                        </h4>
                        <div className="flex items-center justify-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${getProficiencyColor(skill.proficiency)}`}></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {getProficiencyText(skill.proficiency)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* Experience Section */}
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
              Experience & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Decades of experience across diverse technologies and industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">6+</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Extensive experience in software development and system architecture
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Projects Completed</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Successfully delivered projects across various domains and technologies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">25+</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Technologies</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in a wide range of modern and legacy technologies
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

export default About; 