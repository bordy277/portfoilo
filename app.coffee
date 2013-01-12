express = require 'express'
http = require 'http'
path = require 'path'
less = require 'less-middleware'
expressCoffee = require 'express-coffee'

app = express()

app.configure ->
  app.use express.errorHandler()

  app.use expressCoffee
    path: __dirname + '/public'
    live: !process.env.PRODUCTION
    uglify: process.env.PRODUCTION

  app.use less
    src: path.join __dirname, 'public'
    once: false

  app.use express.favicon __dirname + '/public/images/favicon.ico'
  app.use express.static __dirname + '/public'

  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router

http.createServer(app).listen process.env.PORT or 3000

console.log "Server running - on port " +(process.env.PORT or 3000)
