require('@dotenvx/dotenvx').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require('cors');
const corsOptions = require('./config/cors');
const BaseRouter = require('./routes/BaseRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use('/', BaseRouter);

//app.use(...errorHandlers);

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use((req, res) => {
  res.status(404).json({ status: 'NOT FOUND' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});