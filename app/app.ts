/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular-route.d.ts" />
/// <reference path="../bower_components/DefinitelyTyped/angular-translate/angular-translate.d.ts" />
/// <reference path="routes.ts" />

module App {
    'use strict';

    var app = angular.module('App', ['appLayout', 'ngRoute', 'ngMaterial', 'ngAria']);

    app.config(Routes);
}
