import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[appNoTag], [noTag]'
})
export class NoTagDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  // wait for the component to render completely
  ngOnInit(): void {
      const nativeElement: HTMLElement = this.el.nativeElement;
      const parentElement: HTMLElement = nativeElement.parentElement ?? new HTMLElement();
      // move all children out of the element
      while (nativeElement.firstChild) {
          parentElement.insertBefore(nativeElement.firstChild, nativeElement);
      }
      // remove the empty element(the host)
      parentElement.removeChild(nativeElement);
  }
}
