// https://dev.to/itachiuchiha/developing-an-express-application-using-typescript-3b1
import express from 'express';

const app = express();
const port = 3333;

app.get('/', (request, response) => {
  return response.json({
    message: "ok"
  });
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})