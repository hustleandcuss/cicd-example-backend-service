const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.1.0',
    info: {
        title: 'Student Portal API',
        version: '1.0.0',
        description: 'Student Portal API Description',
        license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
    },
//    servers: [
//      {
//        url: "http://localhost:3005",
//      },
//    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;