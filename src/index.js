const express = require('express')
const morgan = require('morgan')
const path = require('path');
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const hbs = exphbs.create({ extname: '.hbs' })

// TEMPLATE ENGINE
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'));

//HTTP LOGGER
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})