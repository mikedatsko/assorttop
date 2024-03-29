app.config(['$routeProvider', '$locationProvider', 'AnalyticsProvider', '$sceDelegateProvider',
  function($routeProvider, $locationProvider, AnalyticsProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://assort.' + ENV + '/**'
    ]);

    $routeProvider.
      when('/', {
        templateUrl: 'http://assort.' + ENV + '/js/app/home/home.view.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      }).
      // when('/articles', {
      //   templateUrl: './js/app/articles/articles.view.html',
      //   controller: 'ArticlesCtrl'
      // }).
      // when('/articles/:category', {
      //   templateUrl: './js/app/articles/articles.view.html',
      //   controller: 'ArticlesCtrl'
      // }).
      when('/admin', {
        templateUrl: 'http://assort.' + ENV + '/js/app/admin/admin.view.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      }).
      when('/login', {
        templateUrl: 'http://assort.' + ENV + '/js/app/login/login.view.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      }).
      when('/signup', {
        templateUrl: 'http://assort.' + ENV + '/js/app/signup/signup.view.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      }).
      when('/projects', {
        templateUrl: 'http://assort.' + ENV + '/js/app/projects/projects.view.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'p'
      }).
      when('/projects/:id', {
        templateUrl: 'http://assort.' + ENV + '/js/app/projects/projects.view.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'p'
      }).
      when('/features', {
        templateUrl: 'http://assort.' + ENV + '/js/app/features/features.view.html',
        controller: 'FeaturesCtrl',
        controllerAs: 'f'
      }).
      when('/features/:id', {
        templateUrl: 'http://assort.' + ENV + '/js/app/features/features.view.html',
        controller: 'FeaturesCtrl',
        controllerAs: 'f'
      }).
      when('/tasks', {
        templateUrl: 'http://assort.' + ENV + '/js/app/tasks/tasks.view.html',
        controller: 'TasksCtrl',
        controllerAs: 't'
      }).
      when('/tasks/:id', {
        templateUrl: 'http://assort.' + ENV + '/js/app/tasks/tasks.view.html',
        controller: 'TasksCtrl',
        controllerAs: 't'
      }).
      when('/sprints', {
        templateUrl: 'http://assort.' + ENV + '/js/app/sprints/sprints.view.html',
        controller: 'SprintsCtrl',
        controllerAs: 's'
      }).
      when('/sprints/:id', {
        templateUrl: 'http://assort.' + ENV + '/js/app/sprints/sprints.view.html',
        controller: 'SprintsCtrl',
        controllerAs: 's'
      }).
      // when('/:category/:article', {
      //   templateUrl: 'http://assort.' + ENV + '/js/app/article/article.view.html',
      //   controller: 'ArticleCtrl',
      //   controllerAs: 'art'
      // }).
      otherwise({
        redirectTo: '/'
      });



    $locationProvider.html5Mode(true);
    AnalyticsProvider.setAccount({
      // tracker: 'UA-74505552-1',
      name: "ASSORTTOP",
      fields: {
        // cookieDomain: 'foo.example.com',
        // cookieName: 'myNewName',
        // cookieExpires: 20000
        // See: [Analytics Field Reference](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference) for a list of all fields.
      },
      // crossDomainLinker: true,
      // crossLinkDomains: ['domain-1.com', 'domain-2.com'],
      displayFeatures: true,
      enhancedLinkAttribution: true,
      select: function (args) {
        // This function is used to qualify or disqualify an account object to be run with commands.
        // If the function does not exist, is not a function, or returns true then the account object will qualify.
        // If the function exists and returns false then the account object will be disqualified.
        // The 'args' parameter is the set of arguments (which contains the command name) that will be sent to Universal Analytics.
        return true;
      },
      set: {
        forceSSL: true
        // This is any set of `set` commands to make for the account immediately after the `create` command for the account.
        // The property key is the command and the property value is passed in as the argument, _e.g._, `ga('set', 'forceSSL', true)`.
        // Order of commands is not guaranteed as it is dependent on the implementation of the `for (property in object)` iterator.
      },
      trackEvent: true,
      trackEcommerce: true
    });
  }]
);

app.run(function($rootScope) {
  $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    //..do something
    //event.stopPropagation();  //if you don't want event to bubble up
    // console.info('chaged');
  });
});