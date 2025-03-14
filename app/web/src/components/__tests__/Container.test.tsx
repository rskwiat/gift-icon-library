import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Container from '../Container';

describe('Container', () => {
  test('that it renders', () => {
    render(
      <Container>
        <p>Test</p>
      </Container>,
    );
    expect(screen.getByText('Test'));
  });
});
