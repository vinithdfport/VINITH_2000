const server_port = 8080;
const cors_origin = "http://localhost:3000";
const mongo_url = "mongodb://127.0.0.1:27017/nie_trainer_db?directConnection=true&serverSelectionTimeoutMS=2000"

const IS_DEBUG = true;
const jwtConfig = {jwtSecret : 'Akshay!secretKey@1551*for#jwt',
        jwtExpires: (24 * 60 * 60) // 24 hour
    };
module.exports = { server_port, cors_origin, mongo_url, IS_DEBUG, jwtConfig };