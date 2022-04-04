const bodyParser = require('body-parser');
const users = require('./userRoutes')
const tasks = require('./tasksRoutes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(tasks);
    app.use(users);
}