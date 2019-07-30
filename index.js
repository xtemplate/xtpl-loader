'use strict';

var loaderUtils = require('loader-utils');
const path = require('path');

module.exports = function (source) {
  var options = loaderUtils.getOptions(this);
  const { Compiler, compilerConfig } = options;
  const name = path.basename(this.resourcePath);
  var { func, imports } = Compiler.compileToCode(Object.assign({
    name,
    isModule: true,
    withSuffix: 'xtpl',
    content: source,
    esmodule: true,
  }, compilerConfig));
  this.cacheable();
  this.callback(null, `
  
  ${imports} 
  
  var ret = ${func};
  
  ret.TPL_NAME = '${name}';
  
  export default ret;`);
};
