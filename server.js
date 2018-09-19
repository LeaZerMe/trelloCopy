import express from 'express';
import path from 'path';
import React from 'react';
import Page from './jsx/allPage.jsx';
import { renderToString } from 'react-dom/server';
import template from './jsx/template.js';
import bodyParser from 'body-parser';

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'assets'));

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
	extended: true
}));
 
app.get('/', function (req, res) {
	res.send("Hello")
  // res.send(template({
  // 	body: renderToString(<Page/>),
  // 	title: "CopyTrello",
  // 	initialState: JSON.stringify("good":true)
  // }))
})

app.get("/assets/bundle.js", function (req, res) {
  // res.sen
})

app.listen(8000, (err) => {
	if(err) console.log(err);

	console.log("Have fun")
})