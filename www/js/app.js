// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var serverurl= localStorage.serverurl;

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('user', {
                url: '/login',
                templateUrl: 'templates/loginfull.html',
                //templateUrl: localStorage.serverurl+'client/'+'templates/loginfull.html?t='+(new Date().getTime()),
                controller: 'UserCtrl'
            })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.gpsubject', {
    url: '/gpsubject',
    views: {
      'tab-gpsubject': {
        templateUrl: 'templates/tab-gpsubject.html',
        controller: 'GPsubjectCtrl'
      }
    }
  })

   .state('tab.gpsubjectdetaillink', {
     url: '/gpsubject/0/:gpsubjectId',
    views: {
      'tab-gpsubject': {
        templateUrl: 'templates/gpsubject-detaillink.html',
        controller: 'GPsubjectDetailCtrl'
      }
    }
  })

  .state('tab.gpsubjectdetailcontent', {
     url: '/gpsubject/1/:gpsubjectId',
    views: {
      'tab-gpsubject': {
        templateUrl: 'templates/gpsubject-detailcontent.html',
        controller: 'GPsubjectDetailContentCtrl'
      }
    }
  })


  .state('tab.community', {
      url: '/community',
      views: {
        'tab-community': {
          templateUrl: 'templates/tab-community.html',
          controller: 'CommunityCtrl'
        }
      }
    })
  .state('tab.communitydetaillink', {
     url: '/community/0/:communityId',
    views: {
      'tab-community': {
        templateUrl: 'templates/community-detaillink.html',
        controller: 'CommunityDetailCtrl'
      }
    }
  })

  .state('tab.communitydetailcontent', {
     url: '/community/1/:communityId',
    views: {
      'tab-community': {
        templateUrl: 'templates/community-detailcontent.html',
        controller: 'CommunityDetailContentCtrl'
      }
    }
  })



  .state('tab.activity', {
    url: '/activity',
    views: {
      'tab-activity': {
        templateUrl: 'templates/tab-activity.html',
        controller: 'ActivityCtrl'
      }
    }
  })
  .state('tab.activitydetaillink', {
     url: '/activity/0/:activityId',
    views: {
      'tab-activity': {
        templateUrl: 'templates/activity-detaillink.html',
        controller: 'ActivityDetailCtrl'
      }
    }
  })

  .state('tab.activitydetailcontent', {
     url: '/activity/1/:activityId',
    views: {
      'tab-activity': {
        templateUrl: 'templates/activity-detailcontent.html',
        controller: 'ActivityDetailContentCtrl'
      }
    }
  })
  .state('tab.setting', {
    url: '/setting',
    views: {
      'tab-setting': {
        templateUrl: 'templates/tab-setting.html',
        controller: 'SettingCtrl'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/gpsubject');

});
