System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "This is a courses title from constructor";
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'course',
                        template: "<h2>This is courses template</h2>\n       {{title}} \n       \n       <ul><input type=\"text\" autoGrow />\n        <li *ngFor=\"#course of courses\">\n            {{course}}\n        </li>\n       </ul>   \n      ",
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUlJLDBCQUFZLGFBQTJCO29CQUh2QyxVQUFLLEdBQVcsMENBQTBDLENBQUM7b0JBSXhELElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM5QyxDQUFDO2dCQXJCSjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsd05BUVA7d0JBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQzt3QkFDMUIsVUFBVSxFQUFFLENBQUMsdUNBQWlCLENBQUM7cUJBQ3BDLENBQUM7O29DQUFBO2dCQVNGLHVCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCwrQ0FPQyxDQUFBIiwiZmlsZSI6ImNvdXJzZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXHJcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSAnLi9jb3Vyc2Uuc2VydmljZSdcclxuaW1wb3J0IHtBdXRvR3Jvd0RpcmVjdGl2ZX0gZnJvbSAnLi9hdXRvLWdyb3cuZGlyZWN0aXZlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvdXJzZScsXHJcbiAgICB0ZW1wbGF0ZTogYDxoMj5UaGlzIGlzIGNvdXJzZXMgdGVtcGxhdGU8L2gyPlxyXG4gICAgICAge3t0aXRsZX19IFxyXG4gICAgICAgXHJcbiAgICAgICA8dWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0dyb3cgLz5cclxuICAgICAgICA8bGkgKm5nRm9yPVwiI2NvdXJzZSBvZiBjb3Vyc2VzXCI+XHJcbiAgICAgICAgICAgIHt7Y291cnNlfX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgPC91bD4gICBcclxuICAgICAgYCxcclxuICAgICAgcHJvdmlkZXJzOiBbQ291cnNlU2VydmljZV0sXHJcbiAgICAgIGRpcmVjdGl2ZXM6IFtBdXRvR3Jvd0RpcmVjdGl2ZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Vyc2VzQ29tcG9uZW50IHtcclxuICAgIHRpdGxlOiBTdHJpbmcgPSBcIlRoaXMgaXMgYSBjb3Vyc2VzIHRpdGxlIGZyb20gY29uc3RydWN0b3JcIjtcclxuICAgIGNvdXJzZXM7XHJcbiAgIFxyXG4gICAgY29uc3RydWN0b3IoY291cnNlU2VydmljZTpDb3Vyc2VTZXJ2aWNlKXtcclxuICAgICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZVNlcnZpY2UuZ2V0Q291cnNlcygpO1xyXG4gICB9IFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
