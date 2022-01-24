process.env.NODE_ENV = 'test';

const request        = require('supertest');
const { expect }     = require('chai');
const app            = require('../../server');
const db             = require('../middleware/db-connect');

describe('Test the root path', () => {

    /* Test the post Crud */
    /*it('should post a hrequipment without errors', async () => {

        const response = await request(app).post('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"badge" : "badge-testval",
    		"computer" : "computer-testval",
    		"professional_phone" : "professional_phone-testval",
    		"tablet" : "tablet-testval",
    		"vehicule" : "vehicule-testval"
    	});

    	expect(response.status).to.equal(200);
    	expect(response.body.msg_code).to.equal('0007');
      	hrequipmenttest['id'] = response.body.HREquipment._id;

    });*/

    /* Test the post Crud with mandatory field error (email_address) */
    it('should post a hrequipment with error required field email_address', async () => {

        const response = await request(app).post('/hrequipment').send({
            "application_id" : "application_id-testval",
    		"equipment_name" : "equipment_name-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the post Crud with mandatory field error (application_id) */
    it('should post a hrequipment with error required field application_id', async () => {

        const response = await request(app).post('/hrequipment').send({
            "email_address" : "email_address-testval",
    		"equipment_name" : "equipment_name-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });


    /* Test the post Crud with mandatory field error (badge) */
    it('should post a hrequipment with error required field badge', async () => {

        const response = await request(app).post('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"equipment_code" : "equipment_code-testval",
    		"equipment_name" : "equipment_name-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the post Crud with mandatory field error (computer) */
    it('should post a hrequipment with error required field computer', async () => {

        const response = await request(app).post('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"badge" : "badge-testval",
    		"professional_phone" : "professional_phone-testval",
    		"tablet" : "tablet-testval",
    		"vehicule" : "vehicule-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the post Crud with mandatory field error (professional_phone) */
    it('should post a hrequipment with error required field professional_phone', async () => {

        const response = await request(app).post('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"badge" : "badge-testval",
    		"computer" : "computer-testval",
    		"tablet" : "tablet-testval",
    		"vehicule" : "vehicule-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the post Crud with mandatory field error (tablet) */
    it('should post a hrequipment with error required field tablet', async () => {

        const response = await request(app).post('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"badge" : "badge-testval",
    		"computer" : "computer-testval",
    		"professional_phone" : "professional_phone-testval",
    		"vehicule" : "vehicule-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the post Crud with mandatory field error (vehicule) */
    it('should post a hrequipment with error required field vehicule', async () => {

        const response = await request(app).post('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"badge" : "badge-testval",
    		"computer" : "computer-testval",
    		"professional_phone" : "professional_phone-testval",
    		"tablet" : "tablet-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the post Crud with duplicated error */
    /*it('should post a hrequipment with error duplicated hrequipment', async () => {

        const response = await request(app).post('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"badge" : "badge-testval",
    		"computer" : "computer-testval",
    		"professional_phone" : "professional_phone-testval",
    		"tablet" : "tablet-testval",
    		"vehicule" : "vehicule-testval"
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0001');

    });*/

    db.clearDB();
});
