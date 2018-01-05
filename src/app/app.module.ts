import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeButtonComponent } from './component/like-button/like-button.component';
import { ListItemComponent } from './component/list-item/list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeworkComponent } from './component/homework/homework.component';
import { RouterModule } from '@angular/router';
import { SubjectComponent } from './component/subject/subject.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeButtonComponent,
    ListItemComponent,
    HomeworkComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
