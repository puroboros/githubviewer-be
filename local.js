require('dotenv').config();
const app = require('./src/app');

app.listen(8081, () => {
    console.log('app running on 8081');
});

