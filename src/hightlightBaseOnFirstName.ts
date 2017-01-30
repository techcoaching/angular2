import { Directive, ElementRef, AfterViewChecked, Input, Output, EventEmitter } from "@angular/core";
@Directive({
    selector: "[hightlightBaseOnFirstName]"
})
export class HightlightBaseOnFirstName implements AfterViewChecked {
    @Input() color: string = "white";
    @Input() text: string = "Tu";
    @Input() isCustombackground: boolean;
    @Output() isCustombackgroundChange: EventEmitter<boolean> = new EventEmitter();
    private dom: any = null;
    constructor(ui: ElementRef) {
        this.dom = ui.nativeElement;
    }
    ngAfterViewChecked() {
        let firstName = this.dom.innerText;
        if (firstName.indexOf(this.text) < 0) { return; }
        this.dom.style.backgroundColor = this.color;
        this.isCustombackgroundChange.emit(true);
    }
}