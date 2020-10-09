"use strict";

const API_URL = "http://www.devcodecampmusiclibrary.com/api/music";

function getInitialData() {
    $.get(API_URL, function (data) {
        log(data);
    })
}

function log(data) {
    console.log(data);
}

getInitialData();