import express from 'express';
import handleMiddleware from './middlewares/handleMiddleware';

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);
app.use(handleMiddleware);

export default app;