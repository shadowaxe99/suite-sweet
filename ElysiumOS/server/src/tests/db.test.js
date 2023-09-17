
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const dbHandler = require('../db');

let mongoServer;

beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    await dbHandler.connect(mongoUri);
});

afterAll(async () => {
    await dbHandler.closeDatabase();
    await mongoServer.stop();
});

describe('test database operations', () => {
    test('connect function successfully connects to the database', async () => {
        const isConnected = await dbHandler.isConnected();
        expect(isConnected).toBe(true);
    });

    test('closeDatabase function successfully closes the database connection', async () => {
        await dbHandler.closeDatabase();
        const isConnected = await dbHandler.isConnected();
        expect(isConnected).toBe(false);
    });
});
