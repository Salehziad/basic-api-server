'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app)

describe('sss', () => {



    test('Page not found test', async () => {
        const response = await request.get('/sss');
        expect(response.status).toBe(404);
    })
    test('Page not found test', async () => {
        const response = await request.delete('/person/:anyName');
        expect(response.status).toBe(404);
    })


})