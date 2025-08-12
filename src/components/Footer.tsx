import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const Footer = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-primary-400 dark:text-primary-300 hover:text-primary-300 dark:hover:text-primary-200 transition-colors duration-300">
              Tharanes
            </Link>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              Full Stack Developer & Scalable Systems Architect passionate about building robust, 
              maintainable solutions that drive business value.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300 text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 dark:bg-dark-800 hover:bg-primary-600 dark:hover:bg-primary-500 rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label={link.name}
                  >
                    {getIcon(link.icon)}
                  </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-dark-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Tharaneswaran Vijayamanikandan. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-600 text-xs mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 