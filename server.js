import express from 'express';
import path from 'path';
import React from 'react';
import Page from './jsx/allPage.jsx';
import { renderToString } from 'react-dom/server';
import ssr from './server-wrap.js';
import template from './jsx/template.js';
import bodyParser from 'body-parser';

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
	extended: true
}));
 
app.get('/', function (req, res) {
  const { preloadedState, content}  = ssr()
  res.send(template(content, "Trello App", preloadedState))
})

app.post("/", function (req, res) {
  res.json({hell: "Vova"})
})

app.listen(8000, (err) => {
	if(err) console.log(err);

	console.log("Have fun")
})