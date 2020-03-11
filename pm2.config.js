module.exports = {
    apps : [
    {
      name: "node-server-sample",
      script: "./server.js",
      cwd : '/home/development/project/node-server-sample/dist/',
      env: {
        PORT: 3000,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
    ]
  }