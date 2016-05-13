System.register(['angular2/core', 'angular2/router', './hero.service', './dashboard.component', './heroes.component', './hero-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1, dashboard_component_1, heroes_component_1, hero_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <a [routerLink]=\"['Heroes']\">Heroes</a>\n    <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['dev/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            hero_service_1.HeroService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQ0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF0Q0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHVLQUtYO3dCQUNDLFNBQVMsRUFBRyxDQUFDLHVCQUF1QixDQUFDO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFOzRCQUNYLHlCQUFnQjs0QkFDaEIsMEJBQVc7eUJBQ1Y7cUJBQ0osQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNYOzRCQUNFLElBQUksRUFBRSxhQUFhOzRCQUNuQixJQUFJLEVBQUUsWUFBWTs0QkFDbEIsU0FBUyxFQUFFLDJDQUFtQjt5QkFDL0I7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsU0FBUyxFQUFFLGtDQUFlOzRCQUMxQixZQUFZLEVBQUUsSUFBSTt5QkFDbkI7d0JBQ0Q7NEJBQ0EsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLElBQUksRUFBRSxXQUFXOzRCQUNqQixTQUFTLEVBQUUsd0NBQWtCO3lCQUU5QjtxQkFDQSxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuL2hlcm8uc2VydmljZSc7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvZXNDb21wb25lbnQgfSBmcm9tICcuL2hlcm9lcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgxPnt7dGl0bGV9fTwvaDE+XHJcbiAgICA8YSBbcm91dGVyTGlua109XCJbJ0hlcm9lcyddXCI+SGVyb2VzPC9hPlxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWydEYXNoYm9hcmQnXVwiPkRhc2hib2FyZDwvYT5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICBgLFxyXG4gICAgc3R5bGVVcmxzOiAgWydkZXYvYXBwLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICBIZXJvU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICB7XHJcbiAgICBwYXRoOiAnL2RldGFpbC86aWQnLFxyXG4gICAgbmFtZTogJ0hlcm9EZXRhaWwnLFxyXG4gICAgY29tcG9uZW50OiBIZXJvRGV0YWlsQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2hlcm9lcycsXHJcbiAgICBuYW1lOiAnSGVyb2VzJyxcclxuICAgIGNvbXBvbmVudDogSGVyb2VzQ29tcG9uZW50LFxyXG4gICAgdXNlQXNEZWZhdWx0OiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgcGF0aDogJy9kYXNoYm9hcmQnLFxyXG4gIG5hbWU6ICdEYXNoYm9hcmQnLFxyXG4gIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gXHJcbn1cclxuXSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnR7XHJcbiAgICB0aXRsZTogXCJNeSBBcHAgVGl0bGVcIlxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
