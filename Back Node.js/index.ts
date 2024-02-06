const express = require("express");

const app = express();
const port = 3000;

app.get('/', (req: any , res: any) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
