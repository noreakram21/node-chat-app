const path = require('path');
const publicPath =path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`App listening on port ${port}!`); })
let app = express();
app.use(express.static(publicPath));

app.listen(3000, () => {
	console.log(`Server is up on ${port}`);
});
