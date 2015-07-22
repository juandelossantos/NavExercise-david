var express = require('express');
var router = express.Router();
var navdata = require('../data/nav.json');

/* GET data for the page. */
router.get('/', function(req, res, next) {
  'use strict';
/* Get general menu data (labels, urls and items) */

  var navMenuLabel = [];
  navdata.items.forEach(function(item) {
    navMenuLabel = navMenuLabel.concat(item.label);
  });

  var navMenuUrl = [];
  navdata.items.forEach(function(item) {
    navMenuUrl = navMenuUrl.concat(item.url);
  });

  var navMenuItems = [];
  navdata.items.forEach(function(item) {
    navMenuItems = navMenuItems.concat(item.items);
  });

/* Get sub-menu labels by category */

  var workMenuData = navdata.items[0].items;
  var workdata = [];
  workMenuData.forEach(function(item) {
    workdata = workdata.concat(item.label);
  });

  var aboutMenuData = navdata.items[1].items;
  var aboutdata = [];
  aboutMenuData.forEach(function(item) {
    aboutdata = aboutdata.concat(item.label);
  });

  var careersMenuData = navdata.items[2].items;
  var careersdata = [];
  careersMenuData.forEach(function(item) {
    careersdata = careersdata.concat(item.label);
  });

  var ideasMenuData = navdata.items[3].items;
  var ideasdata = [];
  ideasMenuData.forEach(function(item) {
    ideasdata = ideasdata.concat(item.label);
  });

  var newsMenuData = navdata.items[4].items;
  var newsdata = [];
  newsMenuData.forEach(function(item) {
    newsdata = newsdata.concat(item.label);
  });

  var eventsMenuData = navdata.items[5].items;
  var eventsdata = [];
  eventsMenuData.forEach(function(item) {
    eventsdata = eventsdata.concat(item.label);
  });

  var contactMenuData = navdata.items[6].items;
  var contactdata = [];
  contactMenuData.forEach(function(item) {
    contactdata = contactdata.concat(item.label);
  });

/* Get sub-menu urls by category */

  var workMenuUrl = navdata.items[0].items;
  var workurl = [];
  workMenuUrl.forEach(function(item) {
    workurl = workurl.concat(item.url);
  });

  var aboutMenuUrl = navdata.items[1].items;
  var abouturl = [];
  aboutMenuUrl.forEach(function(item) {
    abouturl = abouturl.concat(item.url);
  });

  var careersMenuUrl = navdata.items[2].items;
  var careersurl = [];
  careersMenuUrl.forEach(function(item) {
    careersurl = careersurl.concat(item.url);
  });

  var ideasMenuUrl = navdata.items[3].items;
  var ideasurl = [];
  ideasMenuUrl.forEach(function(item) {
    ideasurl = ideasurl.concat(item.url);
  });

  var newsMenuUrl = navdata.items[4].items;
  var newsurl = [];
  newsMenuUrl.forEach(function(item) {
    newsurl = newsurl.concat(item.url);
  });

  var eventsMenuUrl = navdata.items[5].items;
  var eventsurl = [];
  eventsMenuUrl.forEach(function(item) {
    eventsurl = eventsurl.concat(item.url);
  });

  var contactMenuUrl = navdata.items[6].items;
  var contacturl = [];
  contactMenuUrl.forEach(function(item) {
    contacturl = contacturl.concat(item.url);
  });

/* Render data to home page use */

  res.render('index', {
    title: 'HUGE Nav Exercise - David Sierra - Home',
    navlabels: navMenuLabel,
    navUrl: navMenuUrl,
    navItems: navMenuItems,
    navWorkItems: workdata,
    navAboutItems: aboutdata,
    navCareersItems: careersdata,
    navIdeasItems: ideasdata,
    navNewsItems: newsdata,
    navEventsItems: eventsdata,
    navContactItems: contactdata,
    navWorkUrl: workurl,
    navAboutUrl: abouturl,
    navCareersUrl: careersurl,
    navIdeasUrl: ideasurl,
    navNewsUrl: newsurl,
    navEventsUrl: eventsurl,
    navContactUrl: contacturl,
    page: 'home'
  });
});
module.exports = router;
