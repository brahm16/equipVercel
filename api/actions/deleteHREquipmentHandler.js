const logger           = require('../middleware/app-logger');
const service 		   = require('../services/hREquipmentService');

module.exports.deleteHREquipment = async (req, res) =>  {

    logger.info('[deleteHREquipmentHandler] deleteHREquipmentHandler called ....');

    const result = await service.findHREquipmentById(req.query._id);

    // Check if only one object has been returned
    if (result.HREquipment) {

        logger.info('[deleteHREquipmentHandler] Found object : ' + JSON.stringify(result.HREquipment));

        /* Call update function */
        const deleteResult = await service.deleteHREquipment(req.query._id);

        if (deleteResult.error) {

            logger.error('[deleteHREquipmentHandler] Error when trying to update object : ' + JSON.stringify(deleteResult.error));
            res.status(400).send(deleteResult.error);

        } else if (deleteResult.HREquipment) {

           	logger.info('[deleteHREquipmentHandler] Disabled object : ' + JSON.stringify(deleteResult.HREquipment));

           	res.status(200).send(deleteResult.HREquipment);
        }
    }
    else {
        // Object not found
        logger.info('[deleteHREquipmentHandler] Object not found ');

        res.status(400).send({ msg_code: '0006' }); // HREquipment not found
    }
}
