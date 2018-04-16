// import _ from 'lodash';
import { cube } from './math';
import printMe from './print';
import './style.css'

function component() {

  var element = document.createElement('div');
  var btn = document.createElement('button');

  // element.innerHTML = _.join(['你好a', 'webpack'], '');
  element.innerHTML = [
    '你号webpack,',
    '10++的立方是' +  cube(10)
  ].join('\n\n');

  btn.innerHTML = '点我 快点我';
  btn.onclick = printMe;

  btn.classList.add('hello')

  element.appendChild(btn);

  return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('更新了print.js文件');
    document.body.removeChild(element);
    element = component();  // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}