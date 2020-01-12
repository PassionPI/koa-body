module.exports = (type, data) => {
  switch (type.toLowerCase()) {
    case 'json':
      return JSON.parse(data)
    default:
      return data
  }
}