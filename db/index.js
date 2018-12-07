const Sequelize = require('sequelize');

const db = new Sequelize('passport-demo', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.authenticate().then(()=>{
    console.log('connected to my sql db');
}).catch(()=> {
    console.log('error when connecting')
});

module.exports = {
    db: db,
    users: require('./user')(db)
}

module.exports = db;

db.sync();