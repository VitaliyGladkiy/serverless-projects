const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.getSignedUrl = (params) => {
    return S3.getSignedUrl('putObject', params);
};

module.exports.getFileUrl = (params) => {
    return S3.getSignedUrl('getObject', params)
};
