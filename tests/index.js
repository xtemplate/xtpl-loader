var tpl = require('./include/parent.xtpl');

var Xtemplate = require('xtemplate/lib/runtime');

console.log(new Xtemplate(tpl).render({
  x:1
}));

console.log('-----------------');

var tpl2 = require('./extend/page.xtpl');

console.log(new Xtemplate(tpl2).render({
  x:2
}));