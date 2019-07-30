# xtpl-loader

webpack loader for xtemplate


## usage

```js
module: {
  loaders: [
    {
      test: /\.xtpl$/,
      loader: 'xtpl',
      query:{
        Compiler:require('xtemplate-compiler').default,
      }
    },
  ],
},
```


see index.js webpack.config.js index.html inside tests dir.
