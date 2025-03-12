import { describe, expect, it } from 'bun:test';
import { testClient } from 'hono/testing';

import createApp from '../../../lib/create-app';

import router from '../all-icons';

if (process.env.ENV !== 'test') {
  throw new Error('NODE_ENV must be test');
}

const client = testClient(createApp().route('/', router));

describe('all icons route', () => {
  it('get /all-icons route', async () => {
    const response = await client['all-icons'].$get();

    expect(response.status).toBe(200);
    if (response.status === 200) {
      const json = await response.json();
      expect(json.length === 18);
    }
  });
});
