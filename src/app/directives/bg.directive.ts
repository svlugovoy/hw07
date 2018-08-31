import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBg]',
  host: {
    '(click)': 'onClick()'
  }
})
export class BgDirective {

  @Input('appBg') bgColor;
  @Input() fontSize;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    // this.element.nativeElement.style.background = 'lime';
  }

  onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.bgColor);
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.fontSize);
  }

  @HostListener('mouseover') onHover() {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'red');
  }

}
