require('dotenv').config()
const databaseEnv = {
  production: process.env.DATABASE,
  development: process.env.DATABASETEST
}

export default function database () : string {
  if (process.env.NODE_ENV === 'development') {
    return databaseEnv.development
  }
  return databaseEnv.production
}
