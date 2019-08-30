'use strict';

const fileManager = require('./fileManager');

// TODO Need to understand how to convert input data before storing on S3
module.exports.uploadFile = (event, context, callback) => {
    fileManager.putS3File(event.body).then(result => {
        const  response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'OK',
                input: result
            })
        };
        callback(null, response);
    });
};

module.exports.getUploadLink = (event, context, callback) => {
    const fileName = event.queryStringParameters.name;
    const fileType = event.queryStringParameters.type;
    const userName = event.queryStringParameters.username;
    console.log(fileType, fileName, userName);
    fileManager.getUploadUrl(fileName, fileType, userName, callback)
};

module.exports.getFileLink = (event, context, callback) => {
    const fileName = event.queryStringParameters.name;
    const userName = event.queryStringParameters.username;
    fileManager.getFileUrl(fileName, userName, callback)
};
