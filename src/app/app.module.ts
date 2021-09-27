import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';

import {HttpClientModule} from '@angular/common/http';



// Import BrowserAnimationsModule
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

// Import your library
import { AlertModule } from 'ngx-alerts';
import { IgnoredContactComponent } from './ignored-contact/ignored-contact.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { ValueFilterPipe } from './value/value-filter.pipe';
import { IgnoredFilterPipe } from './ignored-contact/ignored-filter.pipe';
@NgModule({
  declarations: [							
    AppComponent,
      ValueComponent,
      routingComponents,
      IgnoredContactComponent,
      ValueFilterPipe,
      IgnoredFilterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    AlertModule.forRoot({maxMessages: 5, timeout: 3000, positionY: 'bottom'}),
    MatSliderModule,
    MatInputModule,
    MatTooltipModule,
    MatExpansionModule,
    FormsModule
  ],
  
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
