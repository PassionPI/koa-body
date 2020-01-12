const formatter = require('./utils/formatter')

module.exports = option => async (ctx, next) => {
  const { prefix = '', type } = option

  if (new RegExp(`^${prefix}`).test(ctx.path)) {
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