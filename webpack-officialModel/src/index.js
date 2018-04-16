import _ from 'lodash';
import printMe from './print';

function component() {

  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['你好a', 'webpack'], '');

  btn.innerHTML = '点我 快点我';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());