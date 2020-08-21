const moment = require('moment')

exports.log = message => {
    console.log(`[${moment()}] ${message}`);
};