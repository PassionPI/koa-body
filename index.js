module.exports = async (ctx, next) => {
  ctx.data = await new Promise((s, j) => {
    let data = ''
    try {
      ctx.req.on('data', msg => data += msg)
      ctx.req.on('end', () => s(data))
    } catch(e) {
      j(e)
    }
  })
  await next()
}