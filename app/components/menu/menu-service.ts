/// <reference path="../../_all.d.ts"/>

module menu {

    export interface ILink {
        label:string;
        url:string;
    }

    class Link implements ILink {
        label:string;
        url:string;

        constructor(label:string, url:string) {
            this.label = label;
            this.url = url;
        }
    }

    export interface IMenuService {
        getLinks():any;
    }

    class MenuService implements IMenuService {
        private $q:ng.IQService;
        private $timeout:any;

        constructor($q:ng.IQService, $timeout) {
            this.$q = $q;
            this.$timeout = $timeout;
        }

        public getLinks():any {

            var defer = this.$q.defer();
            this.$timeout(function() {
                    var links:Array<ILink> = new Array();
                    links.push(new Link('Welcome', '#/welcome'));
                    links.push(new Link('About', '#/about'));
                    defer.resolve(links);
                }, 100);
            
            return defer.promise;
        }

        static factory() {
            var menuService = MenuService;
            menuService.$inject = ['$q', '$timeout'];
            return menuService;
        }
    }

    angular.module('menu', []).service('MenuService', MenuService.factory());
}
