// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var serverurl= localStorage.serverurl;

angular.module('starter', ['ionic','angularFileUpload', 'starter.controllers'])

.run(function($ionicPlatform,$state) {
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

    /**
    $ionicPlatform.registerBackButtonAction(function(e) {
            e.preventDefault();

            console.log($state.$current.name)


            if ($ionicHistory.backView()) {

                $ionicHistory.goBack(-1);
            } else {
                navigator.Backbutton.goHome(function() {
                //console.log('success')
               }, function() {
                //console.log('fail')
              });
            }
            return false;
        }, 101);**/


  });
})
.directive('compilehtml', ['$compile', function ($compile) {
  return function(scope, element, attrs) {
    scope.$watch(
      function(scope) {
        return scope.$eval(attrs.compilehtml);
      },
      function(value) {
        element.html(value);
        $compile(element.contents())(scope);
      }
   )};
  }])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');






  $stateProvider

  .state('user', {
                url: '/user',

                templateUrl: 'templates/loginfull.html',
                //templateUrl: localStorage.serverurl+'client/'+'templates/loginfull.html?t='+(new Date().getTime()),
                controller: 'UserCtrl'
            })

  .state('newuser', {
                url: '/newuser',
                templateUrl: 'templates/newuser.html',
                //templateUrl: localStorage.serverurl+'client/'+'templates/loginfull.html?t='+(new Date().getTime()),
                controller: 'NewUserCtrl'
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
  .state('tab.settingmessage', {
    url: '/setting/message/:usertype',
    views: {
      'tab-setting': {
        templateUrl: 'templates/message.html',
        controller: 'MessageCtrl'
      }
    }
  })
  .state('tab.onlineclass', {
    url: '/setting/onlineclass',
    views: {
      'tab-setting': {
        templateUrl: 'templates/onlineclass.html',
        controller: 'OnlineClassCtrl'
      }
    }
  })
  .state('tab.videobroadcast', {
    url: '/setting/videobroadcast/:classtitle/:classid/:userid',
    views: {
      'tab-setting': {
        templateUrl: 'templates/broadcastvideo.html',
        controller: 'VideobroadcastCtrl'
      }
    }
  })
  .state('tab.historyvideo', {
    url: '/setting/historyvideo/:classid',
    views: {
      'tab-setting': {
        templateUrl: 'templates/historyvideo.html',
        controller: 'HistoryVideoCtrl'
      }
    }
  })

  .state('tab.studypoints', {
    url: '/setting/studypoints',
    views: {
      'tab-setting': {
        templateUrl: 'templates/studypoints.html',
        controller: 'StudyPointsCtrl'
      }
    }
  })
  .state('tab.studypointdetail', {
    url: '/setting/studypointdetail/:studypointid',
    views: {
      'tab-setting': {
        templateUrl: 'templates/studypoint-detail.html',
        controller: 'StudyPointdetailCtrl'
      }
    }
  })
  .state('tab.userdetail', {
    url: '/setting/userdetail',
    views: {
      'tab-setting': {
        templateUrl: 'templates/userdetail.html',
        controller: 'UserDetailCtrl'
      }
    }
  })


  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/user');

});
