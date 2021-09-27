import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueComponent } from './value.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValueFilterPipe } from './value-filter.pipe';


@NgModule({
  imports: [CommonModule,BrowserModule, NgbModule],
  declarations: [ValueComponent, ValueFilterPipe]
})
export class ValueModule { }
