const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = hrequipmentSchema = new Schema({

    /* Unique Key */
    HREquipmentKey :
    {   
		email_address :
        {
        	type: String,
            required: true,
        },

		application_id :
        {
        	type: String,
            required: true,
        },
        equipment_code :
          {
              type: String,
              required: true,
          },

        type: {},
        required: true,
        unique: true
    },

    /* Other fields */
    equipment_name:
    {
        type: String,
        required: true,
    },

});
