import { ViewContainerRef, TemplateRef } from "@angular/core";
import { KitchenService } from "../services/toast.service";
export declare class CooktoastDirective {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef<any>;
    toastService: KitchenService;
    type: string;
    color: string;
    this: this;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, toastService: KitchenService);
    cook_toast: number;
    setPostionRight: boolean;
    setPositionBottom: boolean;
    setPositionTop: boolean;
    setPositionLeft: boolean;
    slideToast: boolean;
    subscribeToastBehaviour(sec: number): void;
    getColor(type: string): string;
    setDecoration(newMessage: string): void;
    getDistanceinPX(distaceFromVerticalEdge: any): {
        distance: number;
        distanceType: any;
    };
    motionToVertical(containerRef: any): void;
    makeInvisible(seconds: number): void;
    cookIt(seconds: number): void;
}
