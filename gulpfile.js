/* jslint node: true */

'use strict';

var gulp = require('gulp');

require('gript')(gulp);

gulp.config = {
    module: 'app-client',
    hostHeader: 'App client seed',
    url: 'https://github.com/Mortenagoda/app-client-seed',
    repository: 'https://github.com/Mortenagoda/app-client-seed.git'
};
