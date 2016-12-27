require('./hello-world.scss');

export default {
  bindings: {
    author: '@'
  },
  template: require('./hello-world.html'),
  controller: helloWorldController
};

function helloWorldController(componentsApiCheck) {
  'ngInject';

}