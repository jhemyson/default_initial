import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './app/routes/routes'
import database from './config/database'
require('dotenv').config()

class App {
  public express : express.Application
  public isDev = process.env.NODE_ENV || 'production'

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
    this.exceptions()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(database(), {
      useNewUrlParser: true
    })
  }

  private routes () : void {
    this.express.use(routes)
  }

  private exceptions (): void {
    this.express.use(function (error, req, res, next): express.Request {
      if (error) {
        return res.status(error.status).json(error)
      }

      next()
    })
  }
}

export default new App().express
