require('dotenv').config()

module.exports = {
  env: {
    customKey: 'my-vaaalue',
    customSecret: process.env.customSecret, 
  },
}