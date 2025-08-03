const request = require('supertest');
const http = require('http');
const handler = require('../function/index');

describe('Function Deployment', () => {
    const app = http.createServer((req, res) => {
        const context = {
            res: {},
        };
        handler(context, req).then(() => {
            res.writeHead(context.res.status, { 'Content-Type': 'text/plain' });
            res.end(context.res.body);
        });
    });

    it('responds with Hello, World!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello, World!");
    });

    it('should respond with status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    it('response body should not be empty', async () => {
        const response = await request(app).get('/');
        expect(response.text.length).toBeGreaterThan(0);
    });
});