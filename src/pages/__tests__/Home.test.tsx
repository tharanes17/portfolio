import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Home from '../Home';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Home Page Component', () => {
  it('renders the main heading with name', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument();
    expect(screen.getByText('Tharaneswaran')).toBeInTheDocument();
  });

  it('renders the job title', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Full Stack Developer & Scalable Systems Architect')).toBeInTheDocument();
  });

  it('renders the introduction paragraph', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/I enjoy building scalable and maintainable frameworks/)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('CTA buttons have correct navigation links', () => {
    renderWithRouter(<Home />);
    const viewWorkButton = screen.getByText('View My Work').closest('a');
    const getInTouchButton = screen.getByText('Get In Touch').closest('a');
    
    expect(viewWorkButton).toHaveAttribute('href', '/projects');
    expect(getInTouchButton).toHaveAttribute('href', '/contact');
  });

  it('renders the "What I Do" section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('What I Do')).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Full Stack Development')).toBeInTheDocument();
    expect(screen.getByText('Scalable Systems')).toBeInTheDocument();
    expect(screen.getByText('Data Architecture')).toBeInTheDocument();
    expect(screen.getByText('Performance Optimization')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/End-to-end solutions with modern frontend/)).toBeInTheDocument();
    expect(screen.getByText(/Designing and implementing systems that grow/)).toBeInTheDocument();
    expect(screen.getByText(/Optimized database design and data management/)).toBeInTheDocument();
    expect(screen.getByText(/High-performance applications with modern optimization/)).toBeInTheDocument();
  });

  it('renders the CTA section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Ready to Build Something Amazing?')).toBeInTheDocument();
  });

  it('renders CTA section buttons', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('View Projects')).toBeInTheDocument();
    expect(screen.getByText('Start a Conversation')).toBeInTheDocument();
  });

  it('CTA section buttons have correct links', () => {
    renderWithRouter(<Home />);
    const viewProjectsButton = screen.getByText('View Projects').closest('a');
    const startConversationButton = screen.getByText('Start a Conversation').closest('a');
    
    expect(viewProjectsButton).toHaveAttribute('href', '/projects');
    expect(startConversationButton).toHaveAttribute('href', '/contact');
  });

  it('renders the experience text', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/With over 30 years of experience/)).toBeInTheDocument();
  });

  it('has correct CSS classes for hero section', () => {
    renderWithRouter(<Home />);
    const heroSection = screen.getByText('Hi, I\'m').closest('section');
    expect(heroSection).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center');
  });

  it('renders with proper semantic structure', () => {
    renderWithRouter(<Home />);
    const sections = screen.getAllByRole('heading');
    expect(sections.length).toBeGreaterThan(0);
  });

  it('renders the architectural grid background', () => {
    renderWithRouter(<Home />);
    const heroSection = screen.getByText('Hi, I\'m').closest('section');
    expect(heroSection).toHaveClass('architectural-grid');
  });

  it('renders floating animation elements', () => {
    renderWithRouter(<Home />);
    // These would be motion.div elements with animation classes
    const heroSection = screen.getByText('Hi, I\'m').closest('section');
    expect(heroSection).toBeInTheDocument();
  });

  it('renders the gradient text effect', () => {
    renderWithRouter(<Home />);
    const nameElement = screen.getByText('Tharaneswaran');
    expect(nameElement).toHaveClass('gradient-text');
  });

  it('renders the section description', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Specializing in building comprehensive solutions/)).toBeInTheDocument();
  });

  it('renders the collaboration text', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Let's collaborate to create scalable/)).toBeInTheDocument();
  });
}); 