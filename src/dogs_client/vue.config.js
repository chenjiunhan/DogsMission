module.exports = {
  devServer: {
    watchOptions: {
      poll: 1000, 
      ignored: "/app/node_modules/"
    }
  }
}