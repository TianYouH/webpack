function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');
    // element.innerHTML = _.join(['你好', 'webpack'], ' ');
    console.log(_.join(['你好', 'webpack'], ' '))
    element.innerHTML = '123135456'
    return element;
  }).catch(error => {
    console.log('加载组建错误')
  })
}

// async function getComponent(params) {
//   var element = document.createElement('div');
//   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
//   element.innerHTML = _.join(['你好', 'webpack'], ' ');
//   return element;
// }

getComponent().then(component => {
  console.log(component)
  document.body.appendChild(component || '<p>12345</p>');
})