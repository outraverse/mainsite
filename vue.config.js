module.exports = {
  css: {
    extract: process.env.NODE_ENV === "production" ? {
      ignoreOrder: true,
    } : false,
    sourceMap: false
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: true
      }
    }
  }
}