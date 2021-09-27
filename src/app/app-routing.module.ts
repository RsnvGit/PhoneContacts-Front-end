import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValueComponent } from './value/value.component';
import { IgnoredContactComponent } from './ignored-contact/ignored-contact.component';
const routes: Routes = [
  {path:'',component:ValueComponent},
  {path:'igncontacts',component:IgnoredContactComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[IgnoredContactComponent,ValueComponent]