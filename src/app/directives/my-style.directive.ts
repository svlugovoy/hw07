import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements OnInit {

  @Input('appMyStyle') style;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    for (let key in this.style ) {
        this.renderer.setStyle(this.element.nativeElement, key, this.style[key]);
    }
  }

}
