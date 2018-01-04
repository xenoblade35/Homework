import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LikeButtonComponent } from './component/like-button/like-button.component';
import { MainActivityComponent } from './component/main-activity/main-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeButtonComponent,
    MainActivityComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
