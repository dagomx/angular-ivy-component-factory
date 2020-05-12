import {
  Component,
  VERSION,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

import { AdDirective } from './ad.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  sampleComponents = [
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ];

  name = 'Angular ' + VERSION.major;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SecondComponent);

    const viewContainerRef = this.adHost.viewContainer;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    (<FirstComponent>componentRef.instance).title = 'Title';

  }  
}
