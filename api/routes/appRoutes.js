const bodyParser    = require('body-parser');

const addHandler         = require('../actions/addHREquipmentHandler');
const updateHandler      = require('../actions/updateHREquipmentHandler');
const deleteHandler      = require('../actions/deleteHREquipmentHandler');
const getHandler         = require('../actions/getHREquipmentHandler');

module.exports = routes = app =>  {

	/* Body parser to Json*/
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	/* Define the root for the get method */
	app.route('/servicima/hrequipment/v1').get(getHandler.getHREquipment);

	/* Define the root for the post method */
	app.route('/servicima/hrequipment/v1').post(addHandler.addHREquipment);

	/* Define the root for the put method */
	app.route('/servicima/hrequipment/v1').put(updateHandler.updateHREquipment);

	/* Define the root for the delete method */
	app.route('/servicima/hrequipment/v1').delete(deleteHandler.deleteHREquipment);

}
