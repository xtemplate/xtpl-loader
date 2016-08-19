'use strict';

var xtemplateCompiler = require('xtemplate/lib/compiler');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  var webpackRemainingChain = loaderUtils.getRemainingRequest(this).split('!');
  var filename = webpackRemainingChain[webpackRemainingChain.length - 1];
  var result = xtemplateCompiler.compileToStr({
    name: filename,
    isModule: true,
    withSuffix:'xtpl',
    content: source,
  });
  this.cacheable();
  this.callback(null, 'module.exports ='+ result);
};
