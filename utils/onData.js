module.exports = ({ req }) => new Promise((res, rej) => {
  let msg = ''
  try {
    req.on('close', onClose)
    req.on('data', onData)
    req.on('end', onEnd)
  } catch(e) {
    rej(e)
  }
  
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
