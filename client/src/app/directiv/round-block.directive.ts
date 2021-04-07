import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]'
})
export class RoundBlockDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mousedown',['$event']) onClick($event:any) {
    // console.log('ElementRef',this.el)
    console.log('nativeElement',this.el.nativeElement)
    // console.log('TagName',$event.target.tagName)
  }
}
