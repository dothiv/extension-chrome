basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'app/lib/angular/angular.js',
    'app/lib/angular/angular-*.js',
    'test/lib/angular/angular-mocks.js',
    'app/js/**/*.js',

    //Test-Specific Code
    'test/lib/chai/chai.js',
    'test/lib/chai/chai-aliases.js',
    'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
