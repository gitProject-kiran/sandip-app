require('./hello-world.scss');

export default {
  template: require('./hello-world.html'),
  controller: helloWorldController
};

function helloWorldController(componentsApiCheck) {
  'ngInject';

  
}