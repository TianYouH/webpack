import _ from 'lodash';
import './style.css';
import xm from './xm.png';
import json from './json.json'

function component() {

  console.log(json)

  var element = document.createElement('div');

  element.innerHTML = _.join(['你好a', 'webpack'], '');
  element.classList.add('hello');

  var myImg = new Image();
  myImg.src = xm;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());