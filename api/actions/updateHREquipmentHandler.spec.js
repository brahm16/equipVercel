process.env.NODE_ENV = 'test';

const request        = require('supertest');
const { expect }     = require('chai');
const app            = require('../../server');
const db             = require('../middleware/db-connect');

describe('Test the root path', () => {

    /* Test the put Crud without error */
    /*it('should update a hrequipment without error ', async () => {

        const response = await request(app).put('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"badge" : "badge-updateval",
    		"computer" : "computer-updateval",
    		"professional_phone" : "professional_phone-updateval",
    		"tablet" : "tablet-updateval",
    		"vehicule" : "vehicule-updateval"
        });

        expect(response.status).to.equal(200);

    })*/

    /* Test the put Crud with no data found error */
    /*it('should update a hrequipment with error hrequipment not found  ', async () => {

        const response = await request(app).put('/hrequipment').send({
            "email_address" : "email_address-1234567",
            "application_id" : "application_id-1234567",
    		"badge" : "badge-updateval",
    		"computer" : "computer-updateval",
    		"professional_phone" : "professional_phone-updateval",
    		"tablet" : "tablet-updateval",
    		"vehicule" : "vehicule-updateval"
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0006');

    })*/

    /* Test the put Crud with mandatory field error (email_address) */
    it('should update a hrequipment with error required field email_address', async () => {

        const response = await request(app).put('/hrequipment').send({
            "application_id" : "application_id-testval",
    		"badge" : "badge-testval",
    		"computer" : "computer-testval",
    		"professional_phone" : "professional_phone-testval",
    		"tablet" : "tablet-testval",
    		"vehicule" : "vehicule-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the put Crud with mandatory field error (application_id) */
    it('should update a hrequipment with error required field application_id', async () => {

        const response = await request(app).put('/hrequipment').send({
            "email_address" : "email_address-testval",
    		"badge" : "badge-testval",
    		"computer" : "computer-testval",
    		"professional_phone" : "professional_phone-testval",
    		"tablet" : "tablet-testval",
    		"vehicule" : "vehicule-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the put Crud with mandatory field error (badge) */
    it('should update a hrequipment with error required field badge', async () => {

        const response = await request(app).put('/hrequipment').send({
            "email_address" : "email_address-testval",
            "application_id" : "application_id-testval",
    		"computer" : "computer-testval",
    		"professional_phone" : "professional_phone-testval",
    		"tablet" : "tablet-testval",
    		"vehicule" : "vehicule-testval",
        });

        expect(response.status).to.equal(400);
        expect(response.body.msg_code).to.equal('0002');

    });

    /* Test the put Crud with mandatory field error (computer) */
    it('should update a hrequipment with error required field computer', async () => {

        const response = await request(app).put('/hrequipment').send({
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

    /* Test the put Crud with mandatory field error (professional_phone) */
    it('should update a hrequipment with error required field professional_phone', async () => {

        const response = await request(app).put('/hrequipment').send({
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

    /* Test the put Crud with mandatory field error (tablet) */
    it('should update a hrequipment with error required field tablet', async () => {

        const response = await request(app).put('/hrequipment').send({
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

    /* Test the put Crud with mandatory field error (vehicule) */
    it('should update a hrequipment with error required field vehicule', async () => {

        const response = await request(app).put('/hrequipment').send({
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

    db.clearDB();

});
