import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]'
})
export class RoundBlockDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mousedown',['$event']) onClick($event:any) {
    console.log('nativeElement',this.el.nativeElement)
  }
}
