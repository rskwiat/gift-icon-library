import { describe, expect, it } from 'bun:test';
import { testClient } from 'hono/testing';

import createApp from '../../../lib/create-app';

import router from '../icon';

if (process.env.ENV !== 'test') {
  throw new Error('NODE_ENV must be test');
}

const client = testClient(createApp().route('/', router));

describe('individual icon route', () => {
  it('get /icons/:id route', async () => {
    const response = await client.icon[':id'].$get({
      param: {
        id: 3,
      },
    });

    expect(response.status).toBe(200);
    if (response.status === 200) {
      const json = await response.json();
      expect(json.name).toBe('batt_g.svg');
    }
  });

  it('returns an icon not found for no icon on the /icons/:id route', async () => {
    const response = await client.icon[':id'].$get({
      param: {
        id: 9999999,
      },
    });

    expect(response.status).toBe(404);
    if (response.status === 404) {
      const json = await response.json();
      expect(json.message).toBe('Icon not found');
    }
  });
});
