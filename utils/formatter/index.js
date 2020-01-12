const qs = require('querystring')

module.exports = (type, data) => {
  try {
    switch (type.toLowerCase()) {
      case 'json':
        return JSON.parse(data)
      case 'formdata': 
        return qs.parse(data)
      default:
        return data
    }
  } catch {
    return data
  }
}