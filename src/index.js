const express = require('express')
const morgan = require('morgan')
const path = require('path');
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const route = require('./routes')
const db = require('./config/db')

//CONNECT to DB
db.connect()

// TEMPLATE ENGINE
const hbs = exphbs.create({ extname: '.hbs', helpers: {
  notZero: (a, b) => a + b
} })
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');


app.set("views", path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')))

//HTTP LOGGER
// app.use(morgan('combined'))

//HTTP Method override
app.use(methodOverride('_method'))


//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Route init
route(app)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})