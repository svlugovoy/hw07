import {Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyClass]'
})
export class MyClassDirective implements OnInit {

  @Input('appMyClass') clazz: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, this.clazz);
  }

}

