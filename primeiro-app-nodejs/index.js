const express = require('express');
const cors = require('cors');

const router = express.Router();

router.get('/', (req, res) => res.send("Hello word"));

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);
server.listen(3000);