import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MagicCircus } from '../MagicCircus';

// Mock getBoundingClientRect
const mockGetBoundingClientRect = jest.fn(() => ({
  left: 50,
  top: 80,
  width: 32,
  height: 32,
  right: 82,
  bottom: 112,
}));

describe('MagicCircus', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = mockGetBoundingClientRect;
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('renders the circus tent emoji', () => {
    render(<MagicCircus />);
    expect(screen.getByRole('button', { name: /magic circus tent/i })).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<MagicCircus />);
    const tentButton = screen.getByRole('button');

    expect(tentButton).toHaveAttribute('tabIndex', '0');
    expect(tentButton).toHaveAttribute('aria-label', 'Magic circus tent - click to activate');
  });

  it('responds to click events', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<MagicCircus />);

    const tentButton = screen.getByRole('button');
    await user.click(tentButton);

    // Should show magic text
    expect(screen.getByText('🎪 MAGIC! 🎪')).toBeInTheDocument();
  });

  it('responds to keyboard events', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<MagicCircus />);

    const tentButton = screen.getByRole('button');
    tentButton.focus();
    await user.keyboard('{Enter}');

    // Should show magic text
    expect(screen.getByText('🎪 MAGIC! 🎪')).toBeInTheDocument();
  });

  it('shows magic effects when activated', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<MagicCircus />);

    const tentButton = screen.getByRole('button');
    await user.click(tentButton);

    // Check for magic text
    expect(screen.getByText('🎪 MAGIC! 🎪')).toBeInTheDocument();

    // Check for particles (they should be rendered)
    const particlesContainer = document.querySelector('.fixed.inset-0.pointer-events-none.z-40');
    expect(particlesContainer).toBeInTheDocument();

    // Check for sparkles
    const sparklesContainer = document.querySelector('.fixed.inset-0.pointer-events-none.z-30');
    expect(sparklesContainer).toBeInTheDocument();

    // Check for portal
    const portalContainer = document.querySelector('.absolute.top-20.left-10.w-16.h-16');
    expect(portalContainer).toBeInTheDocument();
  });

  it('hides magic effects after timeout', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<MagicCircus />);

    const tentButton = screen.getByRole('button');
    await user.click(tentButton);

    // Magic effects should be visible
    expect(screen.getByText('🎪 MAGIC! 🎪')).toBeInTheDocument();

    // Fast forward time
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Magic effects should be hidden
    await waitFor(() => {
      expect(screen.queryByText('🎪 MAGIC! 🎪')).not.toBeInTheDocument();
    });
  });

  it('toggles active state on click', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<MagicCircus />);

    const tentButton = screen.getByRole('button');

    // Initial state
    expect(tentButton).not.toHaveClass('scale-125');

    // Click to activate
    await user.click(tentButton);
    expect(tentButton).toHaveClass('scale-125', 'filter', 'brightness-150', 'drop-shadow-lg');

    // Click again to deactivate
    await user.click(tentButton);
    expect(tentButton).not.toHaveClass('scale-125');
  });
});
