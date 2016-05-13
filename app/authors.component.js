System.register(['angular2/core', './author.service'], function(exports_1, context_1) {
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
    var core_1, author_service_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService) {
                    this.title = "This is an Authors title";
                    this.authors = authorService.getAuthors();
                }
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'author',
                        template: "This is an Authors template\n    {{title}}\n   <ul>\n    <li *ngFor=\"#author of authors\"> \n    {{author}}\n    </li>\n   </ul>\n    ",
                        providers: [author_service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUlJLDBCQUFZLGFBQTJCO29CQUh2QyxVQUFLLEdBQVcsMEJBQTBCLENBQUM7b0JBSXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM5QyxDQUFDO2dCQW5CTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUseUlBT1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7b0NBQUE7Z0JBU0YsdUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELCtDQU9DLENBQUEiLCJmaWxlIjoiYXV0aG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuaW1wb3J0IHtBdXRob3JTZXJ2aWNlfSBmcm9tICcuL2F1dGhvci5zZXJ2aWNlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1dGhvcicsXHJcbiAgICB0ZW1wbGF0ZTogYFRoaXMgaXMgYW4gQXV0aG9ycyB0ZW1wbGF0ZVxyXG4gICAge3t0aXRsZX19XHJcbiAgIDx1bD5cclxuICAgIDxsaSAqbmdGb3I9XCIjYXV0aG9yIG9mIGF1dGhvcnNcIj4gXHJcbiAgICB7e2F1dGhvcn19XHJcbiAgICA8L2xpPlxyXG4gICA8L3VsPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW0F1dGhvclNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aG9yc0NvbXBvbmVudHtcclxuICAgIHRpdGxlOiBzdHJpbmcgPSBcIlRoaXMgaXMgYW4gQXV0aG9ycyB0aXRsZVwiO1xyXG4gICAgYXV0aG9ycztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoYXV0aG9yU2VydmljZTpBdXRob3JTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLmF1dGhvcnMgPSBhdXRob3JTZXJ2aWNlLmdldEF1dGhvcnMoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
