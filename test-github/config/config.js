module.exports = {
    development: {
        port: process.env.PORT || 4200,
        dbPath: 'mongodb://localhost:27017/video-tutorial-db'
    },
    production: {}
};