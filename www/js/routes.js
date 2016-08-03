angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    }) 
    .state('tabsController.education', {
      url: '/education',
      views: {
        'tab6': {
          templateUrl: 'templates/education.html',
          controller: 'educationCtrl'
        }
      }
    })
    .state('tabsController.progress', {
      url: '/progress',
      views: {
        'tab4': {
          templateUrl: 'templates/progress.html',
          controller: 'progressCtrl'
        }
      }
    })
    .state('tabsController.clientRegistration', {
      url: '/client/register',
      views: {
        'tab1': {
          templateUrl: 'templates/clientRegistration.html',
          controller: 'clientRegistrationCtrl'
        }
      }
    })
    .state('tabsController.clientDetails', {
      url: '/client/details',
      views: {
        'tab1': {
          templateUrl: 'templates/clientDetails.html',
          controller: 'clientDetailsCtrl'
        }
      }
    })
    .state('tabsController', {
      url: '/home',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
    .state('tabsController.survey', {
      url: '/survey',
      views: {
        'tab2': {
          templateUrl: 'templates/survey.html',
          controller: 'surveyCtrl'
        }
      }
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});