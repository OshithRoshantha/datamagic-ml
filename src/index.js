const MinMaxScaler = require('./normalization');
const StandardScaler = require('./standardization');
const OneHotEncoder = require('./oneHotEncoding');
const CleanMissings = require('./missingValues');

module.exports = {
    MinMaxScaler,
    StandardScaler,
    OneHotEncoder,
    CleanMissings
};