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

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('sample', { read: ViewContainerRef }) sample: ViewContainerRef;

  sampleComponents = [
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ];

  name = 'Angular ' + VERSION.major;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {  
    this.sample.clear();

    // FirstComponent
    let firstComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.sampleComponents[0]);  
    
    let firstComponentRef = this.sample.createComponent(firstComponentFactory);  
    
    (<FirstComponent> firstComponentRef.instance).title = 'Page1';
    
    // SecondComponent
    let secondComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.sampleComponents[1]);  
    
    let secondComponentRef = this.sample.createComponent(secondComponentFactory);  
    
    ( <SecondComponent> secondComponentRef.instance).title = 'Page2';  
  }  
}
