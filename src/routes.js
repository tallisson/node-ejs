const express = require('express');
const path = require('path');

const routes = (app) => {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../public/pages'));
  app.use(express.json());

  app.get('/', (req, res) => {
    const data = [
      {
        title: 'Title 01',
        message: 'Message 01'
      },
      {
        title: 'Title 02',
        message: 'Message 02'
      }
    ];
    res.render('index', { data });
  });

  app.get('/index', (req, res) => {
    res.render('index');
  })

  app.get('/about', (req, res) => {
    res.render('about');
  });
};

module.exports = routes;