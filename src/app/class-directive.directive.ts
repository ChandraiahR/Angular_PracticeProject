import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClassDirective]'
})
export class ClassDirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }
}
