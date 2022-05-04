const express = require("express");
const app = express();
const port = 3001;

app.get("/", (request, response)=>{
    response.send("Hello Word");
});

app.listen(port, () => {
    console.log("Nosso servirdo está rodando na porta" + port);
});
