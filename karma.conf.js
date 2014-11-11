// Karma configuration
// Generated on Tue Nov 11 2014 15:48:09 GMT+0000 (GMT Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],//, 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      // {pattern: 'application/**/*js', included: false},
      {pattern: 'tests/**/*js', included: true},
        'vendor/angular/angular.js',
        'vendor/angular-mocks/angular-mocks.js',
        'vendor/jquery/dist/jquery.js',
        'vendor/underscore/underscore.js',
        'vendor/angular-route/angular-route.js',
        'vendor/angular-ui-router/release/angular-ui-router.js',
        'vendor/angular-animate/angular-animate.js',
        'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
        'vendor/ng-resource/dist/ng-resource.js',
        'application/system.js',
        'application/listings/plugins/CloudDirective.js',
        'application/listings/plugins/CloudCtrl.js',
        'application/system/header/HeaderCtrl.js',
        'application/system/header/HeaderDirective.js',
        'application/system/footer/FooterCtrl.js',
        'application/system/footer/FooterDirective.js',
        // 'application/system/auth/AuthCtrl.js',
        // 'application/system/SystemApi.js',
        // 'application/profile/controllers/ProfileCtrl.js',
        // 'application/profile/controllers/DreamsCtrl.js',
        // 'application/profile/controllers/SkillsCtrl.js',
        // 'application/profile/controllers/StatsCtrl.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
