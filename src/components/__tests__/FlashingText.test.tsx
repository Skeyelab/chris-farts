import { render, screen } from '@testing-library/react';
import { FlashingText } from '../FlashingText';

describe('FlashingText', () => {
  const defaultProps = {
    text: 'Test Text',
    isFlashing: false,
  };

  it('renders the text', () => {
    render(<FlashingText {...defaultProps} />);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('applies flashing styles when isFlashing is true', () => {
    render(<FlashingText {...defaultProps} isFlashing={true} />);
    const textElement = screen.getByText('Test Text');

    expect(textElement).toHaveClass('scale-110', 'text-yellow-300', 'animate-pulse');
  });

  it('applies normal styles when isFlashing is false', () => {
    render(<FlashingText {...defaultProps} isFlashing={false} />);
    const textElement = screen.getByText('Test Text');

    expect(textElement).toHaveClass('scale-100', 'text-white');
    expect(textElement).not.toHaveClass('scale-110', 'text-yellow-300', 'animate-pulse');
  });

  it('applies correct text shadow styles when flashing', () => {
    render(<FlashingText {...defaultProps} isFlashing={true} />);
    const textElement = screen.getByText('Test Text');

    expect(textElement).toHaveStyle({
      textShadow: '0 0 20px #fbbf24, 0 0 40px #f59e0b',
    });
  });

  it('applies correct text shadow styles when not flashing', () => {
    render(<FlashingText {...defaultProps} isFlashing={false} />);
    const textElement = screen.getByText('Test Text');

    expect(textElement).toHaveStyle({
      textShadow: '0 0 10px rgba(255,255,255,0.5)',
    });
  });

  it('renders with different text content', () => {
    render(<FlashingText text="Different Text" isFlashing={false} />);
    expect(screen.getByText('Different Text')).toBeInTheDocument();
  });

  it('has correct heading structure', () => {
    render(<FlashingText {...defaultProps} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Text');
  });
});
