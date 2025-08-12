import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'End-to-end solutions with modern frontend and robust backend architectures'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Scalable Systems',
      description: 'Designing and implementing systems that grow with your business needs'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Architecture',
      description: 'Optimized database design and data management strategies'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'High-performance applications with modern optimization techniques'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden architectural-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 dark:from-primary-900/20 to-gray-50/50 dark:to-dark-900/50"></div>
        
        <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Tharaneswaran</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300">
              Full Stack Developer & Scalable Systems Architect
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I enjoy building scalable and maintainable frameworks and love contributing to impactful products. 
              With over 30 years of experience in software development, I specialize in creating robust, 
              high-performance solutions that drive business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/projects" className="btn-primary group flex items-center justify-center whitespace-nowrap">
                <span>View My Work</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
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

      {/* Features Section */}
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
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specializing in building comprehensive solutions that scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                  <div className="text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
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

      {/* CTA Section */}
      <section className="relative section-padding architectural-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-dark-900 dark:from-dark-800 dark:via-dark-900 dark:to-dark-950"></div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
              Let's collaborate to create scalable, maintainable solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/projects" className="bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center">
                View Projects
              </Link>
              <Link to="/contact" className="border-2 border-gray-300 dark:border-gray-400 text-gray-300 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400 hover:text-gray-900 dark:hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-6 h-6 bg-white/15 rounded-full opacity-25"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/25 rounded-full opacity-20"
        />
      </section>
    </div>
  );
};

export default Home; 