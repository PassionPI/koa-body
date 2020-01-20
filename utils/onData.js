module.exports = ({ req }) => new Promise((res) => {
  let msg = ''
  req.on('close', onClose)
  req.on('data', onData)
  req.on('end', onEnd)
  
  function onClose() {
    req.removeListener('close', onClose)
    req.removeListener('data', onData)
    req.removeListener('end', onEnd)
  }
  function onData(chunk) {
    msg += chunk
  }
  function onEnd() {
    onClose()
    res(msg)
  }
})
