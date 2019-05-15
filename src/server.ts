import App from './app'
require('dotenv').config()

const app = new App().express

app.listen(3333)

export default app
