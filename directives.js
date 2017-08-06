huidromApp.directive('hudiHeader', ['$http', '$compile', '$templateCache', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        scope: true,
        controllerAs: 'ctrl',
        controller: ['$scope', function MenuController($scope) {
            console.info('header directive loaded');
        }],

        link: function(scope, element, attrs, controller) {
            var templateUrl = './headerSection.html';
            $http.get(templateUrl, {
                    cache: $templateCache
                })
                .success(function(templateContent) {
                    element.replaceWith($compile(templateContent)(scope));
                });
        }
    }
}]);
huidromApp.directive('hudiMenu', ['$http', '$compile', '$templateCache', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        scope: true,
        controllerAs: 'ctrl',
        controller: ['$scope', function MenuController($scope) {
            console.info('menu directive loaded');
        }],

        link: function(scope, element, attrs, controller) {
            var templateUrl = './menuSection.html';
            $http.get(templateUrl, {
                    cache: $templateCache
                })
                .success(function(templateContent) {
                    element.replaceWith($compile(templateContent)(scope));
                });
        }
    }
}]);
huidromApp.directive('hudiResume', ['$http', '$compile', '$templateCache', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        scope: true,
        controllerAs: 'ctrl',
        controller: ['$scope', function MenuController($scope) {
            console.info('body directive loaded');
        }],

        link: function(scope, element, attrs, controller) {
            var templateUrl = './resume.html';
            $http.get(templateUrl, {
                    cache: $templateCache
                })
                .success(function(templateContent) {
                    element.replaceWith($compile(templateContent)(scope));
                });
        }
    }
}]);
huidromApp.directive('hudiExperience', ['$http', '$compile', '$templateCache', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        scope: true,
        controllerAs: 'ctrl',
        controller: ['$scope', function MenuController($scope) {
            console.info('body directive loaded');
        }],

        link: function(scope, element, attrs, controller) {
            var templateUrl = './experience.html';
            $http.get(templateUrl, {
                    cache: $templateCache
                })
                .success(function(templateContent) {
                    element.replaceWith($compile(templateContent)(scope));
                });
        }
    }
}]);
huidromApp.directive('hudiWorkDemo', ['$http', '$compile', '$templateCache', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        scope: true,
        controllerAs: 'ctrl',
        controller: ['$scope', function MenuController($scope) {
            console.info('body directive loaded');
        }],

        link: function(scope, element, attrs, controller) {
            var templateUrl = './work.demo.html';
            $http.get(templateUrl, {
                    cache: $templateCache
                })
                .success(function(templateContent) {
                    element.replaceWith($compile(templateContent)(scope));
                });
        }
    }
}]);
huidromApp.directive('hudiProjects', ['$http', '$compile', '$templateCache', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        scope: true,
        controllerAs: 'ctrl',
        controller: ['$scope', function MenuController($scope) {
            console.info('body directive loaded');
        }],

        link: function(scope, element, attrs, controller) {
            var templateUrl = './projects.html';
            $http.get(templateUrl, {
                    cache: $templateCache
                })
                .success(function(templateContent) {
                    element.replaceWith($compile(templateContent)(scope));
                });
        }
    }
}]);
huidromApp.directive('hudiAchievements', ['$http', '$compile', '$templateCache', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        scope: true,
        controllerAs: 'ctrl',
        controller: ['$scope', function MenuController($scope) {
            console.info('body directive loaded');
        }],

        link: function(scope, element, attrs, controller) {
            var templateUrl = './achievements.html';
            $http.get(templateUrl, {
                    cache: $templateCache
                })
                .success(function(templateContent) {
                    element.replaceWith($compile(templateContent)(scope));
                });
        }
    }
}]);
huidromApp.directive('hudiContact', ['$http', '$compile', '$templateCache', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        scope: true,
        controllerAs: 'ctrl',
        controller: ['$scope', function MenuController($scope) {
            console.info('body directive loaded');
        }],

        link: function(scope, element, attrs, controller) {
            var templateUrl = './contact.html';
            $http.get(templateUrl, {
                    cache: $templateCache
                })
                .success(function(templateContent) {
                    element.replaceWith($compile(templateContent)(scope));
                });
        }
    }
}]);