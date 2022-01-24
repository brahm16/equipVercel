process.env.NODE_ENV = 'test';

const request        = require('supertest');
const { expect }     = require('chai');
const app            = require('../../server');
const db             = require('../middleware/db-connect');

describe('Test the root path', () => {

    /* Test the delete Crud without errors */
    /*it('should delete hrequipment by id without errors ', async () => {

    	const response = await request(app).delete('/hrequipment').query({ _id: hrequipmenttest.id });

    	expect(response.status).to.equal(200);

    });*/

    /* Test the delete Crud without errors */
    it('should delete hrequipment by id with error , hrequipment not found', async () => {

        const response = await request(app).delete('/hrequipment').query({ _id: '4758965475869' })

    	expect(response.status).to.equal(400);
    	expect(response.body.msg_code).to.equal('0006');

    });

    db.clearDB();

});
