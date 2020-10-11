"use strict";

const API_URL = "http://www.devcodecampmusiclibrary.com/api/music";

function getInitialData() {
    $.get(API_URL, function (data) {
        log(data);
    })
}

function log(data) {
    const tableRow = ``
}

function addTrTo(string) {
    return `<tr>
            ${string}
            </tr>`
}

getInitialData();