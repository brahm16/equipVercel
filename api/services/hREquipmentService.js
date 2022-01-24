const mongoose      = require('mongoose');
const logger        = require('../middleware/app-logger');
const hrequipmentSchema = require('../models/hrequipment');
const hrequipment       = mongoose.model('hrequipmentSchema', hrequipmentSchema);

/********************************************************/
/* findByKey : Find if the object exists in database */
/********************************************************/
module.exports.findByKey = async object => {

    /*Create the search key for hrequipmentSchema */
    const filter = {
                'HREquipmentKey.email_address'                 : object.email_address,
                'HREquipmentKey.application_id'                : object.application_id,
      'HREquipmentKey.equipment_code'                : object.equipment_code
    };

    logger.info('[findByKey] Search criteria : ' + JSON.stringify(filter));

    try {

        const HREquipment = await hrequipment.find(filter);

        return { HREquipment};

    } catch (error) {
        return { error };
    }
};

/********************************************************/
/* findByFields : Find if the object exists in database */
/********************************************************/
module.exports.findByFields = async object => {

    sort = {};

    if (object.sortfield == 'email_address'   || 
	    object.sortfield == 'application_id' ||
      object.sortfield == 'equipment_code'     ) {

        sort[String('HREquipmentKey.' + object.sortfield)] = object.sort;
    }
    else {
        sort[String(object.sortfield)] = object.sort;
    }

    const filter = {};

    const keys = Object.keys(object);

    keys.forEach(key => {

    	if ((key === 'email_address'   && object.email_address !== '')  ||
      		(key === 'application_id'  && object.application_id !== '') ||
        (key === 'equipment_code'  && object.equipment_code !== '') )

    	{
      		// eslint-disable-next-line security/detect-object-injection
      		filter[String(`HREquipmentKey.${key}`)] = object[key];
    	}
    });

    logger.info('[findByFields] Search criteria : ' + JSON.stringify(filter));

    try {

    	if ((!object.beginning || !object.number) && (!object.sortfield || !object.sort)) {
        	const HREquipment = await hrequipment.find(filter);

        	return { HREquipment };
        }

    	if (!object.sortfield || !object.sort) {
        	const HREquipment = await hrequipment.find(filter)
        	        				.skip(parseInt(object.beginning, 10))
        	        				.limit(parseInt(object.number, 10));

        	return { HREquipment };
        }

    	if (!object.beginning || !object.number) {
        	const HREquipment = await hrequipment.find(filter).sort(sort);

        	return { HREquipment };
        }

        const HREquipment = await hrequipment.find(filter)
        	        			.sort(sort)
        	        			.skip(parseInt(object.beginning, 10))
        	        			.limit(parseInt(object.number, 10));

        return { HREquipment };
    } catch (error) {
    	return { error };
    }
};

/**************************************************************/
/* findById : Find if the object exists in database using id  */
/**************************************************************/
module.exports.findHREquipmentById = async id => {

    logger.info('[findHREquipmentById] Find by Id : ' + JSON.stringify(id));

    try {

        const HREquipment = await hrequipment.findById(id);

        logger.info('[findHREquipmentById] Found object : ' + JSON.stringify(HREquipment));

        return { HREquipment };

    } catch (error) {
        return { error };
    }
};

/********************************************************/
/*    createHREquipment : Insert a new row in database */
/********************************************************/
module.exports.createHREquipment = async body => {

    try {

        const newHREquipment = new hrequipment({
            HREquipmentKey: {
                email_address       : body.email_address, 
                application_id      : body.application_id,
              equipment_code        :body.equipment_code,
            },
          equipment_name               : body.equipment_name,
        });

        /* Create a new row */
        const HREquipment = await newHREquipment.save();

        logger.info('[createHREquipment] HREquipment inserted : ' + JSON.stringify(HREquipment));

        return { HREquipment };

    } catch (error) {
        return { error };
    }
};

/********************************************************/
/*    updateHREquipment : Update an object in database */
/********************************************************/
module.exports.updateHREquipment = async body => {

    try {

    	const filter = {
                'HREquipmentKey.email_address'       : body.email_address,
                'HREquipmentKey.application_id'      : body.application_id,
                'HREquipmentKey.equipment_code'       : body.equipment_code,
    	}

    	const fieldsToUpdate = { 
                'equipment_name'               : body.equipment_name,
		};

        /* Find and update the record  */
      	const HREquipment = await hrequipment.findOneAndUpdate(filter,
                                                       	fieldsToUpdate,
                                                       	{ new: true, upsert: true, useFindAndModify: false });

        return { HREquipment };

    } catch (error) {
        return { error };
    }
};

/**************************************************************/
/*    deleteHREquipment : delete object from database     */
/**************************************************************/
module.exports.deleteHREquipment = async id => {

    try {
        const filter = { '_id': id };

        /* Create a new row */
        const HREquipment = await hrequipment.findOneAndDelete(filter);

        return { HREquipment };

    } catch (error) {
        return { error };
    }
};

