module.exports = {
  css: {
    extract: process.env.NODE_ENV === "production" ? {
      ignoreOrder: true,
    } : false,
    sourceMap: false
  }
}