"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch the data from the URL
axios_1["default"].get(URL).then(function (res) {
    console.log(res.data);
});
