const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbish = require('./generate_rubbish')
const app = express()
const port = 3000

const hbsHelpers = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    isEqual: function (arg1, arg2, options) {
      return (arg1 === arg2) ? options.fn(this) : options.inverse(this)
    },
  }
});

app.engine('handlebars', hbsHelpers.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  console.log(options)
  const rubbish = generateRubbish(options)
  res.render('index', { options, rubbish })
})

app.listen(port, () => {
  console.log(`This is Express server is running on http://localhost:${port}`)
})
