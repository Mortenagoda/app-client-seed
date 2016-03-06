/// <reference path="../../_all.d.ts"/>

module Layout {
    import ILink = menu.ILink;
    import IMenuService = menu.IMenuService;
    'use strict';

    interface ILayoutBindings {
        title: string;
        currentDate:Date;
        menuLinks:Array<ILink>;
    }

    interface ILayoutController extends ILayoutBindings {
        toggleSidenav():void;
    }

    class LayoutController implements ILayoutController {
        public title:string;
        public currentDate:Date;
        public menuLinks:Array<ILink>;
        private $mdSidenav:any;

        constructor($mdSidenav, menuService:IMenuService) {
            this.$mdSidenav = $mdSidenav;
            this.title = 'App client seed';
            this.currentDate = new Date();
            menuService.getLinks().then(function (links) {
                this.menuLinks = links;
            }.bind(this));
        }

        toggleSidenav():void {
            this.$mdSidenav('left-sidenav').toggle();
        }
    }

    class LayoutComponent implements ng.IComponentOptions {
        public bindings:any;
        public controller:any;
        public templateUrl:any;
        public transclude:boolean;
        public currentDate:Date;

        constructor() {
            this.bindings = {
                title: '@'
            };
            this.transclude = true;
            this.controller = LayoutController;
            this.controller.$inject = ['$mdSidenav', 'MenuService'];
            this.templateUrl = 'components/layout/layout.html';
        }
    }

    angular.module('appLayout', ['ngMaterial', 'menu']).component('appLayout', new LayoutComponent());
}
