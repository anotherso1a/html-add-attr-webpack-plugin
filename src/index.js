const analyzer = require('./analyzer')

class HtmlAddAttrWebpackPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tapPromise('HtmlAddAttrWebpackPlugin', compilation => {
      let options = this.options
      return new Promise((resolve, reject) => {
        try {
          let processor = analyzer(compilation)
          processor(options)
          resolve()
        } catch (err) {
          reject('Error in HtmlAddAttrWebpackPlugin: ', err)
        }
      });
    });
  }
}

module.exports = HtmlAddAttrWebpackPlugin;