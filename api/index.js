const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); 

// middleware 
app.use(bodyParser.json()); 
app.use(cors()); 


const posts = require('./routes/testAPI'); 

// app.get("/api", (req, res) => {
//     res.json({"users": ["1", "2", "3"]})
// })
app.use('/api', posts); 


const port = 5000; 

app.listen(port, () => console.log(`Server started on port ${port}`));