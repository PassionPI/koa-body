const QS = require('querystring')

module.exports = (type, data) => {
  const msg = decodeURIComponent(data)

  if (msg === '') return undefined

  try {
    switch (type) {
      case 'json':
        return JSON.parse(msg)
      case 'formdata': 
        return QS.parse(msg)
      default:
        return msg
    }
  } catch(e) {
    console.error(e)
    return msg
  }
  
}