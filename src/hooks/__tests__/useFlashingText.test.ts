import { renderHook, act } from '@testing-library/react';
import { useFlashingText } from '../useFlashingText';

describe('useFlashingText', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('should return false initially', () => {
    const { result } = renderHook(() => useFlashingText());
    expect(result.current).toBe(false);
  });

  it('should toggle flashing state every 500ms', () => {
    const { result } = renderHook(() => useFlashingText());

    // Initial state
    expect(result.current).toBe(false);

    // After 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe(true);

    // After another 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe(false);

    // After another 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe(true);
  });

  it('should continue toggling indefinitely', () => {
    const { result } = renderHook(() => useFlashingText());

    // Test multiple toggles
    for (let i = 0; i < 10; i++) {
      act(() => {
        jest.advanceTimersByTime(500);
      });
      expect(result.current).toBe(i % 2 === 0);
    }
  });

  it('should clean up interval on unmount', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');
    const { unmount } = renderHook(() => useFlashingText());

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
