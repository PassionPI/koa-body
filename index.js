const onData = require('./utils/onData')
const formatter = require('./utils/formatter')

module.exports = (options = {}) => {
  const { prefix = '', type = '' } = options
  const cat = `${type}`.toLowerCase()
  const reg = new RegExp(`^${prefix}`)

  return async (ctx, next) => {

    if (ctx.request.body === undefined && reg.test(ctx.path)) {
      try {
        ctx.request.body = formatter(cat, await onData(ctx))
      } catch(e) {
        console.error(e)
      }
    }

    await next()
  }
}