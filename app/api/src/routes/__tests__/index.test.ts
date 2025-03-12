import { describe, expect, it } from 'bun:test';
import { testClient } from 'hono/testing';

import { HEALTHCHECK_MESSAGE } from '../../constants/constants';
import createApp from '../../lib/create-app';

import router from '../index';

if (process.env.ENV !== 'test') {
  throw new Error('NODE_ENV must be test');
}

const client = testClient(createApp().route('/', router));

describe('index route', () => {
  it('get /healthcheck route', async () => {
    const response = await client.healthcheck.$get();

    expect(response.status).toBe(200);
    if (response.status === 200) {
      const json = await response.json();
      expect(json.message).toBe(HEALTHCHECK_MESSAGE.OK);
    }
  });
});
