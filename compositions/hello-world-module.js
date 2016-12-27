const MODULE_NAME = 'sample-project.components';

export default MODULE_NAME;


var componentsApiCheck = require('api-check')({
  output: {
    prefix: 'sample-project-components'
  },
  verbose: false
});

angular.module(MODULE_NAME, [])
  .constant('componentsApiCheck', componentsApiCheck)
  .component('login', require('../components/login-component/login-page.js'))
  .component('admin', require('../components/admin-subscriber/admin-subscriber.js'))
  .component('user', require('../components/user-subscriber/user-subscriber.js'));