import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../models/value';
import { AlertService } from 'ngx-alerts';
import {NgbModal,NgbModalConfig ,ModalDismissReasons,NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../services/crud.service';
import { resetFakeAsyncZone } from '@angular/core/testing';


declare var $: any;

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
  providers: [NgbModalConfig, NgbModal]
  
})
export class ValueComponent implements OnInit {
  closeResult = '';
  panelOpenState = false;
  page = 4;

  constructor(private http: HttpClient, private alertService: AlertService,private modalService: NgbModal,private crudservice:CrudService,    
               config: NgbModalConfig) {
                
               }
  /////////
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

  ///////////////////
  values: Value[] = [];
  ngOnInit() {
    this.getContacts();
    /*this.getValues().subscribe((data) => {
      console.log(data)
      this.values = data;
    });*/
    
  }
  addContact(name:any,lastname:any,telnumber:any,mailadress:any,relationship:any){
    const obj={name:name.value, lastname:lastname.value, telnumber:telnumber.value, mailadress:mailadress.value, relationship:relationship.value, recentcalls:true,ignoredcontacts:true};

    this.crudservice.addContact(obj).subscribe((res)=>{
      console.log(res);
      this.getContacts();
    },(err)=>{
      console.log(err)
    })
    
    this.alertService.success("Contact has been saved")
  }
  removeContact(id:number){
    this.crudservice.removeContact(id)
    .subscribe((res)=>{
      console.log(res);
      this.getContacts();
    },(err)=>{
      console.log(err)
    })
    
    this.alertService.success("Contact has been deleted");
  }
  updateContact(id:any,name:any,lastname:any,telnumber:any,mailadress:any,relationship:any){
    const obj={id:id.value,name:name.value, lastname:lastname.value, telnumber:telnumber.value, mailadress:mailadress.value, relationship:relationship.value, recentcalls:true,ignoredcontacts:true};
    console.log(obj)
    this.crudservice.updateContact(obj).subscribe((res)=>{
      console.log(res);
      this.getContacts();
      
    },(err)=>{
      console.log(err)
    })
    
    this.alertService.success("Contact has been updated")
  }
  
  getValues() {
    return this.http.get<Value[]>('http://localhost:38509/api/contacts');
  }

  getContacts(){
    this.crudservice.getContacts()
    .subscribe((res:any)=>{
      this.values=res;
    },(err)=>{
      console.log(err)
    }
    )
  }

  ignoreContact(id:number){
    this.crudservice.ignoreContact(id,null)
    .subscribe((res)=>{
      console.log(res);
      this.getContacts();
    },(err)=>{
      console.log(err)
    })
    
    this.alertService.success("Contact has been blocked");
  }


  ////////////////////
  showAlerts(values: any): void {
    this.alertService.success('Calling : ' + values);
  }
  showAlerts2(values: any): void {
    this.alertService.info('Message sent to ' + values);
  }
  
  /////////////////////////
  

  
}

