require('./index.scss');
angular.module('politician', [
        'ngSanitize',
        'ui.router',
        require('../compositions/hello-world-module.js')
    ])
    .config(require('../routes/routes'))
    .constant('appName', 'politician')
    .run(function($rootScope, $log) {
        $rootScope.$on(function sessionExpiredListener() {
            $log.debug('session expired');
            // TODO: Node module for frame communication messages?
            // TODO: Domain checking
            top.postMessage('_SESSION_EXPIRED_', '*');
        });
    })
;