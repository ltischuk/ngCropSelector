'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/ng-crop-selector/ngcrop.js',
      'src/ng-crop-selector/exif.js',
      'src/ng-crop-selector/*.js',
      'src/ng-crop-selector/test/**/*.spec.js',
      {pattern: 'sample/*.jpeg', included: false, served: true}

    ],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ]
  });
};
