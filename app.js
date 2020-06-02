let express = require("express");
let app = express();
const cors = require('cors')

app.use(cors())
app.use(express.static("/static"))
app.use(express.json())

modules.export = app