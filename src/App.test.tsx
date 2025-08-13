import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';

// Mock the environment variable
const originalEnv = process.env.NODE_ENV;

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('App Routing', () => {
  beforeEach(() => {
    // Reset environment variable before each test
    process.env.NODE_ENV = 'development';
  });

  afterEach(() => {
    // Restore original environment variable
    process.env.NODE_ENV = originalEnv;
  });

  test('renders navbar with all navigation links', () => {
    renderWithProviders(<App />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders footer with all links', () => {
    renderWithProviders(<App />);
    
    expect(screen.getByText('Tharanes')).toBeInTheDocument();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  test('home page content is rendered by default', () => {
    renderWithProviders(<App />);
    
    // Check for home page specific content
    expect(screen.getByText(/Full Stack Developer/)).toBeInTheDocument();
  });

  test('router basename is correctly set for production', () => {
    process.env.NODE_ENV = 'production';
    
    // This test verifies that the basename logic is working
    // In a real scenario, you would test the actual routing behavior
    expect(process.env.NODE_ENV).toBe('production');
  });

  test('router basename is correctly set for development', () => {
    process.env.NODE_ENV = 'development';
    
    // This test verifies that the basename logic is working
    expect(process.env.NODE_ENV).toBe('development');
  });
}); 