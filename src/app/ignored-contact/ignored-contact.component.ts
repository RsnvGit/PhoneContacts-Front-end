import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Value } from '../models/value';
import { AlertService } from 'ngx-alerts';
import { CrudService } from '../services/crud.service';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ignored-contact',
  templateUrl: './ignored-contact.component.html',
  styles: [
  ]
})
export class IgnoredContactComponent implements OnInit {
  closeResult = '';
  panelOpenState = false;
  page = 4;
  constructor(private http: HttpClient,private crudservice:CrudService,private alertService: AlertService,private modalService: NgbModal,config: NgbModalConfig) {


   }
  filterText="";
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  values: Value[] = [];
  ngOnInit(): void {
    this.getIgnoredContacts();
    /*this.getValues().subscribe((data) => {
      this.values = data;
    });*/
  }
  getValues() {
    return this.http.get<Value[]>('http://localhost:38509/Ignored');
  }

  removeContact(id:number){
    this.crudservice.removeContact(id)
    .subscribe((res)=>{
      console.log(res);
      this.getIgnoredContacts();
    },(err)=>{
      console.log(err)
    })
    
    this.alertService.success("Contact has been deleted");
  }

  getIgnoredContacts(){
    this.crudservice.getIgnoredContacts()
    .subscribe((res:any)=>{
      this.values=res;
    },(err)=>{
      console.log(err)
    }
    )
  }

  unignoreContact(id:number){
    this.crudservice.unignoreContact(id,null)
    .subscribe((res)=>{
      console.log(res);
      this.getIgnoredContacts();
    },(err)=>{
      console.log(err)
    })
    this.alertService.success("Contact has been unblocked");
}
}
