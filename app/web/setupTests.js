import '@testing-library/jest-dom'; // Optional: Add custom matchers for testing-library
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
