import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IgnoredFilterPipe } from './ignored-filter.pipe';
import { IgnoredContactComponent } from './ignored-contact.component';



@NgModule({
  imports: [
    CommonModule,BrowserModule, NgbModule
  ],
  declarations: [IgnoredContactComponent,IgnoredFilterPipe]
})
export class IgnoredContactModule { }
