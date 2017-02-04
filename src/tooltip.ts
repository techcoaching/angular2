/// <reference path="extension.d.ts" />
import { Directive, Input, ElementRef, AfterViewInit } from "@angular/core";
@Directive({
    selector: "[tooltip]"
})
export class Tooltip implements AfterViewInit {
    private dom: any = null;
    @Input() text: string = "";
    constructor(ui: ElementRef) {
        this.dom = ui.nativeElement;
    }
    ngAfterViewInit() {
        let self = this;
        window.jQuery(self.dom).tooltip({
            items: "a",
             hide: {
                delay: 250
            },
            content: function () {
                console.log(self.text);
                return self.text;
            }
        });
    }
}