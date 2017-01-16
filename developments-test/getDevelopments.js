'use strict';

var moment = require('moment');

module.exports.index = function(event, context, callback){
  const response = {
    statusCode: 200,
//    headers: {
//        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
//    },
    body: JSON.stringify([
            {
                name: 'Example House',
                location: 'Leeds',
                vendor: 'Midas',
                agent: 'BPS',
                approved: 'Y',
                launchDate: '17 Jan 2017',
                plotNumber: '20',
                legalCompletion: 'Y'
            },
            {
                name: 'Little House',
                location: 'Manchester',
                vendor: 'Trent',
                agent: 'BPS',
                approved: 'Y',
                launchDate: '01 Feb 2017',
                plotNumber: '5',
                legalCompletion: 'Y'
            },
            {
                name: 'Mighty House',
                location: 'Sheffield',
                vendor: 'Trent',
                agent: 'PLL',
                approved: 'Y',
                launchDate: '18 Feb 2017',
                plotNumber: '9',
                legalCompletion: 'N'
            },
            {
                name: 'Farm House',
                location: 'Manchester',
                vendor: 'Midas',
                agent: 'PLL',
                approved: 'Y',
                launchDate: '29 Mar 2017',
                plotNumber: '25',
                legalCompletion: 'Y'
            },
            {
                name: 'White House',
                location: 'Sheffield',
                vendor: 'Trent',
                agent: 'BPS',
                approved: 'Y',
                launchDate: '30 Mar 2017',
                plotNumber: '10',
                legalCompletion: 'N'
            }
        ]
    )
  };

  return callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
