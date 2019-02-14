configValues = {
    mongoose: {
        username: 'testuser',
        password: 'test123'
    },
    server: {
        port: 3000
    }
}

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.mongoose.username +
            ':' + configValues.mongoose.password +
            '@ds127825.mlab.com:27825/xkcd-backend';
    }
}