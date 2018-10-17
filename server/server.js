const path = require('path');
const express = require('express');

const publicPath =path.join(__dirname, '../public');
let app = express();

const port = process.env.PORT || 3000;
//app.listen(port, () => { console.log(`App listening on port ${port}!`); })

app.use(express.static(publicPath));

app.listen(port, () => {
	console.log(`Server is up on ${port}`);
});
