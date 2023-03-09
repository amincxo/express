const express = require('express');
const fs = require('fs');
const cheerio = require('cheerio');

const app = express();

// تعریف فایل استاتیک
app.use(express.static('public'));

// روت کردن فایل
app.get('/', (req, res) => {
  fs.readFile('./public/index.html', (err, data) => {
    if (err) throw err;
    const $ = cheerio.load(data);
    const pageTitle = $('title').text();
    res.send(`Page Title: ${pageTitle}`);
  });
});

app.listen(80, () => {
  console.log('Server is running on port 3000');
});
