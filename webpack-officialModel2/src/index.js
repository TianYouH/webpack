// import _ from 'lodash';
import { cube } from './math';

function component() {

  var element = document.createElement('div');

  // element.innerHTML = _.join(['你好a', 'webpack'], '');
  element.innerHTML = [
    '你号webpack,',
    '10++的立方huhu' + cube(10)
  ].join('\n\n');

  if (process.env.NODE_ENV) {
    console.log(process.env.NODE_ENV)
  }

  return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);
