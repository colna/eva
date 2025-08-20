const { createProxyMiddleware } = require('http-proxy-middleware')
const { PROXY_SERVER_REMOTE, REACT_APP_REMOTE, PROXY_COOKIE } = process.env

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: REACT_APP_REMOTE,
      changeOrigin: true,
      onProxyReq(proxyReq) {
        REACT_APP_REMOTE.slice(-3) === 'dev' &&
          proxyReq.setHeader('cookie', PROXY_COOKIE)
      }
    }),
    createProxyMiddleware('/assets', {
      target: PROXY_SERVER_REMOTE,
      changeOrigin: true
    })
  )
}
