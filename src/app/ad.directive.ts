import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]'
})
export class AdDirective {
  public viewContainer: any;

  constructor(public viewContainerRef: ViewContainerRef) {
    this.viewContainer = this.viewContainerRef;
  }

}