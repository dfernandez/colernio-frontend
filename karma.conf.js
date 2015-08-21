module.exports = function(config){
  config.set({

    basePath : './',

    files : [
        'app/js/app.js',
        'app/js/controllers/AboutController.js',
        'app/js/controllers/CoursesController.js',
        'app/js/controllers/HomeController.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
