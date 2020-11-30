const newman = require('newman');

newman.run({
    collection: require('./integration-test.postman_collection.json'),
    environment: require('./integration-test.postman_environment.json'),
    reporters: 'cli'
});