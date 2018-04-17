async function getComponent(params) {
  var element = document.createElement('div');
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['你好', 'webpack'], ' ');
  return element;
}

getComponent().then(component => {
  console.log(component)
  document.body.appendChild(component);
})