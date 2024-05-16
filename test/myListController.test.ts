import request from 'supertest';
import app from '../src/index'

describe('My List Controller', () => {
  it('should add an item to the list', async () => {
    const response = await request(app)
      .post('/mylist/add')
      .send({ userId: 'user123', itemId: 'movie123' });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Item added to the list');
  });

});
