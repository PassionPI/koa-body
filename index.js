const onData = require('./utils/onData')
const formatter = require('./utils/formatter')

module.exports = ({ prefix = '', type = '' }) => {
  const cat = `${type}`
  const reg = new RegExp(`^${prefix}`)

  return async (ctx, next) => {

    if (ctx.data === undefined && reg.test(ctx.path)) {
      ctx.data = formatter(cat, await onData(ctx))
    }

    await next()
  }
}