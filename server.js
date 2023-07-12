const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  res.locals.stylesheets = ['/styles.css'];
  next();
});

const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const day = date.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Proceed to the next middleware/route handler
  } else {
    res.status(403).send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
};

app.set('view engine', 'ejs');

app.get('/', checkWorkingHours, (req, res) => {
  res.render('home', { page: 'Home', stylesheets: res.locals.stylesheets });
});

app.get('/services', checkWorkingHours, (req, res) => {
  res.render('services', { page: 'Our Services', stylesheets: res.locals.stylesheets });
});

app.get('/contact', checkWorkingHours, (req, res) => {
  res.render('contact', { page: 'Contact us', stylesheets: res.locals.stylesheets });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
