import { BehaviorSubject } from "rxjs/Rx";
export declare class KitchenService {
    message: BehaviorSubject<any>;
    type: BehaviorSubject<any>;
    positions: any;
    slide: boolean;
    constructor();
    cook(message: string, type: string, position?: any, slide?: boolean): void;
}
