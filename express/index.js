// //build express js hello world App
// const express = require('express');
// const app = express();
// const port = 8070;
// // add ssl support to express
// const https = require('https');
// const fs = require('fs');
// const options = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };
// // add ssl support to express
// // add cors support to express
// const cors = require('cors');
// app.use(cors());
// const server = https.createServer(options, app);
// // add ssl support to express
// // add ssl support to express
// app.get('/read', (req, res) => {
//     res.send('e72748ee-ec98-11ec-8ea0-0242ac120002');
// }
// );




// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// }
// );



//create express App
const express = require('express');
const app = express();
const port = 8070;
app.get('/read', (req, res) => {
        res.send('e72748ee-ec98-11ec-8ea0-0242ac120002');
    })

    app.listen(port, () => {})