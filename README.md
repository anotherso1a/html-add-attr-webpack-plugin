# HtmlAddAttrWebpackPlugin

## Usage

### Install

```sh
npm install html-add-attr-webpack-plugin -D
```

### Example

for SPA (single-page-application):

```js
//webpack.config.js
module.exports = {
  plugin: [
    //...other options
    new HtmlAddAttrWebpackPlugin({
      attrs: {
        'script': {
          crossOrigin: 'anonymous'
        }
      }
    })
  ]
}//will add crossOrigin="anonymous" to script tag.
```

for multi-page application:

```js
//webpack.config.js
module.exports = {
  plugin: [
    //...other options
    new HtmlAddAttrWebpackPlugin([{
      attrs: {
        'script': {
          crossOrigin: 'anonymous'
        }
      } //will rewrite index.html
    }, {
      sourceFile: 'sub.html',
      attrs: {
        'link': {
          class: 'link'
        },
        'script': {
          class: 'sub'
        }
      } //will rewrite sub.html
    }])
  ]
}
```

### Options

|props|description|
|:-:|:-:|
|sourceFile|the html file that needs to rewrite. (default 'index.html')|
|attrs|just like html attributes|

tks for using
