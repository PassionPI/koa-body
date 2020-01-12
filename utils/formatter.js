module.exports = (type, data) => {
  switch (type.toLowerCase()) {
    case 'json':
      try {
        return JSON.parse(data)
      } catch {
        return data
      }
    default:
      return data
  }
}