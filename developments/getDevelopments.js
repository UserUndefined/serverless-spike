'use strict';

var moment = require('moment');

module.exports.index = function(event, context, callback){
  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
    },
    body: JSON.stringify([
        {
          name: 'Development One',
            date: moment.now()
        }
      ]
    )
  };

  return callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
