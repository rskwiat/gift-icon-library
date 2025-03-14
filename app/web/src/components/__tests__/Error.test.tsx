import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ErrorComponent from '../Error';

describe('ErrorComponent', () => {
  test('that it renders with a message', () => {
    render(<ErrorComponent message="An error has occured" />);
    expect(screen.getByText('An error has occured'));
  });
});
