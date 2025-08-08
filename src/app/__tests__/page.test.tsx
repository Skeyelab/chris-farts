import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock the hooks
jest.mock('@/hooks', () => ({
  useBouncingCat: () => ({
    catPosition: { x: 100, y: 100 },
    catRotation: 0,
    catVelocity: { x: 2, y: 2 },
  }),
  useFlashingText: () => false,
}));

// Mock the constants
jest.mock('@/constants/animation', () => ({
  BACKGROUND_CONFIG: {
    gradient: 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500',
  },
  SPARKLE_EMOJIS: ['🌟', '✨', '💫', '⭐'],
  CAT_EMOJI: '🐱',
  HEART_EMOJI: '💖',
  BALLOON_EMOJI: '🎈',
  CIRCUS_EMOJI: '🎪',
}));

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('hi chris')).toBeInTheDocument();
  });

  it('renders the main container with correct background', () => {
    render(<Home />);
    const container = screen.getByText('hi chris').closest('.min-h-screen');
    expect(container).toHaveClass('bg-gradient-to-br', 'from-purple-400', 'via-pink-500', 'to-red-500');
  });

  it('renders all main components', () => {
    render(<Home />);

    // Check for main elements
    expect(screen.getByText('hi chris')).toBeInTheDocument();
    expect(screen.getByText('🎉 Welcome to the fun zone! 🎉')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('has correct page structure', () => {
    render(<Home />);

    // Check for main heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('hi chris');

    // Check for subtitle
    expect(screen.getByText('🎉 Welcome to the fun zone! 🎉')).toBeInTheDocument();
  });

  it('renders GitHub link with correct attributes', () => {
    render(<Home />);
    const githubLink = screen.getByText('GitHub').closest('a');

    expect(githubLink).toHaveAttribute('href', 'https://github.com/Skeyelab/chris-farts');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has proper accessibility structure', () => {
    render(<Home />);

    // Check for main heading
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    // Check for GitHub link
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });
});
