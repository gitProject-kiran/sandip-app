export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('default', {
            url: '/?token',
            template: '<login author="{{launch.data.author}}"></login>',
            controller: stateController,
            controllerAs: 'launch'
        })
        .state('admin',{
            url: '/admin',
            template : '<admin></admin>'
        })
        .state('user',{
            url: '/user',
            template : '<user></user>'
        });
}

function stateController($scope, appName) {
    'ngInject';
    this.data = {
      author: 'kiran shinde',
      appName: 'app',
      description: 'description is long'
    };

}