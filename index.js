const express = require("express");
const app = express();

// root url
app.get('/', (request, response) => {
    response.json([
        {
            id: 1,
            userName: 'User 1'
        },
        {
            id: 2,
            userName: 'User 2'
        },
        {
            id: 3,
            userName: 'User 3'
        }
    ])
});

// listening this app at port 5000
app.listen(5000, () => {
    console.log('App is running on port 5000')
});