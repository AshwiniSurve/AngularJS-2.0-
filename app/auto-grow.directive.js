System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrowDirective = (function () {
                function AutoGrowDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '100');
                };
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        selector: '[autoGrow]',
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG8tZ3Jvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFFSSwyQkFBb0IsRUFBYyxFQUFTLFFBQWtCO29CQUF6QyxPQUFFLEdBQUYsRUFBRSxDQUFZO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7Z0JBRTdELENBQUM7Z0JBQ0QsbUNBQU8sR0FBUDtvQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RFLENBQUM7Z0JBRUQsa0NBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hFLENBQUM7Z0JBbkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLElBQUksRUFBRTs0QkFDRixTQUFTLEVBQUUsV0FBVzs0QkFDdEIsUUFBUSxFQUFHLFVBQVU7eUJBQ3hCO3FCQUNKLENBQUM7O3FDQUFBO2dCQWNGLHdCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxpREFZQyxDQUFBIiwiZmlsZSI6ImF1dG8tZ3Jvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2F1dG9Hcm93XScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJyhmb2N1cyknOiAnb25Gb2N1cygpJyxcclxuICAgICAgICAnKGJsdXIpJyA6ICdvbkJsdXIoKSdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvR3Jvd0RpcmVjdGl2ZXtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcil7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBvbkZvY3VzKCl7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywnMjAwJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQmx1cigpe1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywnMTAwJyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
