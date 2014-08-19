'use strict';

angular.module('awsApp.services', [])

.service('messageList', function(fbutil) {
    return fbutil.syncArray('messages', {limit: 50});
});