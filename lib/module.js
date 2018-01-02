import { NgModule } from '@angular/core';
import { KitchenService } from './services/toast.service';
import { CooktoastDirective } from './directives/toast.directive';
var CookToastModule = (function () {
    function CookToastModule() {
    }
    return CookToastModule;
}());
export { CookToastModule };
CookToastModule.decorators = [
    { type: NgModule, args: [{
                exports: [CooktoastDirective],
                declarations: [CooktoastDirective],
                providers: [KitchenService]
            },] },
];
/** @nocollapse */
CookToastModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map