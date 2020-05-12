import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { AdDirective } from './ad.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FirstComponent, SecondComponent, ThirdComponent, AdDirective],
  bootstrap: [AppComponent],
  entryComponents: [
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ]
})
export class AppModule { }
