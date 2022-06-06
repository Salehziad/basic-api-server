'use strict';
const {app} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);
const {db}=require('../src/models/index');

beforeAll(async()=>{
    await db.sync();
})

describe('food web server', ()=>{
    test('Create a record using POST', async()=>{
        const response= await mockRequest.post('/food').send({
            FoodName: "mansaf",
            Descreption: "best food",
            Benifits: "good helth"
        });
        expect(response.status).toBe(201);
        expect(typeof response.body).toBe('object');
    });
    test('Read a list of records using GET',async()=>{
        const response=await mockRequest.get('/food');
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe('object');
    });
    it('can update a record', async () => {
        const response = await mockRequest.put('/food/1');
        expect(response.status).toBe(201);
    });
    test('Destroy a one record using DELETE ', async () => {
        const response = await mockRequest.delete('/food/1');
        expect(response.status).toBe(204);
    });



});
afterAll(async () => {
    await db.drop();
});