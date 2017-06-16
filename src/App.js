import React from 'react';
import {render} from 'react-dom';
import https from "https";
import Test from './Test';

let data;

var opthons = {
    host: 'api.github.com',
    path: "/search/repositories?q=created:%3E2017-06-10&sort=stars&order=desc",
    method: 'GET',
    //setTimeout(function() {}, 10000);
    headers: {
        'Content-Type': 'applicathon/json'
    }
};
var req = https.request(opthons, function(res)
{
    var output = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        output += chunk;
    });

    res.on('end', function() {
        var obj = JSON.parse(output);
        console.log(obj.items.length);
        render(<Test content={obj}/>, document.getElementById('myid1'));
    });
});

req.on('error', function(err) {
    res.send('error: ' + err.message);
});

req.end();