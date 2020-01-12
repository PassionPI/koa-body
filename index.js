const formatter = require('./utils/formatter')

module.exports = option => {
  const { prefix = '', type } = option
  const reg = new RegExp(`^${prefix}`)
  
  return async (ctx, next) => {
    if (reg.test(ctx.path)) {
      const data = await new Promise((res, rej) => {
        let msg = ''
        try {
          ctx.req.on('data', b => msg += b)
          ctx.req.on('end', () => res(msg))
        } catch(e) {
          rej(e)
        }
      })
      ctx.data = formatter(type, data)
    }

    await next()
  }
}