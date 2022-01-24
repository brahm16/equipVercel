const logger           	= require('../middleware/app-logger');
const validation       	= require('node-input-validator');
const service 		   	= require('../services/hREquipmentService');

module.exports.addHREquipment = async (req, res) =>  {

    logger.info('[addHREquipmentHandler] addHREquipment calling ....');

    /* create an object to get all variables sended by the user of the API */
    const body = {
                email_address            : req.body.email_address,
                application_id           : req.body.application_id,
                equipment_code           : req.body.equipment_code,
                 equipment_name          : req.body.equipment_name,

    };

    /* create an object validator to verify the existance of inputs of the API */
    const inputValidator = new validation.Validator(body, { 
                                                            email_address       : 'required',
                                                            application_id      : 'required',
                                                            equipment_code               : 'required',
                                                            equipment_name            : 'required',

    });

    /* execute the validator to check if filds are empty */
    inputValidator.check().then(async (matched) => {

        if (matched) {

            /* check if this ref_data exist or not to add it */
            logger.info('[addHREquipmentHandler] addHREquipment service.createHREquipment ....');

            const result = await service.findByKey(req.body);

            if (result.HREquipment && result.HREquipment.length > 0) {

                logger.info('[addHREquipmentHandler] Found object : ' + JSON.stringify(result.HREquipment));

                res.status(400).send({ msg_code: '0001' }); // modelName already exists

            } else if (result.error) {

                logger.info('[addHREquipmentHandler] Found object error : ' + JSON.stringify(result.error));

                res.status(400).send({ msg_code: '0008' }); // find object return error

            }
            else {

                /* Call add function */
                const addResult = await service.createHREquipment(req.body);

                if (addResult.error) {

                    logger.error('[addHREquipmentHandler] Error when trying to create object : ' + JSON.stringify(addResult.error));
                    res.status(400).send(addResult.error);

                } else if (addResult.HREquipment) {

                    logger.info('[addHREquipmentHandler] Object created : ' + JSON.stringify(addResult.HREquipment));

                    res.status(200).send({HREquipment: addResult.HREquipment, msg_code: '0007'});
                }
            }
        }
        else {
            res.status(400).send({ msg_code: '0002' }) // Missing required Fields
          console.log('proooob----',req.body);
        }
    });
}
