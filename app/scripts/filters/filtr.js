'use strict';
var app = angular.module('anglrApp');

app.filter('greeting', function() {
    return function(strng) {
        if (strng) {
            return 'Welcome ' + strng;
        }

    }
});

/*app.filter('NameFilter', function() {
    return function(strng) {
        var sName = '';
        var count = strng.length;
        if (count == 0) {
            return '';
        } else {
            for (var i = 0; i < count; i++) {
                if (strng[i] === '@') {
                    break;
                } else {

                    sName += strng[i];
                }
            }
            return 'Welcome' + sName;
        }

    };
});*/
