'use strict';
const config = require('./config');
const aws = require('./aws');

module.exports.getUploadUrl = (filename, filetype, username, callback) => {
    const params = {
        Bucket: config.BUCKET,
        Key: `${username}/${filename}`,
        ContentType: filetype,
        ACL: 'public-read'
    };

    const result = aws.getSignedUrl(params);

    callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'OK',
                    input: result
                })
            })
};

module.exports.getFileUrl = (filename, username, callback) => {
    const params = {
        Bucket: config.BUCKET,
        Key: `${username}/${filename}`,
    };
    const result = aws.getFileUrl(params);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: 'OK',
            input: result
        })
    })
};
