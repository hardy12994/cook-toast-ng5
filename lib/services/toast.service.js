import { Injectable } from "@angular/core";
import { BehaviorSubject, } from "rxjs/Rx";
var KitchenService = (function () {
    function KitchenService() {
        this.positions = {
            left: false,
            right: false,
            top: false,
            bottom: false
        };
        this.slide = false;
        this.message = new BehaviorSubject("");
        this.type = new BehaviorSubject("");
    }
    KitchenService.prototype.cook = function (message, type, position, slide) {
        if (position === void 0) { position = null; }
        if (slide === void 0) { slide = false; }
        if (position) {
            for (var index in this.positions) {
                if (position[index]) {
                    this.positions[index] = position[index];
                }
                else {
                    this.positions[index] = false;
                }
            }
        }
        if (slide) {
            this.slide = true;
        }
        this.message.next(message);
        this.type.next(type);
    };
    return KitchenService;
}());
export { KitchenService };
KitchenService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
KitchenService.ctorParameters = function () { return []; };
//# sourceMappingURL=toast.service.js.map