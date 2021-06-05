const joy = require('joytpl');
const getOptions = require('loader-utils').getOptions;

module.exports = function(source) {
    const options = getOptions(this);
    const callback = this.async();

    joy.build(source, options, (err, res) => callback(err, res.content));
};
