import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['你好a', 'webpack'], '');

  return element;
}

document.body.appendChild(component());