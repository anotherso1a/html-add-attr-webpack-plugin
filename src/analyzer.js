const fs = require('fs')
const cheerio = require('cheerio')

//处理属性
const createSetter = compilation => ({ sourceFile = 'index.html', attrs }) => {
  let htmlPath = compilation.assets[sourceFile].existsAt
  const $ = cheerio.load(
    fs.readFileSync(htmlPath, 'utf-8')
  )
  for (let selector in attrs) {
    let values = attrs[selector]
    Object.keys(values).forEach(key => {
      $(selector).attr(key, values[key])
    })
  }
  fs.writeFileSync(htmlPath, $.html(), 'utf-8')
}

//处理options
const analyzeOptions = compilation => (options = {}) => {
  let setAttr = createSetter(compilation)
  Array.isArray(options) ?
    options.forEach(setAttr) :
    setAttr(options)

}

module.exports = analyzeOptions