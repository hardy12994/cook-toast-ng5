import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";
import { KitchenService } from "../services/toast.service";
// import { $ } from "../modules/jquerry";
var CooktoastDirective = (function () {
    function CooktoastDirective(viewContainerRef, templateRef, toastService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.toastService = toastService;
        console.log('cooking your toast just a min.');
    }
    Object.defineProperty(CooktoastDirective.prototype, "cook_toast", {
        set: function (seconds) {
            this.cookIt(seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CooktoastDirective.prototype, "setPostionRight", {
        set: function (bool) {
            if (bool) {
                this.toastService.positions['right'] = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CooktoastDirective.prototype, "setPositionBottom", {
        set: function (bool) {
            if (bool) {
                this.toastService.positions['bottom'] = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CooktoastDirective.prototype, "setPositionTop", {
        set: function (bool) {
            if (bool) {
                this.toastService.positions['top'] = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CooktoastDirective.prototype, "setPositionLeft", {
        set: function (bool) {
            if (bool) {
                this.toastService.positions['left'] = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CooktoastDirective.prototype, "slideToast", {
        set: function (bool) {
            if (bool) {
                this.toastService.slide = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    CooktoastDirective.prototype.subscribeToastBehaviour = function (sec) {
        var _this = this;
        this.toastService.message
            .subscribe(function (newMessage) {
            if (!newMessage) {
                return;
            }
            _this.toastService.type
                .subscribe(function (newType) {
                _this.color = _this.getColor(newType);
                _this.setDecoration(newMessage);
                _this.makeInvisible(sec);
            });
        });
    };
    CooktoastDirective.prototype.getColor = function (type) {
        switch (type) {
            case 'i':
                return '#0099ff'; // blue
            case 'w':
                return '#ff9900'; // yellow-orange
            case 's':
                return '#00cc7a'; // green
            case 'f':
                return '#cc0000'; // red
            default:
                return '#0099ff';
        }
    };
    CooktoastDirective.prototype.setDecoration = function (newMessage) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        var toast = document.getElementById("toast");
        // var script = document.createElement('script');
        // script.src = '../modules/jquerry.js';
        // $.
        toast.innerHTML = newMessage;
        toast.style["backgroundColor"] = this.color;
        toast.style['color'] = "#e6e6e6";
        toast.style['borderRadius'] = '5px';
        toast.style['fontFamily'] = 'verdana';
        toast.style['padding'] = '10px 10px';
        toast.style['position'] = 'fixed';
        toast.style['zIndex'] = '1';
        if (this.toastService.positions["bottom"]) {
            toast.style['bottom'] = '0px';
            toast.style.marginBottom = '30px';
        }
        if (this.toastService.positions["top"]) {
            toast.style['top'] = '0px';
            toast.style.marginTop = '30px';
        }
        if (this.toastService.positions["right"]) {
            toast.style['right'] = '0px';
            toast.style.marginRight = '15px';
        }
        if (this.toastService.positions["left"]) {
            toast.style['left'] = '0px';
            toast.style.marginLeft = '15px';
        }
    };
    CooktoastDirective.prototype.getDistanceinPX = function (distaceFromVerticalEdge) {
        return {
            distance: Number(distaceFromVerticalEdge.replace(/[^0-9]+/ig, "")),
            distanceType: distaceFromVerticalEdge.replace(/[0-9]+/ig, "")
        };
    };
    CooktoastDirective.prototype.motionToVertical = function (containerRef) {
        var that = this;
        var direction;
        var distaceFromVerticalEdge = document.getElementById("toast").style.marginRight ||
            document.getElementById("toast").style.marginLeft;
        var startFrom = this.getDistanceinPX(distaceFromVerticalEdge);
        var pathToMove = startFrom.distance + document.getElementById("toast").offsetWidth;
        for (;;) {
            if (pathToMove === 0) {
                containerRef.clear();
                break;
            }
            else {
                pathToMove--;
                startFrom.distance--;
                if (that.toastService.positions["right"]) {
                    document.getElementById("toast").style.marginRight = startFrom.distance + startFrom.distanceType;
                }
                else {
                    document.getElementById("toast").style.marginLeft = startFrom.distance + startFrom.distanceType;
                }
            }
        }
    };
    CooktoastDirective.prototype.makeInvisible = function (seconds) {
        var containerRef = this.viewContainerRef;
        var that = this;
        setTimeout(function () {
            if (that.toastService.slide) {
                that.motionToVertical(containerRef);
            }
            else {
                containerRef.clear();
            }
        }, seconds * 1000);
    };
    CooktoastDirective.prototype.cookIt = function (seconds) {
        if (!seconds) {
            return;
        }
        var that = this;
        var interval = setInterval(function () {
            var trueCount = 0;
            for (var index in that.toastService.positions) {
                if (that.toastService.positions[index]) {
                    trueCount++;
                }
            }
            if (trueCount === 2) {
                that.subscribeToastBehaviour(seconds);
                clear();
            }
        }, 0);
        var clear = function () {
            clearInterval(interval);
        };
    };
    return CooktoastDirective;
}());
export { CooktoastDirective };
CooktoastDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cook-toast]'
            },] },
];
/** @nocollapse */
CooktoastDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: KitchenService, },
]; };
CooktoastDirective.propDecorators = {
    'cook_toast': [{ type: Input, args: ['cook-toast',] },],
    'setPostionRight': [{ type: Input, args: ['cook-toastRight',] },],
    'setPositionBottom': [{ type: Input, args: ['cook-toastBottom',] },],
    'setPositionTop': [{ type: Input, args: ['cook-toastTop',] },],
    'setPositionLeft': [{ type: Input, args: ['cook-toastLeft',] },],
    'slideToast': [{ type: Input, args: ['cook-toastSlide',] },],
};
//# sourceMappingURL=toast.directive.js.map