const logger           = require('../middleware/app-logger');
const validation       = require('node-input-validator');
const service 		   = require('../services/hREquipmentService');

module.exports.updateHREquipment = async (req, res) =>  {

    logger.info('[updateHREquipmentHandler] updateHREquipment calling ....');
    /* create an object to get all variables sended by the user of the API */
    const body = {
                email_address            : req.body.email_address,
                application_id           : req.body.application_id,
                equipment_code           : req.body.equipment_code,
                equipment_name           : req.body.equipment_name,
    }

    /* create an object validator to verify the existance of inputs of the API */
    const inputValidator = new validation.Validator(body, { 
                                                            email_address       : 'required', 
                                                            application_id      : 'required',
                                                            equipment_code               : 'required',
                                                            equipment_name            : 'required',

    });

    /* excuse the validator to check if filds are empty */
    inputValidator.check().then(async (matched) => {
        if (matched) {

            /* check if this ref_data exist or not to update it */
            const result = await service.findByKey(req.body);

            // Check if only one object has been returned
            if (result.HREquipment && result.HREquipment.length == 1) {

               logger.info('[updateHREquipmentHandler] Found object : ' + JSON.stringify(result.HREquipment));

               /* Call update function */
               const updateResult = await service.updateHREquipment(req.body);

                if (updateResult.error) {

                    logger.error('[updateHREquipmentHandler] Error when trying to update object : ' + JSON.stringify(updateResult.error));
                    res.status(400).send(updateResult.error);

                } else if (updateResult.HREquipment) {

                    logger.info('[updateHREquipmentHandler] Object updated : ' + JSON.stringify(updateResult.HREquipment));

                    res.status(200).send(updateResult.HREquipment);

                }
            }
            else {
                if (result.HREquipment && result.HREquipment.length > 1) {

                    // Many objects
                    logger.info('[updateHREquipmentHandler] Many objects returned');

                    res.status(400).send({ msg_code: '0005' });

                }
                else {
                    // Object not found
                    logger.info('[updateHREquipmentHandler] Object not found ');

                    res.status(400).send({ msg_code: '0006' }); // HREquipment not found
                }
            }
        }
        else {
            res.status(400).send({ msg_code: '0002' }) // Missing required Fields
        }
    });
}
