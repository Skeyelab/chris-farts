import { render, screen } from '@testing-library/react';
import { BouncingCat } from '../BouncingCat';

describe('BouncingCat', () => {
  const defaultProps = {
    position: { x: 100, y: 100 },
    rotation: 0,
  };

  it('renders the cat emoji', () => {
    render(<BouncingCat {...defaultProps} />);
    expect(screen.getByRole('img', { name: /bouncing cat emoji/i })).toBeInTheDocument();
  });

  it('applies correct positioning styles', () => {
    render(<BouncingCat {...defaultProps} />);
    const catElement = screen.getByRole('img', { name: /bouncing cat emoji/i });

    expect(catElement).toHaveStyle({
      left: '100px',
      top: '100px',
    });
  });

  it('applies rotation transform', () => {
    render(<BouncingCat {...defaultProps} rotation={45} />);
    const catElement = screen.getByRole('img', { name: /bouncing cat emoji/i });

    expect(catElement).toHaveStyle({
      transform: 'rotate(45deg)',
    });
  });

  it('shows chasing state when velocity is high', () => {
    const highVelocity = { x: 5, y: 5 };
    render(<BouncingCat {...defaultProps} velocity={highVelocity} />);

    const catElement = screen.getByRole('img', { name: /bouncing cat emoji chasing mouse/i });
    expect(catElement).toHaveClass('scale-110', 'filter', 'brightness-110');
  });

  it('does not show chasing state when velocity is low', () => {
    const lowVelocity = { x: 1, y: 1 };
    render(<BouncingCat {...defaultProps} velocity={lowVelocity} />);

    const catElement = screen.getByRole('img', { name: /bouncing cat emoji/i });
    expect(catElement).not.toHaveClass('scale-110', 'filter', 'brightness-110');
  });

  it('has correct accessibility attributes', () => {
    render(<BouncingCat {...defaultProps} />);
    const catElement = screen.getByRole('img');

    expect(catElement).toHaveAttribute('role', 'img');
    expect(catElement).toHaveAttribute('aria-label');
  });
});
