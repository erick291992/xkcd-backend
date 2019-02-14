const path = require('path')

module.exports = {
    apps: [{
        name: 'xkcd-backend',
        script: 'app.js',
        instances: 1,
        autorestart: true,
        watch: process.env.NODE_ENV !== 'production' ? path.resolve() : false,
        max_memory_restart: (process.env.MAX_MEMORY_RESTART === undefined || process.env.MAX_MEMORY_RESTART === null) ? '1G' : process.env.MAX_MEMORY_RESTART
    }]
}