const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "sass")],
  },
  swcMinify: true,
  compress: true,
}