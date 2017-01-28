import { Directive, ElementRef, AfterViewChecked} from "@angular/core";
@Directive({
    selector: "[hightlightBaseOnFirstName]"
})
export class HightlightBaseOnFirstName implements AfterViewChecked {
    private ui: ElementRef = null;
    constructor(ui: ElementRef) {
        this.ui = ui;
    }
    ngAfterViewChecked() {
        if (!this.ui) { return; }
        this.updateBackgroundColor();
    }
    private updateBackgroundColor() {
        let firstName: string = this.ui.nativeElement.innerText;
        console.log("First name:", firstName);
        this.ui.nativeElement.style.backgroundColor = firstName == "Tu" ? "red" : "White";
    }
}