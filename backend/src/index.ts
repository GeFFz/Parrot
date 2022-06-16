import express from 'express';
import handleMiddleware from './middlewares/handleMiddleware';
const cors = require("cors");


const app = express();
const routes = require("./routes");

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(handleMiddleware);


export default app;