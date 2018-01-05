import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatListModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSelectModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSelectModule
  ]
})
export class MaterialModule {  }
