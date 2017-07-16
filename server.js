"use strict"

const req = require('tinyreq');
const fs = require('fs');
const cheerio = require('cheerio');

function scrape(url, data, cb)
{
  req(url, (err, body) => {
    if(err){ return cb(err);}
    let $ = cheerio.load(body),
        pageData = {};

    Object.keys(data).forEach(k => {
      pageData[k] = $(data[k]).eq(0).text().trim();
    })

    cb(null, pageData);
  });
}

scrape('http://www.coffeereview.com/types/espresso/', {
  title: '.archive-title',
  data: '.review-col2 p'
}, (err, data) => {
    console.log(err || data);
});
