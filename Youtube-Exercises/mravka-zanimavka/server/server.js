import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom';

import App from '../src/App';

const app = express();

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.js'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error happend...!")
        }
        return res.send(
            data.replace(
                "<div id='root'></div>", 
                `<div id='root'>${ReactDOMServer.renderToString(<App />)}</div>`
            )
        );
    })
})

