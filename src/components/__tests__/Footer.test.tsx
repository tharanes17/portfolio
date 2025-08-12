import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footer Component', () => {
  it('renders the brand name correctly', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Tharanes')).toBeInTheDocument();
  });

  it('renders the brand description', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Full Stack Developer & Scalable Systems Architect/)).toBeInTheDocument();
  });

  it('renders all quick links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct href attributes for quick links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/projects');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });

  it('renders the Connect section title', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('renders social media links with correct URLs', () => {
    renderWithRouter(<Footer />);
    
    // Check GitHub link
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/tharanes17');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Check LinkedIn link
    const linkedinLink = screen.getByLabelText('LinkedIn');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tharaneswaran-vijayamanikandan/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Check Email link
    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).toHaveAttribute('href', 'mailto:tharaneswaran.vijaymanikandan@proton.me');
  });

  it('renders copyright information with current year', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it('renders the built with text', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Built with React, TypeScript, and Tailwind CSS/)).toBeInTheDocument();
  });

  it('renders the full name in copyright', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Tharaneswaran Vijayamanikandan/)).toBeInTheDocument();
  });

  it('has correct CSS classes for footer structure', () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-architectural-900', 'text-white');
  });

  it('renders three main sections', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('social links have hover effects', () => {
    renderWithRouter(<Footer />);
    const socialLinks = screen.getAllByLabelText(/GitHub|LinkedIn|Email/);
    socialLinks.forEach(link => {
      expect(link).toHaveClass('hover:scale-110');
    });
  });

  it('brand link navigates to home page', () => {
    renderWithRouter(<Footer />);
    const brandLink = screen.getByText('Tharanes').closest('a');
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('renders with semantic HTML structure', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
}); 
 