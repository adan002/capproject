const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", getUsers);
app.post("/api/users", createUsers)

app.listen(4004, console.log('listening on port 4004'));