const faker = require('faker');

function randomData(userContext, event, done) {
    userContext.vars.taskName = faker.name.firstName();
    userContext.vars.projectName = faker.name.jobTitle();
    done();
}

module.exports = { randomData }