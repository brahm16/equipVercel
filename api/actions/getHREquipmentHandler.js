const logger           	= require('../middleware/app-logger');
const service 		   	= require('../services/hREquipmentService');

module.exports.getHREquipment = async (req, res) =>  {

    logger.info('[getHREquipmentHandler] getHREquipment called ....');

    const result = await service.findByFields(req.query);

    if (result.HREquipment && result.HREquipment.length > 0) {

        logger.info('[getHREquipmentHandler] Found objects : ' + JSON.stringify(result.HREquipment));

        res.status(200).send(result.HREquipment); // return array of abjects
    }
    else if (result.error) {

        logger.error('[getHREquipmentHandler] Error when trying to get objects : ' + JSON.stringify(result.error));

        res.status(400).send(result.error); // error
    }
    else {
        res.status(200).send({ msg_code: '0004' }); // No data found
    }
}
