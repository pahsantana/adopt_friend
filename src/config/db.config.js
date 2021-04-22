module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD : "senha",
    DB: "db_adopt_friend",
    dialect: "mysql",
    pool: {
        max: 5,
        min : 0,
        acquire: 30000,
        idle: 10000 
    }
}