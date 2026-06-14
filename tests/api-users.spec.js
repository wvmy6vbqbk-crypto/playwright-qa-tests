const { test, expect } = require('@playwright/test');

test.describe('JSONPlaceholder API Tests', () => {
  test('GET posts returns a list of posts', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('userId');
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('body');
  });

  test('GET single post returns post details', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
  });

  test('POST create post returns created resource', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'QA Automation',
        body: 'Created by Playwright API test',
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.title).toBe('QA Automation');
    expect(body.body).toBe('Created by Playwright API test');
    expect(body.userId).toBe(1);
    expect(body).toHaveProperty('id');
  });
});