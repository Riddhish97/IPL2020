//inport config file
global.config = require('../config/config.js');
const db = require('../models');
var path = require('path');
const csvFilePath = 'matches.csv';
const csv = require('csvtojson');
csv()
    .fromFile(path.join(__dirname, csvFilePath))
    .then(async (jsonObj) => {
        try {
            await db.models.match_data.create(jsonObj);
            console.log("Data store in DB");
            process.exit();
        } catch (error) {
            console.log("Error: In save data from CSv");
            console.log(error);
            process.exit();
        }
    }).catch((err) => {
        console.log(err);
        process.exit();
    })