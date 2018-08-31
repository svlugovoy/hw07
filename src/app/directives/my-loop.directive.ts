import {Directive, Input, OnChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective implements OnChanges {

  @Input() appMyLoopOf: Array<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnChanges() {
    console.log(this.appMyLoopOf);
    for (let item of this.appMyLoopOf) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index: this.appMyLoopOf.indexOf(item),
        custom: '###'
      });
    }
  }

}
