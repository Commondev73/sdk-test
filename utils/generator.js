const randomstring = require('randomstring')
const moment = require('moment')

const genTransactionId = () => {
  const randomNumber = randomstring.generate({
    length: 5,
    charset: 'numeric'
  })
  return `${moment().format('YYYYMMDDHHmmss')}${randomNumber}`
}

const genPassword = () => {
  const randomPassword = randomstring.generate({ length: 8 })
  return randomPassword
}

module.exports = {
  genTransactionId,
  genPassword
}
