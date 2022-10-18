import express from 'express'
import morgan from 'morgan'
import expressLayouts from 'express-ejs-layouts'
import compileSass from 'express-compile-sass'
import methodOverride from 'method-override'
import { ironSession } from 'iron-session/express'

import parseData from './src/_middlewares/parse-data.js'

const app = express()
const port = process.env.PORT || 3000

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(expressLayouts)

app.use(compileSass({
  root: `${process.cwd()}/public`,
  sourceMap: true,
  sourceComments: true,
  watchFiles: true,
  logToConsole: false
}))

app.use(express.static('public'))

app.use(morgan('tiny'))

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(parseData)

app.use('/', (await import('./src/routes.js')).default)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
